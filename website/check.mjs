import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { guideVersion } from './guide-edition.mjs';
import { guideChapters } from './guide-chapters.mjs';
import { prepareBlogPosts } from './blog.mjs';
import { rewritePublicationLinks } from './agents.mjs';
import { renderModelReference, modelMetadata } from './model.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const dist=path.join(root,'dist');
const info=JSON.parse(fs.readFileSync(path.join(dist,'build-info.json'),'utf8'));
const config=JSON.parse(fs.readFileSync(path.join(root,'website/config.json'),'utf8'));
const base=info.basePath;
const errors=[];
if(new URL(info.siteUrl).pathname.replace(/\/+$/,'')!==base)errors.push('Publication URL does not match its deployment base path');
const all=[];
function walk(dir){for(const item of fs.readdirSync(dir,{withFileTypes:true})){const name=path.join(dir,item.name);if(item.isDirectory())walk(name);else all.push(name);}}
walk(dist);
const htmlFiles=all.filter(file=>file.endsWith('.html'));
const ids=new Map();
for(const file of htmlFiles){
 const html=fs.readFileSync(file,'utf8');
 const found=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 if(new Set(found).size!==found.length)errors.push(`${path.relative(dist,file)}: duplicate HTML IDs`);
 ids.set(file,new Set(found));
 if((html.match(/<h1\b/g)||[]).length!==1)errors.push(`${path.relative(dist,file)}: expected one page h1`);
 if(!html.includes('lang="en-AU"'))errors.push(`${file}: missing page language`);
 const communityCredit=html.match(/<div class="community-credit">([\s\S]*?)<\/div>/)?.[1] || '';
 if(!communityCredit.includes('Developed by the OIBOK community.'))errors.push(`${file}: missing community attribution`);
 if(/sandbox:|oai-library:|chatgpt\.com\/api\/library|turn\d+(?:search|view)\d/.test(html))errors.push(`${file}: internal-only source reference`);
 if(rewritePublicationLinks(html,info.siteUrl,config.legacySiteUrls)!==html)errors.push(`${file}: historical publication URL remains in rendered content`);
 const relative=path.relative(dist,file).split(path.sep).join('/');
 const route=relative==='index.html'?'/':relative.endsWith('/index.html')?`/${relative.slice(0,-10)}`:`/${relative}`;
 if(html.match(/<link rel="canonical" href="([^"]+)"/)?.[1]!==info.siteUrl+route)errors.push(`${relative}: incorrect canonical URL`);
}
let checked=0;
function checkLink(file,ref){
 if(/^(?:mailto:|tel:|data:)/i.test(ref))return;
 if(/^(?:https?:|\/\/)/i.test(ref)){
  try{if(new URL(ref,info.siteUrl).origin!==new URL(info.siteUrl).origin)return;}
  catch{errors.push(`${file}: malformed absolute link ${ref}`);return;}
 }
 if(/^(?:javascript|vbscript):/i.test(ref)){errors.push(`${file}: unsafe link`);return;}
 const rel=path.relative(dist,file).split(path.sep).join('/');
 let url;
 try{url=new URL(ref.replace(/&amp;/g,'&'),`https://local.invalid${base}/${rel}`);}catch{errors.push(`${rel}: malformed link ${ref}`);return;}
 let pathname;
 try{pathname=decodeURIComponent(url.pathname);}catch{errors.push(`${rel}: invalid URL encoding ${ref}`);return;}
 if(base && !(pathname===base || pathname.startsWith(base+'/'))){errors.push(`${rel}: link escapes project path ${ref}`);return;}
 pathname=pathname.slice(base.length);
 let target=path.join(dist,pathname);
 if(pathname.endsWith('/'))target=path.join(target,'index.html');
 if(!fs.existsSync(target)){errors.push(`${rel}: missing ${ref}`);return;}
 if(url.hash && ids.has(target)){
  const anchor=decodeURIComponent(url.hash.slice(1));
  if(!ids.get(target).has(anchor))errors.push(`${rel}: missing anchor ${ref}`);
 }
 checked++;
}
for(const file of htmlFiles){const html=fs.readFileSync(file,'utf8');for(const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g))checkLink(file,match[1]);}
const currentGuideRoutes = new Map([
  ['/guide/', 'Guide'],
  ['/guide/read/', 'Guide'],
  ['/guide/companion/', 'Working Companion'],
  ['/guide/silvergum/', 'Silvergum Case Pack'],
]);
const hubDownloads = new Set();
const publicationOrigin = new URL(info.siteUrl).origin;
for (const file of htmlFiles) {
  const page = path.relative(dist, file);
  const html = fs.readFileSync(file, 'utf8');
  for (const [, href, body] of html.matchAll(/<a\b[^>]*?\bhref="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)) {
    const url = new URL(href, info.siteUrl + '/' + page);
    if (url.origin !== publicationOrigin || !url.pathname.startsWith(base + '/')) continue;
    const route = url.pathname.slice(base.length);
    const download = route.match(/^\/downloads\/guide\/OIBOK-(Guide|Working-Companion|Silvergum-Case-Pack)-Draft-([\d.]+)\.(pdf|docx|md)$/);
    const book = download ? download[1].replaceAll('-', ' ') : currentGuideRoutes.get(route);
    const label = body.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const namedVersion = label.match(/\b\d+\.\d+(?:\.\d+)*\b/)?.[0];
    if (!book) {
      if (namedVersion && /\b(?:OIBOK Guide|Working Companion)\b/i.test(label) && !href.startsWith('#'))
        errors.push(`${page}: "${label}" links outside the practitioner editions: ${href}`);
      continue;
    }
    const targetVersion = download ? download[2] : guideVersion;
    if (namedVersion && namedVersion !== targetVersion)
      errors.push(`${page}: Guide edition in "${label}" does not match ${href}`);
    if ((/\bWorking Companion\b/i.test(label) && book === 'Guide') || (/\bOIBOK Guide\b/i.test(label) && book === 'Working Companion'))
      errors.push(`${page}: publication name in "${label}" does not match ${href}`);
    if (!download) continue;
    if (download[2] !== guideVersion && (namedVersion !== download[2] || !(page === 'releases/index.html' || /\barchived\b/i.test(label))))
      errors.push(`${page}: previous edition needs an explicit archive reference for ${href}`);
    if (page === 'guide/index.html') {
      const format = {pdf: 'PDF', docx: 'Word', md: 'Markdown'}[download[3]];
      if (namedVersion !== guideVersion || !label.toLowerCase().includes(book.toLowerCase()) || !label.includes(format))
        errors.push(`${page}: download label must identify ${book}, draft ${guideVersion} and ${format}`);
      hubDownloads.add(download[1] + '.' + download[3]);
    }
  }
}
for (const book of ['Guide', 'Working-Companion', 'Silvergum-Case-Pack']) {
  for (const format of ['pdf', 'docx', 'md']) {
    if (!hubDownloads.has(book + '.' + format)) errors.push(`Guide hub: missing ${book} ${format} download`);
  }
}

const manifest=JSON.parse(fs.readFileSync(path.join(root,'sources/import-checksums.json'),'utf8'));
for(const source of manifest.files){const data=fs.readFileSync(path.join(root,source.path));if(data.length!==source.bytes || crypto.createHash('sha256').update(data).digest('hex')!==source.sha256)errors.push(`Imported source changed: ${source.path}`);}
const search=JSON.parse(fs.readFileSync(path.join(dist,'search-index.json'),'utf8'));
for(const result of search){if(!result.title || typeof result.text!=='string' || !result.url)errors.push('Invalid search entry');else checkLink(path.join(dist,'index.html'),result.url);}

// Check the independently consumable agent sources, not just their HTML links.
const cataloguePath=path.join(dist,'agents/manifest.json');
const catalogue=JSON.parse(fs.readFileSync(cataloguePath,'utf8'));
const expectedPages=['website/imported-pages.json','website/policy-pages.json','website/extra-pages.json','website/blog-posts.json'].flatMap(file=>JSON.parse(fs.readFileSync(path.join(root,file),'utf8')));
const expectedSources=new Set(expectedPages.map(page=>page.source));

// Every source chapter and stable ID must remain available in the formatted register.
const registerPage = expectedPages.find(page => page.path === '/research/propositions/');
const registerSource = fs.readFileSync(path.join(root, registerPage.source), 'utf8');
const registerHtml = fs.readFileSync(path.join(dist, registerPage.path, 'index.html'), 'utf8');
const sourceIds = [...registerSource.matchAll(/^\| (OI-PROP-[A-Z]+-\d+) \|/gm)].map(match => match[1]);
const renderedIds = [...registerHtml.matchAll(/class="proposition-id" id="([^"]+)"/g)].map(match => match[1]);
const chapters = [...registerSource.matchAll(/^### 8\.\d+ /gm)];
if (!sourceIds.length || sourceIds.join('|') !== renderedIds.join('|') ||
    (registerHtml.match(/<table class="proposition-register"/g) || []).length !== chapters.length)
  errors.push('Proposition register: chapter tables or ordered proposition IDs differ from the source');

for (const [route, book] of currentGuideRoutes) {
  const record = expectedPages.find(page => page.path === route);
  const stem = book.toLowerCase().replaceAll(' ', '-');
  const source = route === '/guide/' ? 'content/guide/index.md' : `content/guide/${stem}-draft-${guideVersion}.md`;
  if (record?.source !== source || record?.component_version !== guideVersion || !record.title.includes(`(draft ${guideVersion})`))
    errors.push(`Guide catalogue: expected draft ${guideVersion} from ${source} at ${route}`);
}
const documentIds=new Set();
const documentSources=new Set();
function localSource(url){
 let parsed;
 try{parsed=new URL(url);}catch{errors.push(`Agent catalogue: invalid absolute URL ${url}`);return null;}
 const canonical=new URL(info.siteUrl);
 if(parsed.origin!==canonical.origin || (base && !parsed.pathname.startsWith(base+'/'))){errors.push(`Agent catalogue: URL outside publication ${url}`);return null;}
 checkLink(cataloguePath,url);
 let name=path.join(dist,decodeURIComponent(parsed.pathname.slice(base.length)));
 if(parsed.pathname.endsWith('/'))name=path.join(name,'index.html');
 return fs.existsSync(name)?name:null;
}
if(catalogue.site_url!==info.siteUrl || catalogue.schema_version!=='1.0')errors.push('Agent catalogue: invalid site or schema version');
if(catalogue.source_commit!==info.sourceCommit)errors.push('Agent catalogue: build and source commits differ');
if(catalogue.source_commit!==null && !/^[a-f0-9]{40}$/i.test(catalogue.source_commit))errors.push('Agent catalogue: invalid source commit');
if(process.env.GITHUB_ACTIONS==='true' && catalogue.source_commit!==process.env.GITHUB_SHA)errors.push('Agent catalogue: missing or incorrect deployment commit');
if(catalogue.research_release.version!=='1.0' || catalogue.toolkit_release.version!=='0.1')errors.push('Agent catalogue: research and toolkit editions are incorrect');
for(const doc of catalogue.documents){
 if(!doc.id || documentIds.has(doc.id))errors.push(`Agent catalogue: missing or duplicate document ID ${doc.id}`);
 documentIds.add(doc.id);
 if(!expectedSources.has(doc.repository_path) || documentSources.has(doc.repository_path))errors.push(`Agent catalogue: unexpected or repeated source ${doc.repository_path}`);
 documentSources.add(doc.repository_path);
 localSource(doc.html_url);
 const markdown=localSource(doc.markdown_url);
 const original=path.join(root,doc.repository_path);
 if(markdown && fs.existsSync(original)){
  const bytes=fs.readFileSync(markdown);
  const source=fs.readFileSync(original);
  const isGuide=doc.repository_path==='content/agents/instructions.md';
  const expected=isGuide?Buffer.from(rewritePublicationLinks(source.toString('utf8'),info.siteUrl,config.legacySiteUrls)):source;
  if(!bytes.equals(expected) || bytes.length!==doc.bytes || crypto.createHash('sha256').update(bytes).digest('hex')!==doc.sha256)errors.push(`Agent catalogue: served bytes or hash mismatch for ${doc.id}`);
  if(isGuide){
   const originalUrl=`${info.siteUrl}/downloads/source/${doc.repository_path}`;
   const originalCopy=localSource(originalUrl);
   if(doc.source_markdown_url!==originalUrl || doc.source_bytes!==source.length || doc.source_sha256!==crypto.createHash('sha256').update(source).digest('hex') || doc.content_transform!==(expected.equals(source)?null:'canonical-publication-links'))errors.push('Agent catalogue: original instructions provenance is incorrect');
   if(!originalCopy || !fs.readFileSync(originalCopy).equals(source))errors.push('Agent instructions: original Markdown download changed');
  }
 }
 if(doc.kind==='chapter' && (doc.publication_edition!=='1.0' || doc.component_version!=='0.3' || doc.toolkit_version!==null))errors.push(`Agent catalogue: incorrect chapter versions for ${doc.id}`);
 if(doc.kind==='tool' && (doc.toolkit_version!=='0.1' || doc.component_version!=='0.1' || doc.publication_edition!==null))errors.push(`Agent catalogue: incorrect toolkit versions for ${doc.id}`);
 const expectedRepositoryUrl=`${catalogue.repository_url}/blob/${catalogue.source_commit || 'main'}/${doc.repository_path}`;
 if(doc.repository_url!==expectedRepositoryUrl)errors.push(`Agent catalogue: incorrect repository revision for ${doc.id}`);
}
if(documentSources.size!==expectedSources.size || catalogue.documents.length!==info.agentDocuments)errors.push('Agent catalogue: document coverage does not match registered pages');
const guideSource=fs.readFileSync(path.join(root,'content/agents/instructions.md'));
const guideAlias=fs.readFileSync(path.join(dist,'agents/instructions.md'));
const expectedGuide=Buffer.from(rewritePublicationLinks(guideSource.toString('utf8'),info.siteUrl,config.legacySiteUrls));
if(!expectedGuide.equals(guideAlias))errors.push('Agent instructions differ from the source with canonical publication links');
const discovery=fs.readFileSync(path.join(dist,'llms.txt'),'utf8');
const discoveryLinks=[...discovery.matchAll(/\]\((https?:\/\/[^)]+)\)/g)].map(match=>match[1]);
for(const url of discoveryLinks)localSource(url);
for(const doc of catalogue.documents)if(!discoveryLinks.includes(doc.markdown_url))errors.push(`Agent discovery: missing source ${doc.id}`);
if(!discoveryLinks.includes(`${info.siteUrl}/agents/manifest.json`))errors.push('Agent discovery: missing source catalogue');
if(!discovery.startsWith('# Organisation Intelligence Body of Knowledge (OIBOK)\n'))errors.push('Agent discovery: missing project title');

// Draft practice resources must retain their status in every published representation.
const draftPages=expectedPages.filter(page=>page.status==='draft-for-practitioner-review');
const diagramFigures=JSON.parse(fs.readFileSync(path.join(root,'website/diagrams.json'),'utf8')).figures;
const expectedDraftRoutes=['/guide/','/guide/read/','/guide/companion/','/guide/silvergum/','/model/','/model/reference/','/diagrams/',...diagramFigures.map(d=>`/diagrams/${d.slug}/`)];
if(draftPages.length!==expectedDraftRoutes.length || expectedDraftRoutes.some(route=>!draftPages.some(page=>page.path===route)))errors.push('Draft publication: missing or unexpected draft route');
for(const page of draftPages){
 const file=path.join(dist,page.path,'index.html');
 const html=fs.readFileSync(file,'utf8');
 const doc=catalogue.documents.find(item=>item.repository_path===page.source);
 if(!html.includes('aria-label="Draft publication status"') || !html.includes('DRAFT · For practitioner review'))errors.push(`Draft publication: missing visible status for ${page.path}`);
 if(!/draft/i.test(page.version) || !/\bdraft\b/i.test(fs.readFileSync(path.join(root,page.source),'utf8')))errors.push(`Draft publication: missing source/version status for ${page.path}`);
 if(!doc || doc.status!=='draft-for-practitioner-review' || doc.kind!==page.kind || doc.component_version!==page.component_version || doc.publication_edition!==null || doc.toolkit_version!==null || doc.based_on_research_edition!=='1.0')errors.push(`Draft publication: incorrect agent metadata for ${page.path}`);
 if(!search.some(entry=>entry.url===base+page.path || entry.url.startsWith(base+page.path+'#')))errors.push(`Draft publication: missing search entry for ${page.path}`);
}
if(!discovery.includes('## Draft guide and visual model\n') || !discovery.includes('DRAFT resources for practitioner review'))errors.push('Draft publication: missing agent discovery status');
if(fs.readFileSync(path.join(root,'content/model/reference.md'),'utf8')!==renderModelReference())errors.push('Model reference: readable content differs from interactive source');
if(modelMetadata.version!=='0.2' || modelMetadata.researchEdition!=='1.0' || modelMetadata.areas.length!==13)errors.push('Model reference: unexpected version, research edition or area count');
const modelPage=fs.readFileSync(path.join(dist,'model/index.html'),'utf8');
if(!/src="[^\"]*model\.[a-f0-9]+\.js"/.test(modelPage) || !/href="[^\"]*model\.[a-f0-9]+\.css"/.test(modelPage))errors.push('Interactive model: missing versioned assets');
if(modelPage.includes('class="page-aside"') || (modelPage.match(/data-key="/g)||[]).length!==13)errors.push('Interactive model: unusable navigation or missing selectable area');
for(const name of ['OIBOK-Guide-Draft-0.2','OIBOK-Working-Companion-Draft-0.2','OIBOK-Guide-Draft-0.3','OIBOK-Working-Companion-Draft-0.3','OIBOK-Guide-Draft-0.4','OIBOK-Working-Companion-Draft-0.4',...['Guide','Working-Companion','Silvergum-Case-Pack'].map(book=>`OIBOK-${book}-Draft-${guideVersion}`)]){
 for(const extension of ['pdf','docx','md']){
  const file=path.join(dist,'downloads/guide',`${name}.${extension}`);
  if(!fs.existsSync(file))errors.push(`Draft download: missing ${name}.${extension}`);
  else if(extension==='pdf' && fs.readFileSync(file).subarray(0,5).toString()!=='%PDF-')errors.push(`Draft download: invalid PDF ${name}`);
  else if(extension==='md' && !fs.readFileSync(file,'utf8').includes('DRAFT · For practitioner review'))errors.push(`Draft download: missing explicit status ${name}`);
 }
}

// Chapter views keep the full Guide available and preserve its headings and navigation.
const guideHtml=fs.readFileSync(path.join(dist,'guide/read/index.html'),'utf8');
for (const [i, chapter] of guideChapters.entries()) {
 const file=path.join(dist,chapter.path,'index.html');
 if(!fs.existsSync(file)){errors.push(`Guide chapter missing: ${chapter.path}`);continue;}
 const html=fs.readFileSync(file,'utf8');
 const following=guideChapters[i+1];
 if(!html.includes('aria-label="Draft publication status"') || !html.includes('aria-label="Guide chapter navigation"') || !html.includes(`OIBOK-Guide-Draft-${guideVersion}.pdf`))errors.push(`Guide chapter: status or navigation missing at ${chapter.path}`);
 if(following && !html.includes(`rel="next" href="${base}${following.path}"`))errors.push(`Guide chapter: wrong next page at ${chapter.path}`);
 const start=chapter.id ? guideHtml.indexOf(`<h2 id="${chapter.id}">`) : guideHtml.indexOf('<h2 id="purpose-and-publication-status">');
 const end=following?.id ? guideHtml.indexOf(`<h2 id="${following.id}">`) : guideHtml.indexOf('<p class="source-download">');
 const section=guideHtml.slice(start,end);
 const sectionIds=[...section.matchAll(/<h[234]\b[^>]*id="([^"]+)"/g)].map(m=>m[1]);
 if(start<0 || end<=start || sectionIds.some(id=>!ids.get(file).has(id)))errors.push(`Guide chapter: source headings missing at ${chapter.path}`);
}
for (const [stem,book] of [['guide','Guide'],['working-companion','Working-Companion'],['silvergum-case-pack','Silvergum-Case-Pack']]) {
 const source=fs.readFileSync(path.join(root,`content/guide/${stem}-draft-${guideVersion}.md`));
 const download=fs.readFileSync(path.join(dist,`downloads/guide/OIBOK-${book}-Draft-${guideVersion}.md`));
 if(!source.equals(download))errors.push(`Guide download differs from canonical source: ${book}`);
}

// Published figures must remain available as vectors, print files and readable sources.
if(diagramFigures.length!==9)errors.push('Diagram collection: expected nine figures');
for(const figure of diagramFigures){
 const svg=path.join(dist,'assets/diagrams',figure.slug+'.svg');
 const pdf=path.join(dist,'downloads/diagrams',figure.slug+'.pdf');
 if(!fs.existsSync(svg) || !fs.readFileSync(svg,'utf8').includes('FOR PRACTITIONER REVIEW'))errors.push(`Diagram: missing vector or draft status for ${figure.slug}`);
 if(!fs.existsSync(pdf) || fs.readFileSync(pdf).subarray(0,5).toString()!=='%PDF-')errors.push(`Diagram: missing PDF for ${figure.slug}`);
 const source=fs.readFileSync(path.join(root,'content/diagrams',figure.slug+'.md'),'utf8');
 if(!source.includes('## Read the diagram') || !source.includes('CC BY-SA 4.0'))errors.push(`Diagram: missing readable explanation or licence for ${figure.slug}`);
}
const illustratedGuide=fs.readFileSync(path.join(dist,'guide/read/index.html'),'utf8');
if((illustratedGuide.match(/<figure class="guide-figure">/g)||[]).length!==9)errors.push('Illustrated Guide: expected nine embedded figures');

// Blog output must retain editorial status and agree with the one post catalogue.
const posts=prepareBlogPosts(JSON.parse(fs.readFileSync(path.join(root,'website/blog-posts.json'),'utf8')));
const blogIndexPath=path.join(dist,'blog/index.html');
const blogIndex=fs.readFileSync(blogIndexPath,'utf8');
const blogCatalogue=catalogue.documents.filter(doc=>doc.kind==='blog-post');
const blogOverview=catalogue.documents.find(doc=>doc.repository_path==='content/blog/index.md');
if(!blogOverview || blogOverview.kind!=='blog-index' || blogOverview.status!=='editorial-commentary' || blogOverview.publication_edition!==null || blogOverview.toolkit_version!==null)errors.push('Blog index: incorrectly classified as research or toolkit content');
if(blogCatalogue.length!==posts.length || info.blogPosts!==posts.length)errors.push('Blog catalogue: post count does not match metadata');
const blogDiscovery=discovery.match(/(?:^|\n)## Blog\n([\s\S]*?)(?=\n## |$)/)?.[1] || '';
if(blogOverview && !blogDiscovery.includes(blogOverview.markdown_url))errors.push('Blog discovery: missing index in Blog section');
const xmlDecode=value=>String(value).replace(/&(amp|lt|gt|quot|apos);/g,(_,entity)=>({amp:'&',lt:'<',gt:'>',quot:'"',apos:"'"}[entity]));
const sitemap=fs.readFileSync(path.join(dist,'sitemap.xml'),'utf8');
const sitemapUrls=new Set([...sitemap.matchAll(/<loc>([^<]*)<\/loc>/g)].map(match=>xmlDecode(match[1])));
for(const url of sitemapUrls)localSource(url);
if(!fs.readFileSync(path.join(dist,'robots.txt'),'utf8').includes(`Sitemap: ${info.siteUrl}/sitemap.xml\n`))errors.push('Robots file: incorrect sitemap URL');
if(!sitemapUrls.has(`${info.siteUrl}/blog/`))errors.push('Blog index: missing from sitemap');
for(const post of posts){
 const doc=blogCatalogue.find(entry=>entry.repository_path===post.source);
 if(!doc || doc.publication_edition!==null || doc.toolkit_version!==null || doc.status!=='editorial-commentary' || doc.component_version!==post.component_version || doc.version_label!==post.version || doc.author!==post.author || doc.published!==post.published || doc.published_at!==post.published_at || doc.category!==post.category)errors.push(`Blog catalogue: incorrect editorial metadata for ${post.path}`);
 if(doc && !blogDiscovery.includes(doc.markdown_url))errors.push(`Blog discovery: missing article in Blog section ${post.path}`);
 if(!blogIndex.includes(`href="${base}${post.path}"`))errors.push(`Blog index: missing article ${post.path}`);
 if(!search.some(entry=>entry.section==='Blog' && (entry.url===base+post.path || entry.url.startsWith(base+post.path+'#'))))errors.push(`Blog search: missing article ${post.path}`);
 if(!sitemapUrls.has(info.siteUrl+post.path))errors.push(`Blog sitemap: missing article ${post.path}`);
}
const feedPath=path.join(dist,'blog/feed.xml');
const feed=fs.readFileSync(feedPath,'utf8');
if(!/<rss\b[^>]*version="2\.0"/.test(feed) || !feed.includes('xmlns:atom="http://www.w3.org/2005/Atom"') || !feed.includes('xmlns:dc="http://purl.org/dc/elements/1.1/"') || /&(?!amp;|lt;|gt;|quot;|apos;)/.test(feed))errors.push('Blog feed: invalid RSS declarations or unescaped text');
const self=xmlDecode(feed.match(/<atom:link\b[^>]*href="([^"]+)"[^>]*rel="self"/)?.[1] || '');
if(self!==`${info.siteUrl}/blog/feed.xml`)errors.push('Blog feed: incorrect canonical feed URL');
else checkLink(feedPath,self);
const itemBlocks=[...feed.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(match=>match[1]);
if(itemBlocks.length!==posts.length)errors.push('Blog feed: item count does not match published posts');
const xmlTag=(block,tag)=>{
 const value=block.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`))?.[1];
 if(value===undefined || value.includes('<'))return null;
 return xmlDecode(value);
};
const channel=feed.split('<item>')[0];
if(xmlTag(channel,'link')!==`${info.siteUrl}/blog/`)errors.push('Blog feed: incorrect channel URL');
if(posts.length && Date.parse(xmlTag(channel,'lastBuildDate'))!==Date.parse(posts[0].published_at))errors.push('Blog feed: incorrect latest publication timestamp');
const feedIds=new Set();
for(let index=0;index<itemBlocks.length;index++){
 const item=itemBlocks[index],post=posts[index];
 if(!post)continue;
 const url=xmlTag(item,'link'),guid=xmlTag(item,'guid');
 if(url!==info.siteUrl+post.path || guid!==url || feedIds.has(guid))errors.push(`Blog feed: incorrect or duplicate article URL at item ${index+1}`);
 else checkLink(feedPath,url);
 feedIds.add(guid);
 if(xmlTag(item,'title')!==post.title || xmlTag(item,'description')!==post.description || xmlTag(item,'dc:creator')!==post.author || xmlTag(item,'category')!==post.category)errors.push(`Blog feed: incorrect article metadata for ${post.path}`);
 if(Date.parse(xmlTag(item,'pubDate'))!==Date.parse(post.published_at))errors.push(`Blog feed: incorrect publication timestamp for ${post.path}`);
}
if(errors.length){console.error(errors.slice(0,50).join('\n'));console.error(`${errors.length} checks failed.`);process.exit(1);}
console.log(`Verified ${htmlFiles.length} HTML pages, ${checked} internal links and anchors, ${manifest.files.length} unchanged source files, ${search.length} searchable sections, ${catalogue.documents.length} agent source records, and ${posts.length} blog posts with RSS.`);
