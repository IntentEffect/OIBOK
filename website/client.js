(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const menu = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#primary-navigation');
  if (menu && navigation) {
    menu.addEventListener('click', () => {
      const expanded = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(expanded));
      navigation.classList.toggle('is-open', expanded);
      menu.querySelector('span').textContent = expanded ? '−' : '+';
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
        menu.click();
        menu.focus();
      }
    });
  }

  const contents = document.querySelector('.contents');
  if (contents && window.matchMedia('(max-width: 800px)').matches) contents.removeAttribute('open');

  const searchRoot = document.querySelector('[data-search-root]');
  if (!searchRoot) return;
  const form = searchRoot.querySelector('form');
  const input = searchRoot.querySelector('input[name="q"]');
  const status = searchRoot.querySelector('.search-status');
  const results = searchRoot.querySelector('.search-results');
  const basePath = document.body.dataset.basePath || '';
  let indexPromise;
  let queryNumber = 0;

  const normalise = (value) => String(value || '').toLocaleLowerCase('en-AU').normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
  const getIndex = () => {
    if (!indexPromise) indexPromise = fetch(`${basePath}/search-index.json`).then((response) => {
      if (!response.ok) throw new Error('Search index could not be loaded.');
      return response.json();
    }).then((data) => {
      const entries = Array.isArray(data) ? data : data.entries || [];
      return entries.map((entry) => ({ ...entry, haystack: normalise(`${entry.title} ${entry.section} ${entry.text}`), normalTitle: normalise(entry.title), normalText: normalise(entry.text) }));
    }).catch((error) => { indexPromise = undefined; throw error; });
    return indexPromise;
  };

  function appendResult(entry, words) {
    const item = document.createElement('li');
    if (entry.section) {
      const section = document.createElement('p');
      section.className = 'result-section';
      section.textContent = entry.section;
      item.append(section);
    }
    const heading = document.createElement('h2');
    const anchor = document.createElement('a');
    const rawUrl = String(entry.url || '');
    if (!rawUrl.startsWith('/') || rawUrl.startsWith('//')) return;
    anchor.href = basePath && !rawUrl.startsWith(`${basePath}/`) ? `${basePath}${rawUrl}` : rawUrl;
    anchor.textContent = entry.title;
    heading.append(anchor);
    item.append(heading);
    const excerpt = document.createElement('p');
    excerpt.className = 'result-excerpt';
    const text = String(entry.text || '').replace(/\s+/g, ' ').trim();
    const positions = words.map((word) => normalise(text).indexOf(word)).filter((position) => position >= 0);
    let start = positions.length ? Math.max(0, Math.min(...positions) - 65) : 0;
    if (start > 0) {
      const nextSpace = text.indexOf(' ', start);
      if (nextSpace >= 0) start = nextSpace + 1;
    }
    const snippet = text.slice(start, start + 230).trim();
    excerpt.textContent = `${start > 0 ? '… ' : ''}${snippet}${text.length > start + 230 ? '…' : ''}`;
    item.append(excerpt);
    results.append(item);
  }

  async function search(updateUrl = true) {
    const currentQuery = ++queryNumber;
    const query = input.value.trim();
    const words = normalise(query).split(/\s+/).filter(Boolean);
    results.replaceChildren();
    if (updateUrl) {
      const pageUrl = new URL(window.location.href);
      if (query) pageUrl.searchParams.set('q', query);
      else pageUrl.searchParams.delete('q');
      window.history.replaceState({}, '', pageUrl);
    }
    if (!words.length) {
      status.textContent = 'Enter a word or phrase to search the publication.';
      return;
    }
    status.textContent = 'Searching the publication…';
    try {
      const entries = await getIndex();
      if (currentQuery !== queryNumber) return;
      const normalQuery = normalise(query);
      const bestByUrl = new Map();
      for (const entry of entries) {
        if (!words.every((word) => entry.haystack.includes(word))) continue;
        const rawUrl = String(entry.url || '');
        if (!rawUrl.startsWith('/') || rawUrl.startsWith('//')) continue;
        const url = basePath && !rawUrl.startsWith(`${basePath}/`) ? `${basePath}${rawUrl}` : rawUrl;
        const score = words.reduce((sum, word) => sum + (entry.normalTitle.includes(word) ? 5 : 0) + (entry.normalText.includes(word) ? 2 : 0), 0)
          + (entry.normalTitle.includes(normalQuery) ? 10 : 0)
          + (entry.normalText.includes(normalQuery) ? 4 : 0);
        const previous = bestByUrl.get(url);
        if (!previous || score > previous.score) bestByUrl.set(url, { entry: { ...entry, url }, score });
      }
      const matches = [...bestByUrl.values()].sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title));
      const shown = matches.slice(0, 40);
      status.textContent = matches.length ? `${matches.length} result${matches.length === 1 ? '' : 's'} for “${query}”${matches.length > 40 ? '. Showing the first 40.' : '.'}` : `No results for “${query}”. Try fewer words or a broader concept.`;
      shown.forEach(({ entry }) => appendResult(entry, words));
    } catch {
      if (currentQuery !== queryNumber) return;
      status.textContent = 'Search is temporarily unavailable. Please try again, or use Knowledge in the navigation to browse the chapters.';
    }
  }

  form.addEventListener('submit', (event) => { event.preventDefault(); search(); });
  input.value = new URLSearchParams(window.location.search).get('q') || '';
  if (input.value) search(false);
})();
