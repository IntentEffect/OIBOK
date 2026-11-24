import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';

const researchRelease = { version: '1.0', date: '2026-08-15' };
const toolkitRelease = { version: '0.1', date: '2026-11-22' };
const agentGuide = { version: '0.1', date: '2026-11-22' };

// Adapt publication links in served copies without changing the authored or imported sources.
export function rewritePublicationLinks(text, siteUrl, legacySiteUrls = []) {
  const boundaries = new Set(['/', '?', '#', ' ', '\t', '\r', '\n', '"', "'", '<', '>', ')', ']', '`']);
  let result = text;
  for (const previous of legacySiteUrls) {
    const legacy = previous.replace(/\/+$/, '');
    if (!/^https?:\/\//.test(legacy)) throw new Error('Legacy publication URLs must be absolute HTTP(S) URLs.');
    result = result.replaceAll(legacy, (match, offset, source) => {
      const next = source[offset + match.length];
      return next === undefined || boundaries.has(next) ? siteUrl : match;
    });
  }
  return result;
}

function sourceCommit(root) {
  const status = spawnSync('git', ['status', '--porcelain', '--untracked-files=normal'], { cwd: root, encoding: 'utf8' });
  if (status.status !== 0 || status.stdout.trim()) return null;
  const head = spawnSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' });
  const sha = head.stdout?.trim() || '';
  const supplied = process.env.GITHUB_SHA || '';
  if (supplied && supplied !== sha) throw new Error('The deployment commit does not match the checked-out publication.');
  return head.status === 0 && /^[a-f0-9]{40}$/i.test(sha) ? sha : null;
}

function describeDocument(page) {
  const chapter = page.source.match(/^content\/knowledge\/Project-(OI-BOK-(\d{3}))-/);
  const research = page.source.match(/^content\/research\/Project-(OI-BOK-[A-Z]+-\d{3})-/);
  const component = page.source.match(/-v(\d+(?:\.\d+)*)\.md$/)?.[1] || null;
  const tool = /^content\/tools\/\d{2}-/.test(page.source);
  const agent = page.path === '/for-agents/';
  const index = page.source.endsWith('/index.md');
  const blogPost = page.kind === 'blog-post';
  const blogIndex = page.path === '/blog/';
  const researchIndex = page.path === '/knowledge/' || page.path === '/research/';
  const draft = page.status === 'draft-for-practitioner-review';
  return {
    id: chapter?.[1] || research?.[1] || page.path.replace(/^\/|\/$/g, '').replaceAll('/', '-'),
    kind: chapter ? 'chapter' : research ? (page.path === '/research/release-record/' ? 'release-record' : 'research-register') : tool ? 'tool' : agent ? 'agent-guide' : blogPost ? 'blog-post' : blogIndex ? 'blog-index' : draft ? page.kind : index ? 'index' : page.path === '/releases/' ? 'release-notes' : 'policy',
    ...(chapter ? { chapter: Number(chapter[2]) } : {}),
    ...(blogPost ? { author: page.author, published: page.published, published_at: page.published_at, category: page.category } : {}),
    publication_edition: chapter || research || researchIndex ? researchRelease.version : null,
    toolkit_version: tool || page.path === '/tools/' ? toolkitRelease.version : null,
    component_version: component || page.component_version || (agent ? agentGuide.version : null),
    version_label: page.version,
    status: draft ? 'draft-for-practitioner-review' : chapter || research ? 'released-working-synthesis' : tool ? 'practice-resource-for-piloting' : blogPost || blogIndex ? 'editorial-commentary' : 'current-editorial-guidance',
    ...(draft ? { based_on_research_edition: researchRelease.version, review_status: 'External practitioner review and field validation pending.' } : {}),
  };
}

export function buildAgentResources({ root, dist, pages, config, siteUrl }) {
  const guide = pages.find(page => page.path === '/for-agents/');
  if (!guide) throw new Error('The agent guide must be registered at /for-agents/.');
  const commit = sourceCommit(root);
  const draftEditions = [['/guide/', 'Guide'], ['/guide/companion/', 'Working Companion'], ['/model/', 'Visual Model'], ['/diagrams/', 'Visual set']]
    .map(([route, label]) => {
      const page = pages.find(item => item.path === route);
      if (!page?.component_version) throw new Error(`Missing draft component version for ${route}`);
      return `${label} ${page.component_version}`;
    }).join(', ');
  const absolute = route => `${siteUrl}${route}`;
  const guideSource = fs.readFileSync(path.join(root, guide.source));
  const guideCopy = Buffer.from(rewritePublicationLinks(guideSource.toString('utf8'), siteUrl, config.legacySiteUrls));
  const licence = {
    identifier: 'CC-BY-SA-4.0',
    url: 'https://creativecommons.org/licenses/by-sa/4.0/',
    scope_url: absolute('/licensing/'),
  };
  const documents = pages.map(page => {
    const isGuide = page.path === guide.path;
    const source = isGuide ? guideSource : fs.readFileSync(path.join(root, page.source));
    const data = isGuide ? guideCopy : source;
    return {
      ...describeDocument(page),
      title: page.title,
      description: page.description,
      html_url: absolute(page.path),
      markdown_url: absolute(page.path === guide.path ? '/agents/instructions.md' : `/downloads/source/${page.source}`),
      repository_path: page.source,
      repository_url: `${config.repository}/blob/${commit || 'main'}/${page.source}`,
      bytes: data.length,
      sha256: crypto.createHash('sha256').update(data).digest('hex'),
      ...(isGuide ? {
        source_markdown_url: absolute(`/downloads/source/${page.source}`),
        source_bytes: source.length,
        source_sha256: crypto.createHash('sha256').update(source).digest('hex'),
        content_transform: data.equals(source) ? null : 'canonical-publication-links',
      } : {}),
      preserved_import: Boolean(page.preserve),
      licence: licence.identifier,
    };
  });
  const manifest = {
    schema_version: '1.0',
    title: 'OIBOK agent source catalogue',
    catalogue_scope: 'Published Markdown documents. Download archives, PDFs and CSV registers are linked from the relevant documents.',
    site_url: siteUrl,
    repository_url: config.repository,
    source_commit: commit,
    source_revision: commit ? 'commit' : 'uncommitted-or-unavailable',
    instructions_url: absolute('/agents/instructions.md'),
    guide_url: absolute('/for-agents/'),
    discovery_url: absolute('/llms.txt'),
    research_release: { ...researchRelease, record_url: absolute('/research/release-record/') },
    toolkit_release: { ...toolkitRelease, guide_url: absolute('/tools/guide/') },
    agent_guide: agentGuide,
    licence,
    attribution: 'Founded and maintained by Intent & Effect.',
    interpretation_notes: [
      'OIBOK 1.0 promotes unchanged v0.3 chapter components. Publication edition and component version are different.',
      'OIBOK is a literature-grounded working synthesis. The whole model has not been independently field validated.',
      'Toolkit 0.1 and agent guidance are practice resources, not validated maturity measures or certification.',
      'The proposed 1.1 editorial amendment has not been applied to the research release.',
      'Blog articles are editorial commentary and practical interpretation, not components or amendments of the research release.',
      `${draftEditions} are drafts for practitioner review. Their publication does not amend the research release or establish field validation.`,
      'Retrieve the original document before relying on a search excerpt. Cite sources actually consulted.',
      'Original Markdown downloads preserve authored source bytes, including historical website links. The agent instructions copy updates publication links to the current site; its sha256 identifies the served copy and source_sha256 identifies the original source.',
      'Publication content is subject to the licensing policy, including third-party material and brand exceptions.',
    ],
    documents,
  };
  const agentDirectory = path.join(dist, 'agents');
  fs.mkdirSync(agentDirectory, { recursive: true });
  fs.writeFileSync(path.join(agentDirectory, 'instructions.md'), guideCopy);
  fs.writeFileSync(path.join(agentDirectory, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');

  const entry = doc => `- [${doc.title}](${doc.markdown_url}): ${doc.description}`;
  const byRoute = route => documents.find(doc => doc.html_url === absolute(route));
  const startRoutes = [guide.path, '/research/release-record/', '/methodology/', '/research/open-questions/'];
  const startIds = new Set(startRoutes.map(route => byRoute(route).id));
  const groups = [
    ['Start here', startRoutes.map(byRoute)],
    ['Knowledge', documents.filter(doc => doc.kind === 'chapter' || doc.html_url === absolute('/knowledge/') || doc.html_url === absolute('/knowledge/glossary/'))],
    ['Practical tools', documents.filter(doc => doc.kind === 'tool' || doc.html_url === absolute('/tools/'))],
    ['Draft guide and visual model', documents.filter(doc => doc.status === 'draft-for-practitioner-review')],
    ['Research and evidence', documents.filter(doc => (doc.kind === 'research-register' || doc.html_url === absolute('/research/')) && !startIds.has(doc.id) && doc.html_url !== absolute('/knowledge/glossary/'))],
    ['Blog', documents.filter(doc => doc.kind === 'blog-post' || doc.kind === 'blog-index')],
    ['Project and reuse', documents.filter(doc => (doc.kind === 'policy' || doc.kind === 'release-notes') && !startIds.has(doc.id))],
  ];
  const discovery = [
    '# Organisation Intelligence Body of Knowledge (OIBOK)',
    '',
    '> An open body of knowledge and practical toolkit for examining how organisations orient, coordinate and improve, including work involving AI.',
    '',
    'Use the agent guide to establish the organisational question, select relevant sources, distinguish evidence from interpretation, consider alternatives and produce a practical review, canvas or evaluation plan.',
    '',
    `Research edition: OIBOK ${researchRelease.version} (${researchRelease.date}). Its chapters retain component version 0.3. Practical Toolkit ${toolkitRelease.version} (${toolkitRelease.date}). Agent guide ${agentGuide.version} (${agentGuide.date}). The proposed 1.1 editorial amendment is not a released research edition.`,
    '',
    'The research is a working synthesis; the whole model has not been independently field validated. Tools do not provide a validated maturity score or certification. Search results help locate sources; retrieve the relevant Markdown before making evidence claims. Keep organisational evidence separate from OIBOK propositions and agent inference. Access to OIBOK grants no organisational action authority.',
    '',
    'Blog articles provide editorial commentary and practical interpretation. They do not amend the research release or establish new empirical findings.',
    '',
    `${draftEditions} are DRAFT resources for practitioner review, based on OIBOK 1.0. External practitioner review and field validation remain pending. Preserve this draft status when quoting, adapting or recommending them.`,
    '',
    'Original publication content: CC BY-SA 4.0, subject to the licensing policy and third-party exceptions. Founded and maintained by Intent & Effect.',
    '',
    '## Source catalogue',
    '',
    `- [Versioned source catalogue](${absolute('/agents/manifest.json')}): Exact document URLs, publication/component versions, SHA-256 hashes and source commit when available.`,
    '',
    ...groups.flatMap(([heading, docs]) => [`## ${heading}`, '', ...docs.map(entry), '']),
  ].join('\n');
  fs.writeFileSync(path.join(dist, 'llms.txt'), discovery);
  return { sourceCommit: commit, documents: documents.length };
}
