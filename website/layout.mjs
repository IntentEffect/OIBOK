const escape = (value = '') => String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);

const links = [
  ['knowledge', 'Knowledge', '/knowledge/'],
  ['tools', 'Tools', '/tools/'],
  ['research', 'Research', '/research/'],
  ['contribute', 'Contribute', '/contribute/'],
  ['about', 'About', '/about/'],
];

const arrow = '<span aria-hidden="true"><svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 16 16 4M5 4h11v11"/></svg></span>';
const repositoryUrl = 'https://github.com/IntentEffect/OIBOK';
// GitHub mark from Primer Octicons. See assets/octicons-LICENSE.txt.
const githubIcon = '<svg class="github-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" focusable="false"><path d="M6.766 11.328c-2.063-.25-3.516-1.734-3.516-3.656 0-.781.281-1.625.75-2.188-.203-.515-.172-1.609.063-2.062.625-.078 1.468.25 1.968.703.594-.187 1.219-.281 1.985-.281.765 0 1.39.094 1.953.265.484-.437 1.344-.765 1.969-.687.218.422.25 1.515.046 2.047.5.593.766 1.39.766 2.203 0 1.922-1.453 3.375-3.547 3.64.531.344.89 1.094.89 1.954v1.625c0 .468.391.734.86.547C13.781 14.359 16 11.53 16 8.03 16 3.61 12.406 0 7.984 0 3.563 0 0 3.61 0 8.031a7.88 7.88 0 0 0 5.172 7.422c.422.156.828-.125.828-.547v-1.25c-.219.094-.5.156-.75.156-1.031 0-1.64-.562-2.078-1.609-.172-.422-.36-.672-.719-.719-.187-.015-.25-.093-.25-.187 0-.188.313-.328.625-.328.453 0 .844.281 1.25.86.313.452.64.655 1.031.655s.641-.14 1-.5c.266-.265.47-.5.657-.656"/></svg>';

export function renderHome({ basePath = '' } = {}) {
  const url = (path) => `${basePath}${path}`;
  return `<section class="hero" aria-labelledby="home-title">
  <p class="eyebrow"><span class="small-square" aria-hidden="true"></span>Organisation Intelligence Body of Knowledge</p>
  <div class="hero-grid">
    <h1 id="home-title">Build the organisational capability to <em>prosper with AI.</em></h1>
    <div class="hero-intro">
      <p class="hero-summary">Better decisions.<br>Coordinated work.<br>Lasting improvement.</p>
      <p>OIBOK is an open body of knowledge and practical toolkit for connecting knowledge, decisions, collective action and learning.</p>
      <p>Use it to explore worthwhile opportunities, design how people and AI work together, and evaluate whether changes improve organisational performance.</p>
    </div>
  </div>
  <div class="hero-actions">
    <a class="button" href="${url('/knowledge/')}">Read the body of knowledge <span aria-hidden="true">→</span></a>
    <a class="text-link" href="${url('/tools/')}">Explore practical tools <span aria-hidden="true">→</span></a>
  </div>
</section>

<section class="entry-section" aria-labelledby="start-title">
  <div class="section-heading"><p class="eyebrow">Start with the work</p><h2 id="start-title">From understanding<br>to useful practice.</h2></div>
  <div class="entry-list">
    <a class="entry" href="${url('/knowledge/')}"><span class="entry-number">01</span><span><strong>Understand the organisation</strong><span>Read ten connected chapters on signals, knowledge, decisions, coordination, learning and adaptation.</span></span>${arrow}</a>
    <a class="entry" href="${url('/tools/')}"><span class="entry-number">02</span><span><strong>Work through a real opportunity</strong><span>Use practical reviews and canvases to examine work, design a response and record what you learn.</span></span>${arrow}</a>
    <a class="entry" href="${url('/research/')}"><span class="entry-number">03</span><span><strong>Examine the evidence</strong><span>Explore the research approach, supporting sources, limitations and questions still to be answered.</span></span>${arrow}</a>
  </div>
</section>

<section class="framework-section" aria-labelledby="framework-title">
  <div class="framework-intro"><p class="eyebrow">A connected view</p><h2 id="framework-title">Intelligence is an<br>organisational capability.</h2><p>AI can help with particular tasks. OIBOK asks how an organisation builds and sustains the capacity to understand its circumstances, act together and improve over time.</p></div>
  <div class="transformations">
    <div><span class="transformation-number">01 /</span><h3>Orient</h3><p>Notice relevant signals. Understand the context. Bring knowledge and expertise to the situation.</p></div>
    <div><span class="transformation-number">02 /</span><h3>Coordinate</h3><p>Make decisions with clear authority. Connect people, systems and work. Follow through reliably.</p></div>
    <div><span class="transformation-number">03 /</span><h3>Improve</h3><p>Evaluate outcomes. Retain what is learned. Develop the capacity to respond to what comes next.</p></div>
  </div>
</section>

<section class="open-section" aria-labelledby="open-title">
  <p class="eyebrow">Open by design</p>
  <div><h2 id="open-title">A working synthesis.<br>An invitation to contribute.</h2><p>OIBOK brings research and practice into a shared, evolving body of knowledge. Its claims, assumptions and limitations are open to scrutiny. Contributions can strengthen the evidence, challenge an explanation or improve a practical resource.</p><div class="inline-links"><a class="text-link" href="${url('/methodology/')}">How OIBOK is researched <span aria-hidden="true">→</span></a><a class="text-link" href="${url('/contribute/')}">Contribute to OIBOK <span aria-hidden="true">→</span></a></div></div>
</section>`;
}

