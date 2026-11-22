import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { renderHome, renderLayout, renderSearch } from './layout.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const json = (name) => JSON.parse(fs.readFileSync(path.join(root, name), 'utf8'));
const config = json('website/config.json');
const basePath = (process.env.BASE_PATH ?? config.basePath).replace(/\/+$/, '');
if (basePath && !/^\/[A-Za-z0-9_/-]+$/.test(basePath)) throw new Error('BASE_PATH must be empty or a URL path beginning with /.');
const siteUrl = (process.env.SITE_URL || `${config.origin}${basePath}`).replace(/\/+$/, '');
if (!/^https?:\/\//.test(siteUrl)) throw new Error('SITE_URL must be an absolute HTTP(S) URL.');
const pages = [...json('website/imported-pages.json'), ...json('website/policy-pages.json'), ...json('website/extra-pages.json')];
const escape = (value) => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const unescape = (value) => String(value).replace(/&#(x[\da-f]+|\d+);/gi, (_, n) => String.fromCodePoint(n[0].toLowerCase() === 'x' ? parseInt(n.slice(1),16) : Number(n))).replace(/&(?:amp|lt|gt|quot|apos|nbsp|#39);/g, c => ({'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&apos;':"'",'&#39;':"'",'&nbsp;':' '}[c]));
const plain = (html) => unescape(html.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();
const routes = new Set(['/', '/search/', '/404.html']);
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
for (const file of ['styles.css', 'client.js']) fs.copyFileSync(path.join(root, 'website', file), path.join(dist, 'assets', file));
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
  let content = renderMarkdown(source);
  indexPage(page, content);
  const toc = [...content.matchAll(/<h([23])\b[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/h\1>/g)].map(m=>({level:Number(m[1]),id:m[2],text:plain(m[3])}));
  const sourceDownload = `/downloads/source/${page.source}`;
  const sourceTarget = path.join(dist, sourceDownload);
  fs.mkdirSync(path.dirname(sourceTarget), {recursive:true});
  fs.copyFileSync(path.join(root,page.source),sourceTarget);
  const chapterIndex = chapterPages.findIndex(chapter=>chapter.source===page.source);
  if (chapterIndex !== -1) {
    content = `<aside class="publication-note" aria-label="Edition note"><strong>OIBOK 1.0 · 15 August 2026</strong><p>This chapter is part of the released working synthesis. Its original version 0.3 metadata is retained below. The <a href="${basePath}/research/release-record/">completion record</a> promotes those unchanged chapter files into the 1.0 release. The proposed model remains open to testing and revision.</p></aside>` + content;
    const previous=chapterPages[chapterIndex-1], next=chapterPages[chapterIndex+1];
    content += `<nav class="chapter-pagination" aria-label="Chapter navigation">${previous ? `<a href="${basePath}${previous.path}"><small>Previous chapter</small>${escape(previous.title)}</a>` : `<a href="${basePath}/knowledge/"><small>Explore</small>All chapters</a>`}${next ? `<a href="${basePath}${next.path}"><small>Next chapter</small>${escape(next.title)}</a>` : `<a href="${basePath}/tools/"><small>Put it into practice</small>Explore the toolkit</a>`}</nav>`;
  }
  content += `<p class="source-download"><a href="${basePath}${sourceDownload}" download>Download this page’s Markdown source</a></p>`;
  writePage(page.path, renderLayout({...page,content,toc,sourcePath:page.source,basePath}));
}
writePage('/',renderLayout({title:config.title,description:config.description,content:renderHome({basePath}),basePath,isHome:true}));
writePage('/search/',renderLayout({title:'Search OIBOK',description:'Find a concept, question, chapter or practical resource.',content:renderSearch({basePath}),basePath,section:'search'}));
writePage('/404.html',renderLayout({title:'Page not found',description:'This address does not match a page in the current website.',content:`<p>Visit the <a href="${basePath}/knowledge/">body of knowledge</a>, browse the <a href="${basePath}/tools/">practical tools</a> or <a href="${basePath}/search/">search the publication</a>.</p>`,basePath}));
fs.writeFileSync(path.join(dist,'search-index.json'),JSON.stringify(search));
fs.writeFileSync(path.join(dist,'.nojekyll'),'');
fs.writeFileSync(path.join(dist,'robots.txt'),`User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
const sitemap=['/',...pages.map(page=>page.path),'/search/'].map(p=>`  <url><loc>${escape(siteUrl+p)}</loc></url>`).join('\n');
fs.writeFileSync(path.join(dist,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap}\n</urlset>\n`);
fs.writeFileSync(path.join(dist,'build-info.json'),JSON.stringify({basePath,siteUrl,pages:pageRecords.length,searchEntries:search.length},null,2)+'\n');
console.log(`Built ${pageRecords.length} pages and ${search.length} search sections at ${basePath || '/'}.`);
