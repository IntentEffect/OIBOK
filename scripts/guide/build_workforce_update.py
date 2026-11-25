"""Build Guide 0.6.2 and the workforce pilot from the issued Word templates.

Run with the primary document runtime. Render every output with render_docx.py,
then use build_editorial_update.py --toc for the existing static contents pages.
The earlier publications are inputs and are never overwritten.
"""
from __future__ import annotations

import copy
import json
import re
import shutil
from pathlib import Path

from docx import Document
from docx.enum.table import WD_CELL_VERTICAL_ALIGNMENT
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Inches, Pt, RGBColor
from docx.text.paragraph import Paragraph

from build_editorial_update import ast, block_text, clear_paragraph, inline, norm, patch, rows

ROOT = Path(__file__).resolve().parents[2]
VERSION = "0.6.2"
DATE = "26 November 2026"
CHARCOAL = "232B2A"
RUST = "A3412C"


def replace_paragraph(p, text):
    properties = copy.deepcopy(p.runs[0]._r.rPr) if p.runs else None
    clear_paragraph(p)
    inline(p, [{"t": "Str", "c": text}], base_rpr=properties)


def update_furniture(doc, title=None, edition=None):
    for part in doc.part.package.parts:
        if not str(part.partname).startswith(("/word/header", "/word/footer")):
            continue
        for node in part.element.iter(qn("w:t")):
            if not node.text:
                continue
            if title:
                node.text = node.text.replace("THE OIBOK GUIDE", title.upper())
                node.text = node.text.replace("OIBOK GUIDE", title.upper())
            if edition:
                node.text = node.text.replace("DRAFT 0.6.1", edition)
            else:
                node.text = node.text.replace("DRAFT 0.6.1", "DRAFT " + VERSION)
            node.text = node.text.replace("25 November 2026", DATE)


def refine_pagination(doc, book):
    # Keep the expanded introduction and handoff notes with their existing
    # following page/section breaks, without reducing type size or cutting text.
    if book == "Guide":
        in_introduction = False
        for p in doc.paragraphs:
            if p.text == "Purpose and publication status":
                in_introduction = True
            elif p.text == "Publication rights":
                break
            elif in_introduction and p.style.name == "Normal" and p.text.strip():
                p.paragraph_format.space_after = Pt(3)
    elif book == "Working-Companion":
        in_handoff_section = False
        for p in doc.paragraphs:
            if p.text == "Review to work design":
                in_handoff_section = True
            if not in_handoff_section:
                continue
            ppr = p._p.pPr
            if ppr is not None and ppr.find(qn("w:sectPr")) is not None:
                break
            if p.style.name == "Normal" and p.text.strip():
                p.paragraph_format.space_after = Pt(2)


def build_guides():
    for stem, book in [("guide", "Guide"), ("working-companion", "Working-Companion"),
                       ("silvergum-case-pack", "Silvergum-Case-Pack")]:
        source = ROOT / f"content/guide/{stem}-draft-{VERSION}.md"
        target = ROOT / f"downloads/guide/OIBOK-{book}-Draft-{VERSION}.docx"
        patch((ROOT / f"content/guide/{stem}-draft-0.6.1.md").read_text(),
              source.read_text(), ROOT / f"downloads/guide/OIBOK-{book}-Draft-0.6.1.docx", target)
        doc = Document(target)
        update_furniture(doc)
        refine_pagination(doc, book)
        doc.core_properties.version = VERSION
        doc.core_properties.comments = "Workforce development and pilot edition. Field results pending."
        if book == "Guide":
            # Keep the added two-column comparison readable at the Guide's text width.
            for table in doc.tables:
                if table.cell(0, 0).text == "Question" and table.cell(0, 1).text == "What to record and examine":
                    table.autofit = False
                    for col, width in zip(table.columns, (2.35, 4.55)):
                        col.width = Inches(width)
                    for row in table.rows:
                        for cell, width in zip(row.cells, (2.35, 4.55)):
                            cell.width = Inches(width)
        doc.save(target)
        shutil.copyfile(source, target.with_suffix(".md"))


