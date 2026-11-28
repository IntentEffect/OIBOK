"""Apply the Guide 0.6.3 source delta to the issued 0.6.2 Word editions.

Run with the primary document runtime. This preserves the existing covers,
figures, section sizes and typography. Render each result with render_docx.py,
then use build_editorial_update.py --toc before the final render. Earlier
editions are read-only inputs. PDF output is taken from the verified render.
"""
from __future__ import annotations

import argparse
import json
import re
import shutil
from pathlib import Path

from docx import Document
from docx.enum.table import WD_CELL_VERTICAL_ALIGNMENT
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Inches, Pt

from build_editorial_update import ast, norm, patch, row_text, rows

ROOT = Path(__file__).resolve().parents[2]
VERSION = "0.6.3"
PREVIOUS_VERSION = "0.6.2"
DATE = "28 November 2026"
EDITION = "Coordination and knowledge evidence edition"
BOOKS = {
    "Guide": "guide",
    "Working-Companion": "working-companion",
    "Silvergum-Case-Pack": "silvergum-case-pack",
}


def update_furniture(doc):
    """Update running edition labels without changing historical body notes."""
    for part in doc.part.package.parts:
        if not str(part.partname).startswith(("/word/header", "/word/footer")):
            continue
        for node in part.element.iter(qn("w:t")):
            if node.text:
                node.text = re.sub(r"DRAFT \d+(?:\.\d+)*", "DRAFT " + VERSION, node.text)
                node.text = node.text.replace("26 November 2026", DATE)


def table_key(block):
    return tuple(tuple(row_text(r)) for r in rows(block))


def format_added_tables(doc, old_md, new_md):
    """Size new comparison tables for their content; keep issued tables intact."""
    original = {table_key(b) for b in ast(old_md) if b["t"] == "Table"}
    added = {table_key(b) for b in ast(new_md)
             if b["t"] == "Table" and table_key(b) not in original}
    for table in doc.tables:
        key = tuple(tuple(norm(c.text) for c in r.cells) for r in table.rows)
        if key not in added:
            continue
        columns = len(table.columns)
        widths = {2: (2.25, 4.65), 3: (1.60, 2.60, 2.70)}.get(
            columns, tuple(6.9 / columns for _ in range(columns)))
        table.autofit = False
        for column, width in zip(table.columns, widths):
            column.width = Inches(width)
        for i, row in enumerate(table.rows):
            trpr = row._tr.get_or_add_trPr()
            for el in list(trpr.findall(qn("w:trHeight"))):
                trpr.remove(el)
            if trpr.find(qn("w:cantSplit")) is None:
                trpr.append(OxmlElement("w:cantSplit"))
            if i == 0 and trpr.find(qn("w:tblHeader")) is None:
                trpr.append(OxmlElement("w:tblHeader"))
            for cell, width in zip(row.cells, widths):
                cell.width = Inches(width)
                cell.vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.CENTER
                if i and table.cell(0, 0).text == "Claim":
                    properties = cell._tc.get_or_add_tcPr()
                    shading = properties.find(qn("w:shd"))
                    if shading is None:
                        shading = OxmlElement("w:shd")
                        properties.append(shading)
                    shading.set(qn("w:fill"), "FFFFFF" if i % 2 else "F1F5F7")
                for p in cell.paragraphs:
                    p.paragraph_format.space_before = Pt(4)
                    p.paragraph_format.space_after = Pt(4)
                    p.paragraph_format.line_spacing = 1.05
                    p.paragraph_format.keep_with_next = i == 0
                    for run in p.runs:
                        run.font.size = Pt(10)


def refine_pagination(doc, book):
    """Avoid short overflow pages before retained section and chapter breaks."""
    spans = {
        "Guide": [
            ("How to use this guide", "Choose the depth of the review", 3, 1.05),
            ("Start with the decision", "7 Turn experience into lasting capability", 3, None),
        ],
        "Working-Companion": [
            ("5 Review the guide in practice", "6 Blank practitioner feedback record", 3, 1.05),
            ("7 Sources and rights", None, 3, None),
        ],
    }.get(book, [])
    for start, end, after, line in spans:
        selected = False
        for p in doc.paragraphs:
            if p.text == start:
                selected = True
            elif end and p.text == end:
                break
            if selected and p.style.name == "Normal" and p.text.strip():
                p.paragraph_format.space_after = Pt(after)
                if line is not None:
                    p.paragraph_format.line_spacing = line


def build(book):
    stem = BOOKS[book]
    source = ROOT / f"content/guide/{stem}-draft-{VERSION}.md"
    old_source = ROOT / f"content/guide/{stem}-draft-{PREVIOUS_VERSION}.md"
    template = ROOT / f"downloads/guide/OIBOK-{book}-Draft-{PREVIOUS_VERSION}.docx"
    target = ROOT / f"downloads/guide/OIBOK-{book}-Draft-{VERSION}.docx"
    old_md, new_md = old_source.read_text(), source.read_text()
    patch(old_md, new_md, template, target)
    doc = Document(target)
    update_furniture(doc)
    format_added_tables(doc, old_md, new_md)
    refine_pagination(doc, book)
    doc.core_properties.version = VERSION
    doc.core_properties.comments = EDITION + ". Independent practitioner review and field validation remain pending."
    doc.save(target)
    shutil.copyfile(source, target.with_suffix(".md"))
    print(json.dumps({"book": book, "version": VERSION, "source": str(source.relative_to(ROOT)),
                      "output": str(target.relative_to(ROOT))}))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--book", choices=list(BOOKS), action="append")
    args = parser.parse_args()
    for book in args.book or BOOKS:
        build(book)


if __name__ == "__main__":
    main()
