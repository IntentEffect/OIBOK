const escape = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[character]));

function publicationDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) throw new Error(`Invalid blog publication date: ${value}`);
  const date = new Date(`${value}T00:00:00Z`);
  if (!Number.isFinite(date.getTime()) || date.toISOString().slice(0, 10) !== value) throw new Error(`Invalid blog publication date: ${value}`);
  return date;
}

// published is the Australia/Sydney display date; published_at is the explicit UTC instant used by RSS.
function publicationInstant(post) {
  const value = post.published_at;
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z$/.test(value)) throw new Error(`Invalid blog publication timestamp: ${value}`);
  const instant = new Date(value);
  const normalised = value.includes('.') ? value : value.replace(/Z$/, '.000Z');
  if (!Number.isFinite(instant.getTime()) || instant.toISOString() !== normalised) throw new Error(`Invalid blog publication timestamp: ${value}`);
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-AU', { timeZone: 'Australia/Sydney', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(instant).map(part => [part.type, part.value]));
  if (`${parts.year}-${parts.month}-${parts.day}` !== post.published) throw new Error(`Blog publication timestamp does not match the Australia/Sydney date: ${post.path}`);
  return instant;
}

export function prepareBlogPosts(records) {
  if (!Array.isArray(records)) throw new Error('Blog metadata must be an array.');
  const routes = new Set();
  const sources = new Set();
  for (const post of records) {
    for (const key of ['source', 'path', 'title', 'description', 'author', 'published', 'published_at', 'category', 'version', 'component_version']) {
      if (typeof post[key] !== 'string' || !post[key].trim() || /[\u0000-\u0008\u000B\u000C\u000E-\u001F]/.test(post[key])) throw new Error(`Blog post has invalid ${key}: ${post.path || post.source || 'unknown'}`);
    }
    if (post.kind !== 'blog-post' || post.section !== 'Blog') throw new Error(`Blog post has invalid kind or section: ${post.path}`);
    if (!/^\/blog\/[a-z0-9-]+\/$/.test(post.path) || routes.has(post.path)) throw new Error(`Invalid or repeated blog route: ${post.path}`);
    if (!/^content\/blog\/[a-z0-9-]+\.md$/.test(post.source) || post.source === 'content/blog/index.md' || sources.has(post.source)) throw new Error(`Invalid or repeated blog source: ${post.source}`);
    publicationDate(post.published);
    publicationInstant(post);
    routes.add(post.path);
    sources.add(post.source);
  }
  // Preserve the authored order when several articles share a publication instant.
  return [...records].sort((left, right) => Date.parse(right.published_at) - Date.parse(left.published_at));
}

export function renderBlogIndex({ posts, basePath = '' }) {
  const dateFormat = new Intl.DateTimeFormat('en-AU', { dateStyle: 'long', timeZone: 'UTC' });
  const items = posts.map(post => {
    const url = `${basePath}${post.path}`;
    return `<li class="blog-list-item"><div class="blog-summary"><p class="blog-meta"><span class="blog-category">${escape(post.category)}</span><time datetime="${escape(post.published)}">${escape(dateFormat.format(publicationDate(post.published)))}</time></p><h2><a href="${escape(url)}">${escape(post.title)}</a></h2><p class="blog-description">${escape(post.description)}</p><a class="blog-read-link" href="${escape(url)}" aria-label="Read article: ${escape(post.title)}">Read article</a></div></li>`;
  });
  return `<section class="blog-index" aria-label="OIBOK articles"><ol class="blog-list">${items.join('\n')}</ol></section>`;
}

export function renderBlogFeed({ posts, siteUrl }) {
  const root = siteUrl.replace(/\/+$/, '');
  const items = posts.map(post => {
    const url = `${root}${post.path}`;
    return `    <item>
      <title>${escape(post.title)}</title>
      <link>${escape(url)}</link>
      <guid isPermaLink="true">${escape(url)}</guid>
      <description>${escape(post.description)}</description>
      <dc:creator>${escape(post.author)}</dc:creator>
      <category>${escape(post.category)}</category>
      <pubDate>${publicationInstant(post).toUTCString()}</pubDate>
    </item>`;
  });
  const latest = posts.length ? `\n    <lastBuildDate>${publicationInstant(posts[0]).toUTCString()}</lastBuildDate>` : '';
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>OIBOK Blog</title>
    <link>${escape(root + '/blog/')}</link>
    <description>Perspectives and practical guidance on organisational intelligence, AI and work.</description>
    <language>en-au</language>
    <atom:link href="${escape(root + '/blog/feed.xml')}" rel="self" type="application/rss+xml"/>${latest}
${items.join('\n')}
  </channel>
</rss>
`;
}
