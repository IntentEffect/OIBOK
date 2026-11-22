import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
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
 if(!html.includes('Founded by Intent &amp; Effect, developed by the OIBOK community.'))errors.push(`${file}: missing attribution`);
 if(/sandbox:|oai-library:|chatgpt\.com\/api\/library|turn\d+(?:search|view)\d/.test(html))errors.push(`${file}: internal-only source reference`);
}
let checked=0;
function checkLink(file,ref){
 if(/^(?:https?:|mailto:|tel:|data:|\/\/)/i.test(ref))return;
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
if(errors.length){console.error(errors.slice(0,50).join('\n'));console.error(`${errors.length} checks failed.`);process.exit(1);}
console.log(`Verified ${htmlFiles.length} HTML pages, ${checked} internal links and anchors, ${manifest.files.length} unchanged source files, and ${search.length} searchable sections.`);
