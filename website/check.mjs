import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { prepareBlogPosts } from './blog.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const dist=path.join(root,'dist');
const info=JSON.parse(fs.readFileSync(path.join(dist,'build-info.json'),'utf8'));
const base=info.basePath;
const errors=[];
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
 const founderCredit=html.match(/<div class="founder-credit">([\s\S]*?)<\/div>/)?.[1] || '';
 if(!founderCredit.includes('Founded by ') || !founderCredit.includes('aria-label="Intent &amp; Effect"') || !founderCredit.includes(', developed by the OIBOK community.'))errors.push(`${file}: missing accessible founder attribution`);
 if(/sandbox:|oai-library:|chatgpt\.com\/api\/library|turn\d+(?:search|view)\d/.test(html))errors.push(`${file}: internal-only source reference`);
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
const manifest=JSON.parse(fs.readFileSync(path.join(root,'sources/import-checksums.json'),'utf8'));
for(const source of manifest.files){const data=fs.readFileSync(path.join(root,source.path));if(data.length!==source.bytes || crypto.createHash('sha256').update(data).digest('hex')!==source.sha256)errors.push(`Imported source changed: ${source.path}`);}
const search=JSON.parse(fs.readFileSync(path.join(dist,'search-index.json'),'utf8'));
for(const result of search){if(!result.title || typeof result.text!=='string' || !result.url)errors.push('Invalid search entry');else checkLink(path.join(dist,'index.html'),result.url);}

// Check the independently consumable agent sources, not just their HTML links.
const cataloguePath=path.join(dist,'agents/manifest.json');
const catalogue=JSON.parse(fs.readFileSync(cataloguePath,'utf8'));
const expectedPages=['website/imported-pages.json','website/policy-pages.json','website/extra-pages.json','website/blog-posts.json'].flatMap(file=>JSON.parse(fs.readFileSync(path.join(root,file),'utf8')));
const expectedSources=new Set(expectedPages.map(page=>page.source));
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
  if(!bytes.equals(fs.readFileSync(original)) || bytes.length!==doc.bytes || crypto.createHash('sha256').update(bytes).digest('hex')!==doc.sha256)errors.push(`Agent catalogue: source bytes or hash mismatch for ${doc.id}`);
 }
 if(doc.kind==='chapter' && (doc.publication_edition!=='1.0' || doc.component_version!=='0.3' || doc.toolkit_version!==null))errors.push(`Agent catalogue: incorrect chapter versions for ${doc.id}`);
 if(doc.kind==='tool' && (doc.toolkit_version!=='0.1' || doc.component_version!=='0.1' || doc.publication_edition!==null))errors.push(`Agent catalogue: incorrect toolkit versions for ${doc.id}`);
 const expectedRepositoryUrl=`${catalogue.repository_url}/blob/${catalogue.source_commit || 'main'}/${doc.repository_path}`;
 if(doc.repository_url!==expectedRepositoryUrl)errors.push(`Agent catalogue: incorrect repository revision for ${doc.id}`);
}
if(documentSources.size!==expectedSources.size || catalogue.documents.length!==info.agentDocuments)errors.push('Agent catalogue: document coverage does not match registered pages');
const guideSource=fs.readFileSync(path.join(root,'content/agents/instructions.md'));
const guideAlias=fs.readFileSync(path.join(dist,'agents/instructions.md'));
if(!guideSource.equals(guideAlias))errors.push('Agent instructions alias differs from its authored source');
const discovery=fs.readFileSync(path.join(dist,'llms.txt'),'utf8');
const discoveryLinks=[...discovery.matchAll(/\]\((https?:\/\/[^)]+)\)/g)].map(match=>match[1]);
for(const url of discoveryLinks)localSource(url);
for(const doc of catalogue.documents)if(!discoveryLinks.includes(doc.markdown_url))errors.push(`Agent discovery: missing source ${doc.id}`);
if(!discoveryLinks.includes(`${info.siteUrl}/agents/manifest.json`))errors.push('Agent discovery: missing source catalogue');
if(!discovery.startsWith('# Organisation Intelligence Body of Knowledge (OIBOK)\n'))errors.push('Agent discovery: missing project title');

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
