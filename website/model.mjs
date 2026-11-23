import fs from 'node:fs';

// The interactive model and its readable reference use this one content record.
const content = JSON.parse(fs.readFileSync(new URL('./model-data.json', import.meta.url), 'utf8'));
const escape = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
const order = ['sense', 'know', 'choose', 'mobilise', 'learn', 'adapt', 'context', 'orientation', 'feedback', 'memory', 'governance', 'people-ai', 'connections'];

for (const key of order) {
  const area = content.areas[key];
  if (!area) throw new Error(`Missing model area: ${key}`);
  for (const field of ['title', 'kind', 'purpose', 'people', 'ai', 'boundary', 'breakdown', 'question']) {
    if (typeof area[field] !== 'string' || !area[field].trim()) throw new Error(`Missing model detail: ${key}.${field}`);
  }
  for (const field of ['work', 'evidence', 'sources', 'tools']) {
    if (!Array.isArray(area[field]) || !area[field].length) throw new Error(`Missing model list: ${key}.${field}`);
  }
  if (area.sources.some(id => !content.chapters[id]) || area.tools.some(id => !content.resources[id])) throw new Error(`Unknown model resource: ${key}`);
}
if (Object.keys(content.areas).length !== order.length) throw new Error('An unregistered model area needs a place in the model and its reference.');

export const modelMetadata = {
  version: content.version,
  status: content.status,
  date: content.date,
  researchEdition: content.researchEdition,
  areas: [...order],
};

export function renderModelReference() {
  const lines = [
    '# OIBOK model reference',
    '',
    `**DRAFT ${content.version} · For practitioner review · 23 November 2026.**`,
    '',
    'This is the complete readable companion to the [interactive OIBOK model](/model/). It includes every selectable area, practical question and resource link. It is published for feedback and remains subject to revision.',
    '',
    `The visual is based on OIBOK research release ${content.researchEdition}, a literature-grounded working synthesis. It does not amend the research release or establish independent field validation of the complete model. The examples below are generic illustrations, and the suggested evidence is not a validated assessment checklist.`,
    '',
    '## How the model is organised',
    '',
    '| Transformation | Operational capabilities | Purpose |',
    '| --- | --- | --- |',
    '| Orient | Sense and Know | Form an organisational orientation from relevant signals, experience, context and knowledge. |',
    '| Coordinate | Choose and Mobilise | Convert orientation into authorised commitment and reliable collective response. |',
    '| Improve | Learn and Adapt | Use evaluated consequences to strengthen or preserve future understanding and response. |',
    '',
    'These transformations can overlap, recur and operate across organisational boundaries. Feedback from Improve returns to both Orient and Coordinate. Contextualise connects Sense and Know and is revisited throughout. Organisational orientation is an integrated state; the Outcome–Feedback bridge connects action to learning. Organisational memory supplies prior context and retains current learning across all three transformations.',
    '',
    'Purpose, governance and responsible exercise apply across the model. People and AI contributions are considered within the same organisational authority and accountability arrangements; AI participation is optional. The six capabilities have equal status. [Chapter 10](/knowledge/integrated-and-responsible-organisational-intelligence/) provides the governing definitions, research argument and limitations.',
    '',
  ];
  for (const key of order) {
    const area = content.areas[key];
    lines.push(`## ${area.title}`, '', `*${area.kind}*`, '', area.purpose, '', '**Core work**', '', ...area.work.map(item => `- ${item}`), '', '**What to look for**', '', ...area.evidence.map(item => `- ${item}`), '', `**People.** ${area.people}`, '', `**Possible AI contribution.** ${area.ai}`, '', `**Boundary.** ${area.boundary}`, '', `**Illustrative breakdown.** ${area.breakdown}`, '', `**Practical question.** ${area.question}`, '', '**Research chapters**', '');
    for (const id of area.sources) {
      const [label, slug] = content.chapters[id];
      lines.push(`- [${label}](/knowledge/${slug}/)`);
    }
    lines.push('', '**Apply in practice**', '');
    for (const id of area.tools) {
      const [label, route] = content.resources[id];
      lines.push(`- [${label}](/${route})`);
    }
    lines.push('');
  }
  lines.push('## Use, review and contribute', '', 'Use the [draft OIBOK Guide](/guide/) to connect this model to an organisational problem, a bounded change and an evaluation plan. Suitable existing organisational records can be reused.', '', `Send feedback to [info@oibok.org](mailto:info@oibok.org) or [contribute through GitHub](https://github.com/IntentEffect/OIBOK/issues). Include “Model draft ${content.version}”, the area you reviewed, the issue and your suggested change. Keep confidential organisational information out of public contributions.`, '', 'Original publication content is licensed under [CC BY-SA 4.0](/licensing/). Contributors retain copyright and license their contributions under the publication terms.', '');
  return lines.join('\n');
}

