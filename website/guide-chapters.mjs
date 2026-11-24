import { guideVersion } from './guide-edition.mjs';

// Views into the canonical Guide, not separately maintained chapter text.
export const guideChapters = [
  ['start', null, 'Start here', '/tools/guide/'],
  ['understand', '1-understand-organisational-intelligence', '1 Understand organisational intelligence', '/model/'],
  ['frame', '2-start-with-a-worthwhile-problem', '2 Start with a worthwhile problem', '/tools/practice-review/'],
  ['diagnose', '2a-diagnose-what-is-breaking-down', '2A Diagnose what is breaking down', '/guide/companion/#run-a-diagnostic-review'],
  ['work-and-knowledge', '3-understand-the-work-and-its-knowledge', '3 Understand the work and its knowledge', '/tools/practice-review/#context-and-knowledge-map'],
  ['decisions-and-handoffs', '4-clarify-decisions-coordination-and-execution', '4 Clarify decisions coordination and execution', '/tools/practice-review/#decision-and-coordination-canvas'],
  ['people-and-ai', '5-design-how-people-and-ai-work-together', '5 Design how people and AI work together', '/tools/ai-opportunity-and-work-design/'],
  ['evaluate', '6-evaluate-the-change', '6 Evaluate the change', '/tools/outcome-and-learning/'],
  ['retain-learning', '7-turn-experience-into-lasting-capability', '7 Turn experience into lasting capability', '/tools/outcome-and-learning/#check-that-learning-persists'],
  ['extend', '8-tailor-and-extend-the-approach', '8 Tailor and extend the approach', '/guide/companion/#agree-the-cross-team-decision'],
  ['examples', 'appendix-a-worked-examples', 'Appendix A Worked examples', '/guide/silvergum/'],
  ['facilitation', 'appendix-b-facilitating-the-work', 'Appendix B Facilitating the work', '/guide/companion/'],
  ['resources', 'appendix-c-research-chapters-and-practical-tools', 'Appendix C Research chapters and practical tools', '/tools/'],
  ['sources', 'appendix-d-sources-and-version-record', 'Appendix D Sources and version record', '/releases/'],
].map(([slug, id, title, tool]) => ({path: `/guide/${slug}/`, id, title, tool}));

export function guideIndex(basePath = '') {
  return `<nav class="guide-chapter-index" aria-label="Read the Guide by chapter"><h2 id="read-by-chapter">Read by chapter</h2><ol>${guideChapters.map(c => `<li><a href="${basePath}${c.path}">${c.title}</a></li>`).join('')}</ol><p><a href="${basePath}/guide/read/">Open the full Guide reading view</a></p></nav>`;
}

export function splitGuide(html, basePath = '') {
  const starts = guideChapters.map(c => c.id === null ? 0 : html.indexOf(`<h2 id="${c.id}">`));
  if (starts.some((p, i) => p < 0 || (i && p <= starts[i - 1]))) throw new Error('Guide chapter boundary missing or out of order');
  return guideChapters.map((chapter, i) => {
    const sourceContent = html.slice(starts[i], starts[i + 1] ?? html.length);
    const ids = new Set([...sourceContent.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));
    let content = sourceContent.replace(/href="#([^"]+)"/g, (m, id) => ids.has(id) ? m : `href="${basePath}/guide/read/#${id}"`);
    const previous = guideChapters[i - 1], next = guideChapters[i + 1];
    content = `<p class="guide-reading-links"><a href="${basePath}/guide/#read-by-chapter">All chapters</a> · <a href="${basePath}/guide/read/${chapter.id ? '#' + chapter.id : ''}">Full reading view</a> · <a href="${basePath}${chapter.tool}">Relevant working resource</a></p>` + content;
    content += `<nav class="chapter-pagination" aria-label="Guide chapter navigation">${previous ? `<a rel="prev" href="${basePath}${previous.path}"><small>Previous</small>${previous.title}</a>` : `<a href="${basePath}/guide/"><small>Explore</small>Guide and downloads</a>`}${next ? `<a rel="next" href="${basePath}${next.path}"><small>Next</small>${next.title}</a>` : `<a href="${basePath}/guide/silvergum/"><small>Put it into practice</small>Completed Silvergum case pack</a>`}</nav><p class="source-download">Full edition: <a href="${basePath}/downloads/guide/OIBOK-Guide-Draft-${guideVersion}.pdf">OIBOK Guide (draft ${guideVersion}) PDF</a> · <a href="${basePath}/downloads/guide/OIBOK-Guide-Draft-${guideVersion}.docx">OIBOK Guide (draft ${guideVersion}) Word</a> · <a href="${basePath}/downloads/guide/OIBOK-Guide-Draft-${guideVersion}.md">OIBOK Guide (draft ${guideVersion}) Markdown</a></p>`;
    return {...chapter, content, sourceContent};
  });
}
