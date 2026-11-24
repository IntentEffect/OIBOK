// Format the web edition after Pandoc has rendered the preserved research source.
function renderRow(row, labels) {
  const cells = [...row.matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/g)].map(match => match[1]);
  const [id, proposition, assessment] = cells;
  const parts = proposition?.match(/^<strong>([\s\S]+?)<\/strong>\s*<br\s*\/?>\s*([\s\S]+?)\s*<br\s*\/?>\s*<small>Source:\s*([\s\S]+?)<\/small>$/);
  if (cells.length !== labels.length || !/^OI-PROP-[A-Z]+-\d+$/.test(id) || !parts)
    throw new Error(`Unexpected proposition row format for ${id}`);

  const [, title, statement, source] = parts;
  const fields = cells.slice(3).map((value, i) => [labels[i + 3], value]);
  fields.push(['Source', source]);
  return `<tr>
    <th scope="row"><span class="proposition-id" id="${id}">${id}</span><span class="proposition-assessment"><span>Basis / confidence</span> ${assessment}</span></th>
    <td><strong class="proposition-title">${title}</strong><p>${statement}</p>
      <details><summary aria-label="Supporting details for ${id}">Supporting details</summary>
        <dl>${fields.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join('\n')}</dl>
      </details>
    </td>
  </tr>`;
}

export function formatPropositionRegister(html) {
  return html.replace(/<h2 id="8-full-proposition-register">[\s\S]*?(?=<h2\b|$)/, section =>
    section.replace(/(<h3 id="([^"]+)">[\s\S]*?<\/h3>)\s*<div class="table-scroll"[^>]*><table\b[^>]*>([\s\S]*?)<\/table><\/div>/g,
      (_, heading, headingId, table) => {
        const labels = [...table.matchAll(/<th\b[^>]*>([\s\S]*?)<\/th>/g)].map(match => match[1]);
        const body = table.match(/<tbody>([\s\S]*?)<\/tbody>/)?.[1];
        if (labels.join('|') !== 'Stable ID|Proposition|Basis / confidence|Evidence|Glossary terms|Clusters|Disposition|Validate' || !body)
          throw new Error(`Unexpected proposition table format in ${headingId}`);
        const rows = [...body.matchAll(/<tr\b[^>]*>[\s\S]*?<\/tr>/g)].map(([row]) => renderRow(row, labels));
        return `${heading}
<table class="proposition-register" aria-labelledby="${headingId}" role="table">
  <thead><tr><th scope="col">Stable ID</th><th scope="col">Proposition</th></tr></thead>
  <tbody>${rows.join('\n')}</tbody>
</table>`;
      }));
}