def set_cell_fill(cell, colour):
    tcpr = cell._tc.get_or_add_tcPr()
    old = tcpr.find(qn("w:shd"))
    if old is not None:
        tcpr.remove(old)
    shd = OxmlElement("w:shd")
    shd.set(qn("w:fill"), colour)
    tcpr.append(shd)


def table_block(doc, block):
    data = rows(block)
    columns = len(data[0])
    widths = (2.8, 4.1) if columns == 2 else tuple(6.9 / columns for _ in range(columns))
    table = doc.add_table(rows=0, cols=columns)
    table.autofit = False
    for col, width in zip(table.columns, widths):
        col.width = Inches(width)
    borders = OxmlElement("w:tblBorders")
    for edge in ("top", "left", "bottom", "right", "insideH", "insideV"):
        el = OxmlElement("w:" + edge)
        for k, value in {"val": "single", "sz": "4", "color": "D9D9D9"}.items():
            el.set(qn("w:" + k), value)
        borders.append(el)
    table._tbl.tblPr.append(borders)
    margins = OxmlElement("w:tblCellMar")
    for edge in ("top", "bottom", "left", "right"):
        el = OxmlElement("w:" + edge)
        el.set(qn("w:w"), "100" if edge in ("left", "right") else "75")
        el.set(qn("w:type"), "dxa")
        margins.append(el)
    table._tbl.tblPr.append(margins)
    for i, source in enumerate(data):
        row = table.add_row()
        trpr = row._tr.get_or_add_trPr()
        cant = OxmlElement("w:cantSplit")
        trpr.append(cant)
        if i == 0:
            repeat = OxmlElement("w:tblHeader")
            trpr.append(repeat)
        else:
            height = OxmlElement("w:trHeight")
            height.set(qn("w:val"), "540")
            height.set(qn("w:hRule"), "atLeast")
            trpr.append(height)
        for j, cell_blocks in enumerate(source):
            cell = row.cells[j]
            cell.width = Inches(widths[j])
            cell.vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.CENTER
            set_cell_fill(cell, CHARCOAL if i == 0 else "F7F7F4" if i % 2 == 0 else "FFFFFF")
            p = cell.paragraphs[0]
            p.paragraph_format.space_before = Pt(1)
            p.paragraph_format.space_after = Pt(1)
            p.paragraph_format.line_spacing = 1.05
            p.paragraph_format.keep_with_next = i == 0
            for k, b in enumerate(cell_blocks):
                if k:
                    inline(p, [{"t": "Space"}])
                inline(p, b["c"])
            for run in p.runs:
                run.font.name = "Noto Sans"
                run.font.size = Pt(10)
                run.font.color.rgb = RGBColor.from_string("FFFFFF" if i == 0 else CHARCOAL)
                run.bold = i == 0
    spacer = doc.add_paragraph()
    spacer.paragraph_format.space_after = Pt(3)
    spacer.paragraph_format.space_before = Pt(0)
    spacer.paragraph_format.line_spacing = 0.5


def add_block(doc, block, first=False, records=False):
    t = block["t"]
    if t in ("Para", "Plain", "Header"):
        if t == "Header":
            level = max(1, block["c"][0] - 1)
            p = doc.add_paragraph(style=f"Heading {level}")
            p.paragraph_format.page_break_before = first
            p.paragraph_format.keep_with_next = True
            p.paragraph_format.space_before = Pt(16 if level > 1 else 8)
            p.paragraph_format.space_after = Pt(8)
            inline(p, block["c"][2])
            for run in p.runs:
                run.font.name = "Noto Sans"
                run.font.size = Pt(18 if level == 1 else 13)
                run.font.color.rgb = RGBColor.from_string(CHARCOAL if level == 1 else RUST)
        else:
            p = doc.add_paragraph(style="Normal")
            p.paragraph_format.space_after = Pt(7)
            p.paragraph_format.line_spacing = 1.12
            p.paragraph_format.page_break_before = first
            inline(p, block["c"])
        return
    if t == "Table":
        table_block(doc, block)
        return
    if t in ("BulletList", "OrderedList"):
        items = block["c"] if t == "BulletList" else block["c"][1]
        for item in items:
            p = doc.add_paragraph(style="List Bullet" if t == "BulletList" else "List Number")
            p.paragraph_format.space_after = Pt(5)
            for k, b in enumerate(item):
                if k:
                    inline(p, [{"t": "Space"}])
                inline(p, b["c"])
        return
    raise ValueError(f"Unsupported pilot block {t}")


