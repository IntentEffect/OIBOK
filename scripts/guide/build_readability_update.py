"""Build the 0.7 Plain-language practice edition from the issued 0.6.3 files.

Run with the primary document runtime. Existing covers, figures, sections,
typography and list formatting are retained. Render each result with
render_docx.py, update static contents with build_editorial_update.py --toc,
then render and visually verify the final PDFs. Earlier editions are inputs.
"""
from __future__ import annotations

import argparse
import difflib
import json
import re
import shutil
from pathlib import Path

from docx import Document
from docx.enum.table import WD_CELL_VERTICAL_ALIGNMENT
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Inches, Pt

from build_editorial_update import (
    ast, block_text, fill_p, find_node, new_nodes, norm, rewrite_table,
    row_text, rows,
)

ROOT = Path(__file__).resolve().parents[2]
VERSION = "0.7"
PREVIOUS_VERSION = "0.6.3"
DATE = "28 November 2026"
EDITION = "Plain-language practice edition"
BOOKS = {
    "Guide": "guide",
    "Working-Companion": "working-companion",
    "Silvergum-Case-Pack": "silvergum-case-pack",
}


def list_items(block):
    return block["c"] if block["t"] == "BulletList" else block["c"][1]


def find_nodes(doc, block):
    if block["t"] in ("BulletList", "OrderedList"):
        return [find_node(doc, item) for group in list_items(block) for item in group]
    return [find_node(doc, block)]


def source_pieces(block):
    if block["t"] == "Table":
        return [t for row in rows(block) for t in row_text(row)]
    if block["t"] in ("BulletList", "OrderedList"):
        return [block_text(b) for item in list_items(block) for b in item]
    if block["t"] == "BlockQuote":
        return [t for b in block["c"] for t in source_pieces(b)]
    if '"t": "Image"' in json.dumps(block):
        return []
    return [block_text(block)]


def patch_edition(old_md, new_md, template, target):
    """Apply source changes while retaining existing list paragraph properties."""
    old, new = ast(old_md), ast(new_md)
    doc = Document(template)
    cover_nodes = {p._p for p in doc.paragraphs[:9]}
    matcher = difflib.SequenceMatcher(
        None, [json.dumps(x, sort_keys=True) for x in old],
        [json.dumps(x, sort_keys=True) for x in new], autojunk=False)
    counts = {"paragraphs_replaced": 0, "blocks_inserted": 0,
              "tables_updated": 0, "list_items_replaced": 0}
    for operation, a, b, c, d in reversed(matcher.get_opcodes()):
        if operation == "equal":
            continue
        before, after = old[a:b], new[c:d]
        paired = (operation == "replace" and len(before) == len(after)
                  and all(x["t"] == y["t"] for x, y in zip(before, after)))
        if paired:
            for x, y in zip(before, after):
                nodes = find_nodes(doc, x)
                if x["t"] == "Table":
                    rewrite_table(doc, nodes[0], y)
                    counts["tables_updated"] += 1
                elif x["t"] in ("BulletList", "OrderedList"):
                    replacements = [item for group in list_items(y) for item in group]
                    if len(nodes) != len(replacements):
                        raise ValueError("List item count changed; review the intended list layout")
                    for node, item in zip(nodes, replacements):
                        fill_p(doc, node, item)
                        counts["list_items_replaced"] += 1
                else:
                    fill_p(doc, nodes[0], y, preserve_run=nodes[0] in cover_nodes)
                    counts["paragraphs_replaced"] += 1
        else:
            nodes = [node for block in before for node in find_nodes(doc, block)]
            anchor = (nodes[0] if nodes else find_nodes(doc, old[b])[0]
                      if b < len(old) else doc._element.body.sectPr)
            for block in after:
                for node in new_nodes(doc, block):
                    anchor.addprevious(node)
                    counts["blocks_inserted"] += 1
            for node in nodes:
                node.getparent().remove(node)
    text = norm(" ".join(p.text for p in doc.paragraphs) + " " +
                " ".join(cell.text for table in doc.tables
                         for row in table.rows for cell in row.cells))
    for block in new:
        for piece in source_pieces(block):
            if norm(piece) not in text:
                raise AssertionError(f"Missing source text: {piece[:120]}")
    print(json.dumps({"output": str(target.relative_to(ROOT)), **counts}))
    return doc


def update_furniture(doc):
    for part in doc.part.package.parts:
        if not str(part.partname).startswith(("/word/header", "/word/footer")):
            continue
        for node in part.element.iter(qn("w:t")):
            if node.text:
                node.text = re.sub(r"DRAFT \d+(?:\.\d+)*", "DRAFT " + VERSION, node.text)