export function renderModel({basePath = ''} = {}) {
  const payload = JSON.stringify(content).replaceAll('<', '\\u003c');
  return `<div id="oibok-detailed-model" data-base-path="${escape(basePath)}">
  <header class="oi-heading">
    <h2 id="oi-map-title">OIBOK in detail</h2>
    <div class="oi-small oi-muted">Draft visual 0.2 · Six capabilities · Three recurring transformations</div>
  </header>

  <div class="oi-spanning">
    <div class="oi-small oi-muted">Across all organisational work</div>
    <button type="button" disabled class="oi-button" data-key="governance" data-slot="governance" aria-expanded="false" aria-pressed="false" aria-controls="oi-detail">Purpose &amp; governance</button>
    <div class="oi-small">Authority · Accountability · Rights · Representation · Challenge</div>
  </div>
  <div data-detail-slot="governance"></div>

  <div class="oi-model" role="group" aria-label="The OIBOK working model: Orient, Coordinate and Improve, with feedback returning to understanding and collective response">
    <svg class="oi-connectors" aria-hidden="true"></svg>
    <div class="oi-entry oi-small">Relevant signals and experience</div>

    <section class="oi-transform" data-transform="orient" aria-labelledby="oi-orient-title">
      <header class="oi-transform-heading">
        <h3 id="oi-orient-title">Orient</h3>
        <div class="oi-small oi-muted">Understand the situation and conditions for response</div>
      </header>
      <div class="oi-context">
        <button type="button" disabled class="oi-button oi-button-quiet" data-key="context" data-slot="orient" aria-expanded="false" aria-pressed="false" aria-controls="oi-detail">Contextualise</button>
      </div>
      <div class="oi-capabilities">
        <div class="oi-capability" data-capability="sense">
          <button type="button" disabled class="oi-button oi-button-block" data-key="sense" data-slot="orient" aria-expanded="false" aria-pressed="false" aria-controls="oi-detail">Sense</button>
          <div class="oi-small">Notice · Qualify · Route</div>
          <div class="oi-small oi-muted">Material signals for attention</div>
        </div>
        <div class="oi-capability" data-capability="know">
          <button type="button" disabled class="oi-button oi-button-block" data-key="know" data-slot="orient" aria-expanded="false" aria-pressed="false" aria-controls="oi-detail">Know</button>
          <div class="oi-small">Locate · Validate · Apply</div>
          <div class="oi-small oi-muted">Relevant knowledge and expertise</div>
        </div>
      </div>
      <div class="oi-bridge oi-orientation">
        <div class="oi-small oi-muted">Integrated state</div>
        <button type="button" disabled class="oi-button oi-button-quiet" data-key="orientation" data-slot="orient" aria-expanded="false" aria-pressed="false" aria-controls="oi-detail">Organisational orientation</button>
        <div class="oi-small">Situation · Significance · Uncertainty<br>Constraints · Response conditions</div>
      </div>
      <div data-detail-slot="orient"></div>
    </section>

    <section class="oi-transform" data-transform="coordinate" aria-labelledby="oi-coordinate-title">
      <header class="oi-transform-heading">
        <h3 id="oi-coordinate-title">Coordinate</h3>
        <div class="oi-small oi-muted">Commit to and carry through a collective response</div>
      </header>
      <div class="oi-capabilities">
        <div class="oi-capability" data-capability="choose">
          <button type="button" disabled class="oi-button oi-button-block" data-key="choose" data-slot="coordinate" aria-expanded="false" aria-pressed="false" aria-controls="oi-detail">Choose</button>
          <div class="oi-small">Frame · Compare · Commit</div>
          <div class="oi-small oi-muted">Attributable, authorised commitment</div>
        </div>
        <div class="oi-capability" data-capability="mobilise">
          <button type="button" disabled class="oi-button oi-button-block" data-key="mobilise" data-slot="coordinate" aria-expanded="false" aria-pressed="false" aria-controls="oi-detail">Mobilise</button>
          <div class="oi-small">Coordinate · Execute · Recover</div>
          <div class="oi-small oi-muted">Governed and reliable collective action</div>
        </div>
      </div>
      <div class="oi-bridge oi-feedback">
        <div class="oi-small oi-muted">Outcome–Feedback bridge</div>
        <button type="button" disabled class="oi-button oi-button-quiet" data-key="feedback" data-slot="coordinate" aria-expanded="false" aria-pressed="false" aria-controls="oi-detail">Outcomes &amp; feedback</button>
        <ol class="oi-outcome-flow oi-small" aria-label="Output, consequence, observation, evaluation, then feedback suitable for learning">
          <li>Output</li><li>Consequence</li><li>Observation</li><li>Evaluation</li><li>Feedback</li>
        </ol>
      </div>
      <div data-detail-slot="coordinate"></div>
    </section>

    <section class="oi-transform" data-transform="improve" aria-labelledby="oi-improve-title">
      <header class="oi-transform-heading">
        <h3 id="oi-improve-title">Improve</h3>
        <div class="oi-small oi-muted">Strengthen or preserve future understanding and response</div>
      </header>
      <div class="oi-capabilities">
        <div class="oi-capability" data-capability="learn">
          <button type="button" disabled class="oi-button oi-button-block" data-key="learn" data-slot="improve" aria-expanded="false" aria-pressed="false" aria-controls="oi-detail">Learn</button>
          <div class="oi-small">Reflect · Inquire · Retain</div>
          <div class="oi-small oi-muted">Revised understanding and usable memory</div>
        </div>
        <div class="oi-capability" data-capability="adapt">
          <button type="button" disabled class="oi-button oi-button-block" data-key="adapt" data-slot="improve" aria-expanded="false" aria-pressed="false" aria-controls="oi-detail">Adapt</button>
          <div class="oi-small">Develop · Reconfigure · Retire</div>
          <div class="oi-small oi-muted">Capability maintained or changed for future work</div>
        </div>
      </div>
      <div data-detail-slot="improve"></div>
    </section>
  </div>

  <div class="oi-spanning oi-memory">
    <button type="button" disabled class="oi-button" data-key="memory" data-slot="shared" aria-expanded="false" aria-pressed="false" aria-controls="oi-detail">Organisational memory</button>
    <div class="oi-small">Prior context, decisions, relationships, routines and lessons across all three transformations</div>
  </div>
  <div class="oi-shared">
    <div class="oi-spanning">
      <button type="button" disabled class="oi-button" data-key="people-ai" data-slot="shared" aria-expanded="false" aria-pressed="false" aria-controls="oi-detail">People &amp; AI</button>
      <div class="oi-small oi-muted">Roles, expertise and bounded participation</div>
    </div>
    <div class="oi-spanning">
      <button type="button" disabled class="oi-button" data-key="connections" data-slot="shared" aria-expanded="false" aria-pressed="false" aria-controls="oi-detail">Connection quality</button>
      <div class="oi-small oi-muted">What survives between capabilities</div>
    </div>
  </div>
  <div data-detail-slot="shared"></div>
  <div class="oi-caption oi-small oi-muted">Recurring, overlapping and distributed work · Contextualise is revisited throughout</div>
  <hr>
  <div class="oi-provenance oi-small oi-muted">
    <span>DRAFT model 0.2 · <a href="${basePath}/knowledge/integrated-and-responsible-organisational-intelligence/" target="_blank" rel="noopener noreferrer">OIBOK 1.0 working model</a></span>
    <span>Literature-grounded; field validation remains open · <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a></span>
  </div>
  <noscript><p class="oi-small">The expandable details require JavaScript. <a href="${basePath}/model/reference/">Read the complete model reference</a> for every capability, mechanism, question and resource link.</p></noscript>
  <div class="oi-sr-only" id="oi-announcement" role="status" aria-live="polite"></div>
  <section id="oi-detail" class="oi-detail" aria-labelledby="oi-detail-title" hidden>
    <hr>
    <div class="oi-detail-heading">
      <div>
        <div class="oi-small oi-muted" data-field="kind"></div>
        <h3 id="oi-detail-title"></h3>
      </div>
      <button type="button" disabled class="oi-button oi-button-quiet" id="oi-close">Close</button>
    </div>
    <div data-field="purpose"></div>
    <div class="oi-detail-grid">
      <div>
        <h4>Core work</h4>
        <ul data-field="work"></ul>
      </div>
      <div>
        <h4>What to look for</h4>
        <ul data-field="evidence"></ul>
      </div>
      <div>
        <h4>People</h4>
        <div data-field="people"></div>
      </div>
      <div>
        <h4>Possible AI contribution</h4>
        <div data-field="ai"></div>
      </div>
    </div>
    <dl class="oi-checks">
      <div><dt>Boundary</dt><dd data-field="boundary"></dd></div>
      <div><dt>Illustrative breakdown</dt><dd data-field="breakdown"></dd></div>
      <div><dt>Practical question</dt><dd data-field="question"></dd></div>
    </dl>
    <div class="oi-references">
      <div><span class="oi-label">Research chapters</span><div data-field="sources" class="oi-links oi-small"></div></div>
      <div><span class="oi-label">Apply in practice</span><div data-field="tools" class="oi-links oi-small"></div></div>
    </div>
    <hr>
  </section>
</div>
<script type="application/json" id="oi-model-data">${payload}</script>`;
}
