const escape = (value = '') => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[character]));

export function renderCitation({title, version = '', author = '', published = '', pagePath = '', siteUrl = '', sourcePath = ''}) {
  if (!sourcePath || !pagePath || !siteUrl) return '';
  const year = published.match(/^\d{4}/)?.[0] || version.match(/\b20\d{2}\b/)?.[0] || (/^OIBOK 1\.0\b/.test(version) ? '2026' : 'n.d.');
  const citation = `${author || 'Intent & Effect'}. (${year}). ${title}.${version ? ` ${version}.` : ''} OIBOK. ${siteUrl}${pagePath}`;
  return `<details class="page-citation">
    <summary>Cite this page</summary>
    <label for="page-citation-text">Suggested citation</label>
    <textarea id="page-citation-text" class="citation-text" rows="4" readonly>${escape(citation)}</textarea>
    <div class="citation-actions"><button type="button" class="citation-copy-button" data-copy-citation hidden aria-controls="page-citation-text" aria-describedby="citation-status">Copy citation</button><span id="citation-status" role="status" aria-live="polite"></span></div>
    <p>Use the edition shown here and add a section or page number for a specific passage. <a href="${escape(siteUrl)}/CITATION.cff">Research-baseline citation metadata</a> · <a href="${escape(siteUrl)}/licensing/">Attribution and reuse</a>.</p>
  </details>`;
}