export function renderSearch({ basePath = '' } = {}) {
  return `<section class="search-panel" data-search-root aria-label="Search the publication"><form class="site-search" role="search"><label for="search-query">Search OIBOK</label><div class="search-field"><input id="search-query" type="search" name="q" autocomplete="off" placeholder="Search a concept, question or chapter"><button class="button" type="submit">Search</button></div></form><p class="search-status" role="status" aria-live="polite">Enter a word or phrase to search the publication.</p><ol class="search-results"></ol><noscript><p>Search requires JavaScript. You can also browse the <a href="${basePath}/knowledge/">body of knowledge</a>.</p></noscript></section>`;
}

export function renderLayout({ title, description = '', content, basePath = '', section = '', toc = [], sourcePath = '', version = '', isHome = false, markdown = '', siteUrl = '', assetPaths = {} }) {
  const url = (path) => `${basePath}${path}`;
  const sectionKey = String(section).toLowerCase().replace(/\s+/g, '-');
  const sectionLabel = links.find(([key]) => key === sectionKey)?.[1] || ({methodology:'Research methodology', governance:'Governance', licensing:'Licensing', releases:'Versions and corrections', search:'Search', agents:'For agents', 'for-agents':'For agents'})[sectionKey] || section;
  const markdownPath = String(markdown);
  const markdownHref = /^https?:\/\//.test(markdownPath) || (basePath && markdownPath.startsWith(`${basePath}/`)) ? markdownPath : url(markdownPath.startsWith('/') ? markdownPath : `/${markdownPath}`);
  const llmsHref = /^https?:\/\//.test(siteUrl) ? `${siteUrl.replace(/\/+$/, '')}/llms.txt` : url('/llms.txt');
  const navigation = links.map(([key, label, path]) => `<a href="${url(path)}"${sectionKey === key ? ' aria-current="page"' : ''}>${label}</a>`).join('');
  const contents = toc.filter((item) => item.level === 2 || item.level === 3);
  const tocHtml = contents.length > 1 ? `<aside class="page-aside"><details class="contents" open><summary>On this page</summary><nav aria-label="On this page"><ol>${contents.map((item) => `<li class="toc-level-${item.level}"><a href="#${encodeURIComponent(item.id)}">${escape(item.text)}</a></li>`).join('')}</ol></nav></details></aside>` : '';
  const sourceUrl = sourcePath ? `https://github.com/IntentEffect/OIBOK/blob/main/${sourcePath.split('/').map(encodeURIComponent).join('/')}` : '';
  const metadata = version || sourceUrl ? `<div class="page-meta">${version ? `<span>${escape(version)}</span>` : ''}${sourceUrl ? `<a href="${escape(sourceUrl)}">View source ${arrow}</a>` : ''}</div>` : '';
  const searchPanel = sectionKey === 'search' && !String(content).includes('data-search-root') ? renderSearch({ basePath }) : '';
  return `<!doctype html>
<html lang="en-AU">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escape(description || 'An open body of knowledge and practical toolkit for organisational intelligence.')}"/>
  <meta name="theme-color" content="#f6f5f0">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escape(title)} | OIBOK">
  <meta property="og:description" content="${escape(description)}">
  <title>${escape(title)} | OIBOK</title>
  ${markdown ? `<link rel="alternate" type="text/markdown" href="${escape(markdownHref)}" title="Markdown source">` : ''}
  <link rel="describedby" type="text/plain" href="${escape(llmsHref)}" title="OIBOK guide for AI agents">
  <link rel="stylesheet" href="${url(assetPaths['styles.css'] || '/assets/styles.css')}">
  <script src="${url(assetPaths['client.js'] || '/assets/client.js')}" defer></script>
</head>
<body data-base-path="${escape(basePath)}" class="${isHome ? 'home' : 'reading-page'}">
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="${url('/')}" aria-label="OIBOK home">OIBOK<span class="brand-dot" aria-hidden="true">.</span></a>
      <button class="menu-toggle" aria-controls="primary-navigation" aria-expanded="false" type="button">Menu <span aria-hidden="true">+</span></button>
      <nav id="primary-navigation" class="primary-navigation" aria-label="Main navigation">${navigation}<a class="search-link" href="${url('/search/')}"${sectionKey === 'search' ? ' aria-current="page"' : ''}><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.5"></circle><path d="m16 16 4.5 4.5"></path></svg><span>Search</span></a><a class="github-link" href="${repositoryUrl}" aria-label="OIBOK repository on GitHub" title="OIBOK repository on GitHub">${githubIcon}<span class="github-label">GitHub</span></a></nav>
    </div>
  </header>
  <main id="main" class="main-content" tabindex="-1">
    ${isHome ? content : `<div class="page-header"><nav class="breadcrumb" aria-label="Breadcrumb"><a href="${url('/')}">OIBOK</a><span aria-hidden="true">/</span><span>${escape(sectionLabel || 'Publication')}</span></nav><h1>${escape(title)}</h1>${description ? `<p class="page-introduction">${escape(description)}</p>` : ''}${metadata}</div><div class="reading-layout${tocHtml ? ' has-toc' : ''}">${tocHtml}<article class="prose">${searchPanel}${content}</article></div>`}
  </main>
  <footer class="site-footer">
    <div class="footer-top"><div><a class="brand footer-brand" href="${url('/')}">OIBOK<span class="brand-dot" aria-hidden="true">.</span></a><p class="footer-title">Organisation Intelligence<br>Body of Knowledge</p></div><nav aria-label="Publication information"><a href="${url('/about/')}">About OIBOK</a><a href="${url('/methodology/')}">Research methodology</a><a href="${url('/governance/')}">Governance</a><a href="${url('/releases/')}">Versions and corrections</a><a href="${url('/licensing/')}">Licensing and attribution</a><a href="${url('/for-agents/')}">For agents</a><a class="github-link footer-github-link" href="${repositoryUrl}">${githubIcon}<span>GitHub</span> ${arrow}</a></nav></div>
    <div class="footer-bottom">
      <div class="founder-credit"><p>Founded by <span class="ie-brand" role="img" aria-label="Intent &amp; Effect"><img class="ie-brand-mark" src="${url('/assets/intent-effect-mark.svg')}" alt="" aria-hidden="true" width="77" height="62"><span class="ie-brand-wordmark" aria-hidden="true">Intent <span class="ie-brand-amp">&amp;</span> Effect<span class="ie-brand-period">.</span></span></span>, developed by the OIBOK community.</p></div>
      <div class="licence-credit"><a class="licence-badge" rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/" title="Creative Commons Attribution-ShareAlike 4.0 International"><img src="${url('/assets/cc-by-sa.svg')}" alt="Creative Commons Attribution-ShareAlike 4.0" width="88" height="31"></a><p>Publication content. <a href="${url('/licensing/')}">See licence scope and exceptions.</a></p></div>
    </div>
  </footer>
</body>
</html>`;
}