def format_changed_tables(doc, old_md, new_md):
    key = lambda block: tuple(tuple(row_text(row)) for row in rows(block))
    old = {key(block) for block in ast(old_md) if block["t"] == "Table"}
    changed = {key(block) for block in ast(new_md)
               if block["t"] == "Table" and key(block) not in old}
    for table in doc.tables:
        content = tuple(tuple(norm(cell.text) for cell in row.cells)
                        for row in table.rows)
        if content not in changed:
            continue
        booking = table.cell(0, 0).text == "Fictional trial record"
        if booking:
            widths = (3.3, 1.8, 1.8)
            table.autofit = False
            for column, width in zip(table.columns, widths):
                column.width = Inches(width)
        for i, row in enumerate(table.rows):
            properties = row._tr.get_or_add_trPr()
            for height in list(properties.findall(qn("w:trHeight"))):
                properties.remove(height)
            if properties.find(qn("w:cantSplit")) is None:
                properties.append(OxmlElement("w:cantSplit"))
            if i == 0 and properties.find(qn("w:tblHeader")) is None:
                properties.append(OxmlElement("w:tblHeader"))
            for j, cell in enumerate(row.cells):
                if booking:
                    cell.width = Inches(widths[j])
                cell.vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.CENTER
                if i:
                    properties = cell._tc.get_or_add_tcPr()
                    shading = properties.find(qn("w:shd"))
                    if shading is None:
                        shading = OxmlElement("w:shd")
                        properties.append(shading)
                    shading.set(qn("w:fill"), "FFFFFF" if i % 2 else "F1F5F7")
                for paragraph in cell.paragraphs:
                    paragraph.paragraph_format.keep_with_next = i == 0
                    if booking:
                        paragraph.paragraph_format.space_before = Pt(4)
                        paragraph.paragraph_format.space_after = Pt(4)
                        paragraph.paragraph_format.line_spacing = 1.05
                        for run in paragraph.runs:
                            run.font.size = Pt(10)


def refine_pagination(doc, book):
    """Keep short continuations with their section and balance source notes."""
    if book == "Guide":
        start, end, after, line = "How to use this guide", "Choose the depth of the review", 2, 1.0
    elif book == "Working-Companion":
        start, end, after, line = "Purpose and status", "1 Choose the depth of the review", 3, 1.05
    else:
        return
    selected = False
    for paragraph in doc.paragraphs:
        if paragraph.text == start:
            selected = True
        elif paragraph.text == end:
            break
        if selected and paragraph.style.name == "Normal" and paragraph.text.strip():
            paragraph.paragraph_format.space_after = Pt(after)
            paragraph.paragraph_format.line_spacing = line
    if book == "Working-Companion":
        selected = False
        for paragraph in doc.paragraphs:
            if paragraph.text == "Review to work design":
                selected = True
            properties = paragraph._p.pPr
            if selected and properties is not None and properties.find(qn("w:sectPr")) is not None:
                break
            if selected and paragraph.style.name == "Normal" and paragraph.text.strip():
                paragraph.paragraph_format.space_after = Pt(2)
                paragraph.paragraph_format.line_spacing = 1.05
        for paragraph in doc.paragraphs:
            if paragraph.text.startswith("Companion 0.6.3, 28 November 2026,"):
                paragraph.paragraph_format.page_break_before = True


def build(book):
    stem = BOOKS[book]
    source = ROOT / f"content/guide/{stem}-draft-{VERSION}.md"
    old_source = ROOT / f"content/guide/{stem}-draft-{PREVIOUS_VERSION}.md"
    template = ROOT / f"downloads/guide/OIBOK-{book}-Draft-{PREVIOUS_VERSION}.docx"
    target = ROOT / f"downloads/guide/OIBOK-{book}-Draft-{VERSION}.docx"
    old_md, new_md = old_source.read_text(), source.read_text()
    doc = patch_edition(old_md, new_md, template, target)
    update_furniture(doc)
    format_changed_tables(doc, old_md, new_md)
    refine_pagination(doc, book)
    doc.core_properties.version = VERSION
    doc.core_properties.comments = EDITION + ". Independent practitioner review and field validation remain pending."
    doc.save(target)
    shutil.copyfile(source, target.with_suffix(".md"))
    print(json.dumps({"book": book, "version": VERSION,
                      "source": str(source.relative_to(ROOT)),
                      "output": str(target.relative_to(ROOT))}))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--book", choices=list(BOOKS), action="append")
    args = parser.parse_args()
    for book in args.book or BOOKS:
        build(book)


if __name__ == "__main__":
    main()
