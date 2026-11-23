# OIBOK draft diagram sources

These scripts generate the nine figures in Visual Set 0.1 from one vector drawing per figure. Each produces an editable SVG and an A3 landscape PDF with matching geometry and text wrapping.

Run from the repository root with Python 3 and ReportLab installed:

```sh
python scripts/diagrams/build.py
```

The generator uses the Liberation Sans and Liberation Serif font files in `/usr/share/fonts/truetype/liberation`. It creates `assets/diagrams/*.svg`, `downloads/diagrams/*.pdf`, and a combined nine-page PDF. PNGs for the illustrated Guide are verification/build intermediates, not authoritative sources. They can be produced with Poppler from each PDF.

Figure metadata and plain-language explanations are in `website/diagrams.json` and `content/diagrams/`. Guide 0.3 and Companion 0.3 embed the figures while preserving OIBOK 1.0 and Practical Toolkit 0.1 as their source editions. The diagrams remain drafts for practitioner review. Fictional examples add no empirical evidence.

Original diagram content is CC BY-SA 4.0, subject to the project licence scope. See the project licensing policy for software scope; no separate software licence is adopted by this folder. Do not alter a source edition or pending example status when revising a diagram.
