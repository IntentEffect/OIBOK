import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import crypto from 'node:crypto';
import { renderHome, renderLayout, renderSearch } from './layout.mjs';
import { buildAgentResources, rewritePublicationLinks } from './agents.mjs';
import { prepareBlogPosts, renderBlogIndex, renderBlogFeed } from './blog.mjs';
import { renderModel } from './model.mjs';
import { formatPropositionRegister } from './proposition-register.mjs';
import { guideIndex, splitGuide } from './guide-chapters.mjs';
import { renderHome as renderPreviousHome, renderLayout as renderPreviousLayout, archiveMetadata } from './archives/homepage-previous.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const json = (name) => JSON.parse(fs.readFileSync(path.join(root, name), 'utf8'));
const config = json('website/config.json');
const diagrams = json('website/diagrams.json');
const basePath = (process.env.BASE_PATH ?? config.basePath).replace(/\/+$/, '');
if (basePath && !/^\/[A-Za-z0-9_/-]+$/.test(basePath)) throw new Error('BASE_PATH must be empty or a URL path beginning with /.');
const siteUrl = (process.env.SITE_URL || `${config.origin}${basePath}`).replace(/\/+$/, '');
if (!/^https?:\/\//.test(siteUrl)) throw new Error('SITE_URL must be an absolute HTTP(S) URL.');
const parsedSiteUrl = new URL(siteUrl);
if (parsedSiteUrl.search || parsedSiteUrl.hash || parsedSiteUrl.pathname.replace(/\/+$/, '') !== basePath) throw new Error('SITE_URL must have the same path as BASE_PATH and no query or fragment.');
const blogPosts = prepareBlogPosts(json('website/blog-posts.json'));
const pages = [...json('website/imported-pages.json'), ...json('website/policy-pages.json'), ...json('website/extra-pages.json'), ...blogPosts];
if (!pages.some(page => page.path === '/blog/' && page.source === 'content/blog/index.md')) throw new Error('Register the blog index at /blog/.');
const escape = (value) => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const unescape = (value) => String(value).replace(/&#(x[\da-f]+|\d+);/gi, (_, n) => String.fromCodePoint(n[0].toLowerCase() === 'x' ? parseInt(n.slice(1),16) : Number(n))).replace(/&(?:amp|lt|gt|quot|apos|nbsp|#39);/g, c => ({'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&apos;':"'",'&#39;':"'",'&nbsp;':' '}[c]));
const plain = (html) => unescape(html.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();
const routes = new Set(['/', '/homepage-previous/', '/search/', '/404.html']);
for (const page of pages) {
  if (!/^\/[a-z0-9/-]*\/$/.test(page.path) || routes.has(page.path)) throw new Error(`Invalid or duplicate page route: ${page.path}`);
  routes.add(page.path);
  const source = path.resolve(root, page.source);
  if (!source.startsWith(root + path.sep) || !fs.existsSync(source)) throw new Error(`Missing or unsafe source: ${page.source}`);
}
const pandocVersion = spawnSync('pandoc', ['--version'], {encoding:'utf8'});
if (pandocVersion.error || pandocVersion.status !== 0) throw new Error('Install Pandoc 3 (or later) to build the scholarly Markdown and footnotes.');
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
for (const folder of ['assets', 'downloads']) fs.cpSync(path.join(root, folder), path.join(dist, folder), { recursive: true });
const assetPaths = {};
for (const file of ['styles.css', 'client.js', 'model.css', 'model.js']) {
  const data = fs.readFileSync(path.join(root, 'website', file));
  const version = crypto.createHash('sha256').update(data).digest('hex').slice(0, 12);
  const extension = path.extname(file);
  const versioned = `${path.basename(file, extension)}.${version}${extension}`;
  fs.writeFileSync(path.join(dist, 'assets', versioned), data);
  // Retain the old URLs for readers with a previously cached HTML page.
  fs.writeFileSync(path.join(dist, 'assets', file), data);
  assetPaths[file] = `/assets/${versioned}`;
}
const search = [];
const pageRecords = [];
const chapterPages = pages.filter(page => /^content\/knowledge\/Project-OI-BOK-\d{3}-/.test(page.source));

function writePage(pagePath, html) {
  const filename = pagePath.endsWith('/') ? path.join(dist, pagePath, 'index.html') : path.join(dist, pagePath);
  fs.mkdirSync(path.dirname(filename), { recursive: true });
  const canonical = `${siteUrl}${pagePath}`;
  const prepared = html.replace('</head>', `  <link rel="canonical" href="${escape(canonical)}">\n  <meta property="og:url" content="${escape(canonical)}">\n</head>`);
  fs.writeFileSync(filename, prepared);
  pageRecords.push({path:pagePath,file:path.relative(dist, filename)});
}

function renderMarkdown(source) {
  source = rewritePublicationLinks(source, siteUrl, config.legacySiteUrls);
  // Remove the historical cover headings in the rendered copy only. Source bytes stay unchanged.
  let body = source.replace(/^(?:\uFEFF)?(?:\s*# [^\n]*\n)+\s*/, '');
  // Separate adjacent fields only in the opening metadata block before its rule.
  const metadata = body.match(/^((?:\*\*[^*\r\n]+:\*\*[^\r\n]*\r?\n)+)(?=(?:[ \t]*\r?\n)* {0,3}---[ \t]*(?:\r?\n|$))/);
  if (metadata) {
    const separated = metadata[1].replace(
      /^(\*\*[^*\r\n]+:\*\*[^\r\n]*?)[ \t]*\r?\n(?=\*\*[^*\r\n]+:\*\*)/gm,
      '$1  \n',
    );
    body = separated + body.slice(metadata[1].length);
  }
  const result = spawnSync('pandoc', ['--from=gfm+footnotes-raw_html', '--to=html5', '--wrap=none', '--email-obfuscation=none'], {input:body,encoding:'utf8',maxBuffer:20*1024*1024});
  if (result.error || result.status !== 0) throw new Error(result.stderr || String(result.error));
  return result.stdout
    .replace(/<p>(<img src="([^"]*\/assets\/diagrams\/[^\"]+\.svg)"[^>]*>)<\/p>/g, (_, img, src) => `<figure class="guide-figure"><a href="${src}" aria-label="Open full-size diagram">${img}</a><figcaption>Select the diagram to open the full-size SVG. A text explanation and PDF download follow.</figcaption></figure>`)
    .replace(/<table\b([^>]*)>/g, '<div class="table-scroll" tabindex="0" role="region" aria-label="Scrollable data table"><table$1>')
    .replace(/<\/table>/g, '</table></div>')
    .replace(/\b(href|src)="\/(?!\/)([^"]*)"/g, (_, attr, value) => `${attr}="${basePath}/${value}"`);
}

function indexPage(page, html) {
  const boundaries = [...html.matchAll(/<h([23])\b[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/h\1>/g)];
  if (!boundaries.length) {
    search.push({title:page.title,url:`${basePath}${page.path}`,text:plain(html),section:page.section});
    return;
  }
  const intro = plain(html.slice(0, boundaries[0].index));
  search.push({title:page.title,url:`${basePath}${page.path}`,text:`${page.description || ''} ${intro}`,section:page.section});
  for (let i=0;i<boundaries.length;i++) {
    const match=boundaries[i];
    const text=plain(html.slice(match.index + match[0].length, boundaries[i+1]?.index ?? html.length));
    // Section-level results let the reader arrive at the evidence, even in long chapters.
    const chunks=text.match(/.{1,5000}(?:\s|$)/g) || [text];
    for (const chunk of chunks) search.push({title:`${page.title}: ${plain(match[3])}`,url:`${basePath}${page.path}#${match[2]}`,text:chunk.trim(),section:page.section});
  }
}

for (const page of pages) {
  const source = fs.readFileSync(path.join(root, page.source), 'utf8');
  const chapterIndex = chapterPages.findIndex(chapter => chapter.source === page.source);
  let readingSource = source;
  if (page.path === '/knowledge/signals-and-attention/') {
    readingSource = readingSource.replace('## 11A. Signals and Attention Quality', `## 11A. Signals and Attention Quality

> **Editorial clarification, 25 November 2026.** OIBOK proposed the eight qualities below. Joseph et al. provide background on organisational attention. [See the source check](/knowledge/signals-and-attention/reader/#where-the-evidence-ends).`);
  }
  if (page.path === '/knowledge/integrated-and-responsible-organisational-intelligence/') {
    readingSource = readingSource.replace('- 429 defined terms;', '- 429 defined terms in the original chapter. **Correction, 25 November 2026.** The [final consistency record](/research/consistency-record/) confirms **432 unique terms** in the released glossary.');
  }
  if (page.path === '/knowledge/integrated-and-responsible-organisational-intelligence/') {
    const noteSections = {
      '009': '09--quality-of-the-connections',
      '007': '07--persistent-learning',
      '002': '02--selective-attention',
    };
    readingSource = readingSource.replace(/(^### OI-IP-(009|007|002) [^\n]+\n\n> [^\n]+)/gm,
      (claim, passage, id) => passage + '\n\n[Read the evidence note](/research/integrated-evidence-notes/#' + noteSections[id] + ')');
  }
  if (page.kind === 'practitioner-guide') {
    const supplement = fs.readFileSync(path.join(root, 'content/guide/booking-decision-supplement.md'), 'utf8')
      .replace(/^# Worked decision: a booking handoff/, '### Worked decision: a booking handoff');
    readingSource = readingSource.replace('## 7 Turn experience into lasting capability',
      supplement + '\n## 7 Turn experience into lasting capability');
  }
  let content = renderMarkdown(readingSource);
  if (chapterIndex !== -1) {
    content = content.replace(/^(<p><strong>Artefact ID:[\s\S]*?<\/p>)\s*<hr\s*\/?>/, '<details class="chapter-metadata"><summary>Original component metadata</summary>$1</details>');
  }
  if (page.kind === 'practitioner-guide') {
    for (const chapter of splitGuide(content, basePath)) {
      if (routes.has(chapter.path)) throw new Error(`Duplicate Guide chapter route: ${chapter.path}`);
      routes.add(chapter.path);
      const toc = [...chapter.sourceContent.matchAll(/<h([23])\b[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/h\1>/g)].map(m=>({level:Number(m[1]),id:m[2],text:plain(m[3])}));
      writePage(chapter.path, renderLayout({...page,title:chapter.title,description:`A chapter from the OIBOK Guide (${page.version.split(' · ')[0].toLowerCase()}).`,content:chapter.content,toc,sourcePath:page.source,basePath,siteUrl,markdown:`${siteUrl}/downloads/source/${page.source}`,assetPaths}));
    }
  }
  if (page.path === '/guide/') content = content.replace(/<h2 id="what-the-guide-covers">/, guideIndex(basePath) + '<h2 id="what-the-guide-covers">');
  if (page.kind === 'diagram-index') {
    const gallery = `<div class="diagram-gallery">${diagrams.figures.map(d => `<a class="diagram-card" href="${basePath}/diagrams/${escape(d.slug)}/"><img src="${basePath}/assets/diagrams/${escape(d.slug)}.svg" alt="${escape(d.title)}" width="1200" height="848" loading="lazy"><span class="diagram-card-kind">${escape(d.kind)}</span><strong>${escape(d.title)}</strong><span class="diagram-card-summary">${escape(d.summary)}</span></a>`).join('')}</div>`;
    content = content.replace(/(<h2 id="browse-the-collection">[\s\S]*?<\/h2>)\s*<ul>[\s\S]*?<\/ul>/, (_, heading) => heading + gallery);
  }
  if (page.path === '/blog/') content += renderBlogIndex({posts:blogPosts,basePath});
  indexPage(page, content);
  if (page.path === '/research/propositions/') content = formatPropositionRegister(content);
  const toc = [...content.matchAll(/<h([23])\b[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/h\1>/g)].map(m=>({level:Number(m[1]),id:m[2],text:plain(m[3])}));
  if (page.kind === 'interactive-model') content += renderModel({basePath});
  const sourceDownload = `/downloads/source/${page.source}`;
  const sourceTarget = path.join(dist, sourceDownload);
  fs.mkdirSync(path.dirname(sourceTarget), {recursive:true});
  fs.copyFileSync(path.join(root,page.source),sourceTarget);
  if (chapterIndex !== -1) {
    const readerLink = chapterIndex === 0 ? ` <a href="${basePath}/knowledge/signals-and-attention/reader/">Read the Chapter 1 reader draft</a>.` : '';
    content = `<aside class="publication-note" aria-label="Edition note"><strong>OIBOK 1.0 · Released working synthesis · 15 August 2026</strong><p>The <a href="${basePath}/research/release-record/">completion record</a> adopted this chapter as component 0.3.${readerLink}</p></aside>` + content;
    const previous=chapterPages[chapterIndex-1], next=chapterPages[chapterIndex+1];
    content += `<nav class="chapter-pagination" aria-label="Chapter navigation">${previous ? `<a href="${basePath}${previous.path}"><small>Previous chapter</small>${escape(previous.title)}</a>` : `<a href="${basePath}/knowledge/"><small>Explore</small>All chapters</a>`}${next ? `<a href="${basePath}${next.path}"><small>Next chapter</small>${escape(next.title)}</a>` : `<a href="${basePath}/tools/"><small>Put it into practice</small>Explore the toolkit</a>`}</nav>`;
  }
  content += `<p class="source-download"><a href="${basePath}${sourceDownload}" download>Download this page’s Markdown source</a></p>`;
  const markdown = `${siteUrl}${page.path === '/for-agents/' ? '/agents/instructions.md' : sourceDownload}`;
  writePage(page.path, renderLayout({...page,content,toc,sourcePath:page.source,basePath,siteUrl,markdown,assetPaths}));
}
writePage('/',renderLayout({title:config.title,description:config.description,content:renderHome({basePath}),basePath,siteUrl,assetPaths,isHome:true}));
// Retain the previous homepage for comparison without indexing it as publication content.
const previousStyles = fs.readFileSync(path.join(root, 'website/archives/homepage-previous.css'));
const previousStylesVersion = crypto.createHash('sha256').update(previousStyles).digest('hex').slice(0, 12);
const previousStylesPath = `/assets/homepage-previous.${previousStylesVersion}.css`;
fs.writeFileSync(path.join(dist, previousStylesPath), previousStyles);
const previousHome = renderPreviousLayout({title:archiveMetadata.title,description:archiveMetadata.description,content:renderPreviousHome({basePath}),basePath,siteUrl,assetPaths:{...assetPaths,'styles.css':previousStylesPath},isHome:true});
writePage('/homepage-previous/',previousHome.replace('</head>', '  <meta name="robots" content="noindex,follow">\n</head>'));
writePage('/search/',renderLayout({title:'Search OIBOK',description:'Find a concept, question, chapter or practical resource.',content:renderSearch({basePath}),basePath,siteUrl,assetPaths,section:'search'}));
writePage('/404.html',renderLayout({title:'Page not found',description:'This address does not match a page in the current website.',content:`<p>Visit the <a href="${basePath}/knowledge/">body of knowledge</a>, browse the <a href="${basePath}/tools/">practical tools</a> or <a href="${basePath}/search/">search the publication</a>.</p>`,basePath,siteUrl,assetPaths}));
fs.writeFileSync(path.join(dist,'search-index.json'),JSON.stringify(search));
fs.writeFileSync(path.join(dist,'.nojekyll'),'');
fs.writeFileSync(path.join(dist,'robots.txt'),`User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
const sitemap=['/',...pages.map(page=>page.path),'/search/'].map(p=>`  <url><loc>${escape(siteUrl+p)}</loc></url>`).join('\n');
fs.writeFileSync(path.join(dist,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap}\n</urlset>\n`);
fs.mkdirSync(path.join(dist,'blog'),{recursive:true});
fs.writeFileSync(path.join(dist,'blog/feed.xml'),renderBlogFeed({posts:blogPosts,siteUrl}));
const agents = buildAgentResources({root,dist,pages,config,siteUrl});
fs.writeFileSync(path.join(dist,'build-info.json'),JSON.stringify({basePath,siteUrl,pages:pageRecords.length,searchEntries:search.length,sourceCommit:agents.sourceCommit,agentDocuments:agents.documents,blogPosts:blogPosts.length},null,2)+'\n');
console.log(`Built ${pageRecords.length} pages and ${search.length} search sections at ${basePath || '/'}.`);
