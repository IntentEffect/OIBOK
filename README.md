# OIBOK

**Organisation Intelligence Body of Knowledge**

Founded and maintained by Intent & Effect.

OIBOK is an open body of knowledge and practical toolkit for understanding how organisations orient, coordinate and improve. It helps people examine how knowledge, decisions, collective action and learning fit together, including when organisations introduce AI into work.

## Read and use

- [Read the body of knowledge](https://oibok.org/knowledge/).
- [Read or download the OIBOK Guide (draft 0.6.3)](https://oibok.org/guide/).
- [Explore the nine draft diagrams and download SVGs or A3 PDFs](https://oibok.org/diagrams/).
- [Explore the interactive model, draft 0.2](https://oibok.org/model/).
- [Explore practical tools and A3 canvases](https://oibok.org/tools/).
- [Read the OIBOK blog](https://oibok.org/blog/).
- [Use OIBOK with an AI assistant or agent](https://oibok.org/for-agents/).
- [Inspect the research sources and limitations](https://oibok.org/research/).
- [Contribute evidence, corrections or improvements](CONTRIBUTING.md).

The website is published at [oibok.org](https://oibok.org/), with `www.oibok.org` redirecting to the primary domain. GitHub Pages builds and hosts the website from this repository.

## Use OIBOK with agents

Give your assistant the [agent instructions](https://oibok.org/agents/instructions.md) and describe the organisational question. The guide explains how to select chapters, assess evidence, compare explanations, draft a practical tool and cite the sources actually used. Agents need access to the sources or copies supplied in their own environment.

- [Copy the starter prompt](https://oibok.org/for-agents/#starter-prompt).
- [Discover the sources through llms.txt](https://oibok.org/llms.txt).
- [Read the source catalogue](https://oibok.org/agents/manifest.json) for document URLs, versions, content hashes and deployment commit.

Agent guidance 0.1 is a website and practice addition. It does not change the OIBOK 1.0 research release. Publishing these resources does not grant agents organisational authority or guarantee automatic discovery by every assistant.

## Publication status

**Guide 0.6.3, Working Companion 0.6.3, Visual Model 0.2 and Visual set 0.1 are drafts for practitioner review.** The illustrated Guide and Companion, interactive model, readable reference and nine diagrams are published with explicit draft notices. External practitioner review and field validation remain pending. They provide guidance based on OIBOK 1.0 and do not amend the research release.

**OIBOK 1.0**, released 15 August 2026, is a literature-grounded working synthesis. Its ten chapter files preserve component version 0.3, as promoted by the release completion record. The whole model has not been independently field validated.

**Practical toolkit 0.1**, dated 22 November 2026, provides methods for piloting in real work. It does not provide a validated OI scale or maturity score. The proposed 1.1 editorial revision has not been applied to the research release.

See [versions and corrections](CHANGELOG.md), [research methodology](METHODOLOGY.md) and [governance](GOVERNANCE.md).

## One repository, one source of publication content

| Location | Purpose |
| --- | --- |
| `content/knowledge/` | Authoritative research chapters and reader introduction |
| `content/research/` | Research registers, release records and reader guidance |
| `content/tools/` | Practical toolkit guides and overview |
| `content/guide/` | Draft practitioner Guide, Working Companion and download introduction |
| `content/model/` | Draft interactive model introduction and complete readable reference |
| `content/diagrams/` | Draft diagram collection, readable explanations and source mappings |
| `content/agents/` | Shared source for the readable agent guide and Markdown instructions |
| `content/blog/` | Blog introduction and article sources |
| `downloads/` | Original release archives, research registers, PDFs and editable resources |
| `website/` | Static build, page routes, templates, styles and browser search |
| `assets/` | Site artwork, Creative Commons badge and diagram SVGs |
| `scripts/diagrams/` | Sources for regenerating the diagram SVGs and A3 PDFs |
| `sources/` | Source provenance and imported-file checksums |
| `.github/` | Contribution forms, pull request template and build/deploy workflow |

The website is generated from the canonical Markdown and root policy files. Generated HTML belongs in the Pages deployment artifact, not in the source branch. No application server or paid hosting service is required.

## Build locally

Install Node.js 24 and Pandoc 3. No npm dependencies are required.

```sh
npm run build
npm run check
```

The output is `dist/`. The default configuration serves `https://oibok.org/` at the domain root. To preview from the root of a local static server:

```sh
BASE_PATH='' SITE_URL='http://localhost:8000' npm run build
npm run check
python3 -m http.server 8000 --directory dist
```

The check verifies internal page/download links and footnote anchors, one main heading per page, attribution, source-byte integrity, search-index destinations and agent source catalogue integrity.

The build generates `llms.txt` and `agents/manifest.json` from the same registered pages, and publishes `content/agents/instructions.md` at `agents/instructions.md`, updating legacy website URLs to the configured site URL. The catalogue records separate hashes for the served instructions and the original Markdown source; original source downloads remain unchanged. The catalogue covers published Markdown documents; their linked pages provide archives, PDFs and CSV registers. It records `GITHUB_SHA` on deployment. A local build with uncommitted changes records a null source commit rather than claiming those changes belong to an existing commit.

Draft resources carry `draft-for-practitioner-review` in the source catalogue and a visible draft notice on their pages. The model's full readable reference provides the same practical detail without requiring JavaScript.

## Publish with GitHub Pages

1. The repository owner grants the publishing account collaborator access.
2. Under **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.
3. Push the publication and workflow to `main`.
4. The workflow builds and checks the site, uploads the Pages artifact and deploys it. Inspect the **Build and publish OIBOK** run in Actions for the final URL.

Pull requests run build and integrity checks without deploying. Only a push to `main` or a manual run from `main` should publish the official website. Configure the `github-pages` environment to allow deployment from `main`.

The workflow uses the site's URL and base path returned by GitHub Pages. The repository's custom domain is `oibok.org`; DNS is managed at GoDaddy. GitHub Actions publishing uses the Pages custom-domain setting, so no `CNAME` file is required. The build translates legacy publication URLs in rendered pages and served agent instructions while preserving original source files and repository URLs.

## Editing and releases

Add or edit a Markdown file and its route entry in `website/imported-pages.json`, `website/policy-pages.json` or `website/extra-pages.json` as appropriate. Use root-relative website links, such as `/knowledge/` or `/tools/`; the build prefixes the configured base path.

Historical research sources are checked against `sources/import-checksums.json`. Preserve released source bytes. Prepare substantive revisions as a new edition with updated provenance and a recorded editorial decision. Do not change a checksum merely to make an unexplained source change pass.

## Publishing a blog article

Write the article in `content/blog/` and register its source, URL, title, description, author, publication date and category in `website/blog-posts.json`, following the existing entries. That metadata drives the article listing and RSS feed. The build also includes the article in website search, the sitemap and the agent source catalogue.

Blog metadata uses `published` for the Australia/Sydney display date and `published_at` for the explicit UTC publication instant used by RSS.

Use a descriptive title and excerpt, cite sources for factual claims, and identify editorial interpretation and hypothetical examples. Use the actual publication date, rather than the date an earlier draft was discussed. Disclose material AI assistance and distinguish an adapted earlier draft from newly written material. See the [blog contribution guidance](https://oibok.org/contribute/#blog-articles).

Run the normal build and checks before publication. Record material corrections in the article and changelog; publishing a blog article does not create a new OIBOK research edition. The feed is available at `https://oibok.org/blog/feed.xml`.

## Licence and attribution

Original publication content is licensed under **[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)**. Contributors retain copyright. See [LICENSE](LICENSE) and the [licensing policy](content/licensing.md) for scope, attribution, third-party material, brand assets, software and the initial CC0 repository files.

The separate licence for original website software has not yet been adopted. Third-party tools retain their own terms.