def build_pilot(source, target, title, subtitle, summary, records=False):
    source = ROOT / source
    target = ROOT / target
    target.parent.mkdir(parents=True, exist_ok=True)
    doc = Document(ROOT / "downloads/guide/OIBOK-Guide-Draft-0.6.1.docx")
    # Retain the official cover, styles and first-section branding. Other content
    # and landscape sections are replaced by this document's Markdown source.
    cover = [copy.deepcopy(p._p) for p in doc.paragraphs[:9]]
    section = copy.deepcopy(doc.sections[0]._sectPr)
    body = doc._element.body
    for child in list(body):
        body.remove(child)
    for node in cover:
        body.append(node)
    body.append(section)
    texts = {2: title, 3: subtitle, 4: "Pilot 0.1 | DRAFT · Prepared for use", 5: DATE, 8: summary}
    for i, text in texts.items():
        replace_paragraph(doc.paragraphs[i], text)
    for run in doc.paragraphs[2].runs:
        run.font.size = Pt(31)
    update_furniture(doc, title, "PILOT 0.1")
    doc.core_properties.title = title
    doc.core_properties.subject = subtitle
    doc.core_properties.author = "Organisation Intelligence Body of Knowledge"
    doc.core_properties.version = "0.1"
    doc.core_properties.comments = "Prepared practice materials. No field results."
    blocks = ast(source.read_text())
    if blocks and blocks[0]["t"] == "Header" and blocks[0]["c"][0] == 1:
        blocks = blocks[1:]
    for i, block in enumerate(blocks):
        add_block(doc, block, first=i == 0, records=records)
    doc.save(target)
    shutil.copyfile(source, target.with_suffix(".md"))
    # Check all substantive source paragraphs and cells survived conversion.
    check = Document(target)
    alltext = norm(" ".join(p.text for p in check.paragraphs) + " " +
                   " ".join(c.text for t in check.tables for row in t.rows for c in row.cells))
    for block in blocks:
        if block["t"] in ("Para", "Plain", "Header"):
            pieces = [block_text(block)]
        elif block["t"] == "Table":
            pieces = [block_text(b) for row in rows(block) for cell in row for b in cell]
        else:
            items = block["c"] if block["t"] == "BulletList" else block["c"][1]
            pieces = [block_text(b) for item in items for b in item]
        for piece in pieces:
            if norm(piece) not in alltext:
                raise AssertionError("Missing pilot text: " + piece[:100])
    print(json.dumps({"output": str(target.relative_to(ROOT)), "source_blocks": len(blocks)}))


def main():
    build_guides()
    build_pilot("content/research/workforce-development-pilot.md",
                "downloads/pilots/OIBOK-Workforce-Development-Pilot-0.1.docx",
                "Work and expertise pilot", "Test a work change and the review that informs it",
                "Plan a bounded inquiry into workflow outcomes, required judgement and the contribution of OIBOK.")
    build_pilot("content/tools/workforce-development-review.md",
                "downloads/pilots/OIBOK-Workforce-Development-Records-0.1.docx",
                "Work and learning records", "Record the comparison practice and later evidence",
                "Seven editable records for a local pilot. Keep completed case information in your authorised workspace.",
                records=True)


if __name__ == "__main__":
    main()
