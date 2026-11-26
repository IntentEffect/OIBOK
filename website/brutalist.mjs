import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const previewPath = '/brutalist';
const excludedRoutes = new Set(['/homepage-previous/', '/404.html']);
const escape = (value) => String(value).replace(/[&<>"']/g, (c) => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
const digest = (data) => crypto.createHash('sha256').update(data).digest('hex');

function snapshot(directory, prefix = '') {
  const files = new Map();
  for (const entry of fs.readdirSync(directory, {withFileTypes:true})) {
    const relative = path.join(prefix, entry.name);
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      for (const [name, hash] of snapshot(absolute, relative)) files.set(name, hash);
    } else if (entry.isFile()) files.set(relative, digest(fs.readFileSync(absolute)));
  }
  return files;
}

// Recompose the homepage's existing copy; the publication text remains the source.
function renderPreviewHero(html) {
  const hero = html.match(/<section class="hero" aria-labelledby="home-title">([\s\S]*?)<\/section>/);
  if (!hero) throw new Error('Brutalist preview: the publication homepage hero is missing.');
  const field = (expression, label) => {
    const match = hero[1].match(expression);
    if (!match) throw new Error(`Brutalist preview: missing homepage ${label}.`);
    return match[1];
  };
  const eyebrow = field(/<p class="eyebrow">([\s\S]*?)<\/p>/, 'publication label');
  const heading = field(/<h1 id="home-title">([\s\S]*?)<\/h1>/, 'headline');
  const intro = field(/<div class="hero-intro">([\s\S]*?)<\/div>/, 'introduction');
  const actions = field(/<div class="hero-actions">([\s\S]*?)<\/div>/, 'links');
  const access = field(/<p class="hero-access">([\s\S]*?)<\/p>/, 'licensing statement');
  return html.replace(hero[0], `<section class="brutalist-hero" aria-labelledby="home-title">
    <div class="brutalist-hero-title"><p class="eyebrow">${eyebrow}</p><h1 id="home-title">Start<br>with the<br>work<span class="brand-dot">.</span></h1></div>
    <div class="brutalist-hero-copy"><h2>${heading}</h2><div class="hero-intro">${intro}</div><div class="hero-actions">${actions}</div></div>
    <p class="hero-access">${access}</p>
  </section>`);
}

/** Add a presentation of the complete publication without changing its normal output. */
export function buildBrutalistPreview({root, dist, basePath, siteUrl, pageRecords}) {
  const existing = snapshot(dist);
  const previewDirectory = path.join(dist, previewPath);
  if (fs.existsSync(previewDirectory)) throw new Error('Brutalist preview would overwrite an existing route.');
  const pages = pageRecords.filter(page => !excludedRoutes.has(page.path));
  const routes = new Set(pages.map(page => page.path));
  const origin = new URL(siteUrl).origin;
  const previewBase = `${basePath}${previewPath}`;

  function previewLink(reference, pagePath = '/') {
    if (reference.startsWith('#') || reference.startsWith('?') || /^(?:mailto:|tel:|data:)/i.test(reference)) return reference;
    let url;
    try { url = new URL(reference.replaceAll('&amp;', '&'), `${siteUrl}${pagePath}`); }
    catch { return reference; }
    if (url.origin !== origin || (basePath && !url.pathname.startsWith(`${basePath}/`))) return reference;
    let route = url.pathname.slice(basePath.length).replace(/\/index\.html$/, '/');
    if (!routes.has(route) && routes.has(`${route}/`)) route += '/';
    if (!routes.has(route)) return reference;
    const prefix = /^https?:\/\//i.test(reference) ? origin : reference.startsWith('//') ? `//${url.host}` : '';
    return escape(`${prefix}${previewBase}${route}${url.search}${url.hash}`);
  }

  const assetUrls = {};
  fs.mkdirSync(path.join(previewDirectory, 'assets'), {recursive:true});
  for (const filename of ['brutalist.css', 'brutalist-client.js']) {
    const data = fs.readFileSync(path.join(root, 'website', filename));
    const extension = path.extname(filename);
    const versioned = `${path.basename(filename, extension)}.${digest(data).slice(0, 12)}${extension}`;
    fs.writeFileSync(path.join(previewDirectory, 'assets', versioned), data);
    assetUrls[filename] = `${previewBase}/assets/${versioned}`;
  }

  for (const page of pages) {
    let html = fs.readFileSync(path.join(dist, page.file), 'utf8');
    html = html.replace(/\b(href|src)="([^"]+)"/g, (_, attribute, reference) => `${attribute}="${previewLink(reference, page.path)}"`);
    // Search and the interactive model use their own base-path attributes.
    html = html.replace(/data-base-path="[^"]*"/g, `data-base-path="${escape(previewBase)}"`);
    html = html.replace(/(<body\b[^>]*\bclass=")([^"]*)"/, '$1$2 brutalist-preview"');
    html = html.replace(/<title>([\s\S]*?)<\/title>/, '<title>$1 · Brutalist preview</title>');
    html = html.replace(/<meta name="theme-color" content="[^"]*">/, '<meta name="theme-color" content="#f4f2e9">');
    // Alternate presentation, same publication: retain standard canonical URLs.
    html = html.replace(/<link rel="canonical" href="[^"]+">/, `<link rel="canonical" href="${escape(siteUrl + page.path)}">`);
    html = html.replace(/<meta property="og:url" content="[^"]+">/, `<meta property="og:url" content="${escape(siteUrl + previewPath + page.path)}">`);
    html = html.replace('</head>', `  <meta name="robots" content="noindex,follow">\n  <link rel="stylesheet" href="${assetUrls['brutalist.css']}">\n  <script src="${assetUrls['brutalist-client.js']}" defer></script>\n</head>`);
    html = html.replace('<header class="site-header">', `<div class="brutalist-preview-bar" aria-label="Design preview"><span>Brutalist preview</span><a data-standard-view href="${escape(basePath + page.path)}">View standard website</a></div>\n  <header class="site-header">`);
    if (page.path === '/') html = renderPreviewHero(html);
    const target = path.join(previewDirectory, page.file);
    fs.mkdirSync(path.dirname(target), {recursive:true});
    fs.writeFileSync(target, html);
  }

  const search = JSON.parse(fs.readFileSync(path.join(dist, 'search-index.json'), 'utf8'));
  const previewSearch = search.map(entry => ({...entry, url:previewLink(entry.url)}));
  fs.writeFileSync(path.join(previewDirectory, 'search-index.json'), JSON.stringify(previewSearch));

  // This additive step must never edit an existing page, download or discovery file.
  for (const [filename, hash] of existing) {
    if (digest(fs.readFileSync(path.join(dist, filename))) !== hash) throw new Error(`Brutalist preview changed existing output: ${filename}`);
  }
  console.log(`Added ${pages.length} brutalist preview pages at ${previewBase}/; preserved ${existing.size} existing files.`);
}
