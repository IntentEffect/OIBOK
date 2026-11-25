"""Apply the 0.6.1 Markdown delta to the issued 0.6 Word templates.

Run with the document runtime's Python. Pandoc is used only to parse Markdown;
the existing covers, sections, figures, table formatting and running furniture
remain in the Word package. Render with render_docx.py after running this script.
The optional --toc PDF pass updates the template's static contents page numbers.
"""
from __future__ import annotations

import argparse
import copy
import difflib
import json
import io
import re
import shutil
import subprocess
from pathlib import Path

from docx import Document
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.opc.constants import RELATIONSHIP_TYPE as RT
from docx.shared import Inches, Pt
from docx.table import Table, _Cell
from docx.text.paragraph import Paragraph

ROOT = Path(__file__).resolve().parents[2]
VERSION = "0.6.1"
BASE_REVISION = "cf25efa91684ea5bf272bf1acb85b496b72891b0"


def ast(text):
    return json.loads(subprocess.check_output(
        ["pandoc", "-f", "markdown", "-t", "json"], input=text.encode()))["blocks"]


def plain(items):
    out = []
    for item in items:
        t, c = item["t"], item.get("c")
        if t == "Str": out.append(c)
        elif t in ("Space", "SoftBreak", "LineBreak"): out.append(" ")
        elif t in ("Strong", "Emph", "Strikeout", "Superscript", "Subscript", "SmallCaps"):
            out.append(plain(c))
        elif t in ("Link", "Image"): out.append(plain(c[1]))
        elif t in ("Code", "Math"): out.append(c[1])
        elif t == "Quoted": out.append(('“' if c[0]["t"] == "DoubleQuote" else '‘') + plain(c[1]) + ('”' if c[0]["t"] == "DoubleQuote" else '’'))
        elif t == "Span": out.append(plain(c[1]))
        else: raise ValueError(f"Unsupported inline {t}")
    return "".join(out)


def block_text(block):
    return plain(block["c"][2] if block["t"] == "Header" else block["c"])


def norm(text):
    return re.sub(r"\s+", " ", text.translate(str.maketrans({'’':"'",'‘':"'",'“':'"','”':'"','\u00a0':' '}))).strip()


def rows(block):
    c = block["c"]
    rs = list(c[3][1])
    for body in c[4]: rs.extend(body[2]); rs.extend(body[3])
    rs.extend(c[5][1])
    return [[cell[4] for cell in row[1]] for row in rs]


def row_text(row):
    return [norm(" ".join(block_text(b) for b in cell)) for cell in row]


def find_node(doc, block):
    if block["t"] == "Table":
        expected = [row_text(r) for r in rows(block)]
        found = [t._tbl for t in doc.tables if [[norm(c.text) for c in r.cells] for r in t.rows] == expected]
    elif block["t"] in ("Header", "Para", "Plain"):
        wanted = norm(block_text(block))
        found = [p._p for p in doc.paragraphs if norm(p.text) == wanted]
    else:
        raise ValueError(f"Cannot anchor {block['t']}")
    if len(found) != 1:
        raise ValueError(f"Expected one template match, got {len(found)}: {str(block)[:180]}")
    return found[0]


def clear_paragraph(p):
    for child in list(p._p):
        if child.tag not in (qn("w:pPr"), qn("w:bookmarkStart"), qn("w:bookmarkEnd")):
            p._p.remove(child)


def inline(p, items, bold=False, italic=False, base_rpr=None, parent=None):
    parent = p._p if parent is None else parent
    for item in items:
        t, c = item["t"], item.get("c")
        if t in ("Strong", "Emph"):
            inline(p, c, bold or t == "Strong", italic or t == "Emph", base_rpr, parent)
            continue
        if t == "Link":
            url = c[2][0]
            if url.startswith("/"): url = "https://oibok.org" + url
            h = OxmlElement("w:hyperlink")
            h.set(qn("r:id"), p.part.relate_to(url, RT.HYPERLINK, is_external=True))
            parent.append(h)
            inline(p, c[1], bold, italic, base_rpr, h)
            continue
        if t == "Span":
            inline(p, c[1], bold, italic, base_rpr, parent)
            continue
        text = plain([item])
        r = OxmlElement("w:r")
        rp = copy.deepcopy(base_rpr) if base_rpr is not None else OxmlElement("w:rPr")
        for tag, val in (("b", bold), ("i", italic)):
            if val:
                el = rp.find(qn("w:" + tag))
                if el is None: el = OxmlElement("w:" + tag); rp.append(el)
                el.set(qn("w:val"), "1")
        if parent.tag == qn("w:hyperlink"):
            # Retain each template's established hyperlink presentation.
            if any(s.style_id == 'Hyperlink' for s in p.part.document.styles):
                s=OxmlElement("w:rStyle");s.set(qn("w:val"),"Hyperlink");rp.append(s)
            else:
                color=OxmlElement("w:color");color.set(qn("w:val"),"255C7A");rp.append(color)
        if len(rp): r.append(rp)
        node=OxmlElement("w:t");node.set(qn("xml:space"),"preserve");node.text=text;r.append(node)
        parent.append(r)


def fill_p(doc, node, block, preserve_run=False):
    p=Paragraph(node, doc._body)
    base=copy.deepcopy(p.runs[0]._r.rPr) if preserve_run and p.runs and p.runs[0]._r.rPr is not None else None
    clear_paragraph(p)
    inline(p, block["c"][2] if block["t"] == "Header" else block["c"], base_rpr=base)


def fill_cell(doc, cell, blocks, header=False):
    p=cell.paragraphs[0]
    rp = copy.deepcopy(p.runs[0]._r.rPr) if p.runs and p.runs[0]._r.rPr is not None else None
    for extra in cell.paragraphs[1:]: cell._tc.remove(extra._p)
    clear_paragraph(p)
    for i,b in enumerate(blocks):
        if i: inline(p,[{"t":"Space"}])
        inline(p,b["c"],base_rpr=rp)


def rewrite_table(doc, node, block, new=False):
    table=Table(node,doc._body)
    source_rows=rows(block)
    review=doc.paragraphs[0].style.name.lower()=='heading 1'
    widths=[3.4,1.4,1.4] if review else [3.7,1.6,1.6]
    header=copy.deepcopy(table.rows[0]._tr)
    body=copy.deepcopy(table.rows[-1]._tr)
    for r in list(table.rows): table._tbl.remove(r._tr)
    for i,source in enumerate(source_rows):
        tr=copy.deepcopy(header if i==0 else body)
        # New three-column comparison tables use a wide label column.
        table._tbl.append(tr)
        for j,(cell,blocks) in enumerate(zip(table.rows[-1].cells,source)):
            fill_cell(doc,cell,blocks,header=i==0)
            if new:
                cell.width=Inches(widths[j])
                for p in cell.paragraphs:
                    p.paragraph_format.space_after=Pt(5)
                    p.paragraph_format.space_before=Pt(5)
                    p.paragraph_format.keep_with_next=False
                    for r in p.runs:r.font.size=Pt(9.5)
    if new:
        table.autofit=False
        for col,width in zip(table.columns,widths):col.width=Inches(width)


def new_nodes(doc, block):
    t=block["t"]
    if t in ("Para","Plain","Header"):
        review=doc.paragraphs[0].style.name.lower()=='heading 1'
        level=block['c'][0] if t=='Header' and review else max(1,block['c'][0]-1) if t=='Header' else None
        name=f'Heading {level}' if t=='Header' else 'Body Text' if review else 'Normal'
        style=next(s for s in doc.styles if s.name.lower()==name.lower())
        exemplar=next((p for p in doc.paragraphs if p.style.style_id==style.style_id and p.runs),None)
        p=doc.add_paragraph(style=style)
        if t=="Header":
            p.paragraph_format.keep_with_next=True
        fill_p(doc,p._p,block)
        if t=='Header' and exemplar is not None and exemplar.runs[0]._r.rPr is not None:
            for r in p.runs:
                if r._r.rPr is not None:r._r.remove(r._r.rPr)
                r._r.insert(0,copy.deepcopy(exemplar.runs[0]._r.rPr))
        return [p._p]
    if t=="Table":
        template=next(t for t in doc.tables if len(t.columns)==len(rows(block)[0]))
        node=copy.deepcopy(template._tbl)
        rewrite_table(doc,node,block,new=True)
        return [node]
    if t in ('BulletList','OrderedList'):
        nodes=[]
        items=block['c'] if t=='BulletList' else block['c'][1]
        for item in items:
            p=doc.add_paragraph(style='List Bullet' if t=='BulletList' else 'List Number')
            for i,b in enumerate(item):
                if i:inline(p,[{'t':'Space'}])
                inline(p,b['c'])
            nodes.append(p._p)
        return nodes
    raise ValueError(f"Unsupported new block {t}")


def patch(old_md,new_md,template,out):
    old,new=ast(old_md),ast(new_md)
    doc=Document(template)
    cover_nodes=set(p._p for p in doc.paragraphs[:9])
    matcher=difflib.SequenceMatcher(None,[json.dumps(x,sort_keys=True) for x in old],[json.dumps(x,sort_keys=True) for x in new],autojunk=False)
    counts={"paragraphs_replaced":0,"blocks_inserted":0,"tables_updated":0}
    for op,a,b,c,d in reversed(matcher.get_opcodes()):
        if op=="equal":continue
        ob,nb=old[a:b],new[c:d]
        if op=="replace" and len(ob)==len(nb) and all(x['t']==y['t'] for x,y in zip(ob,nb)):
            for x,y in zip(ob,nb):
                node=find_node(doc,x)
                if x["t"]=="Table":rewrite_table(doc,node,y);counts['tables_updated']+=1
                else:fill_p(doc,node,y,preserve_run=node in cover_nodes);counts['paragraphs_replaced']+=1
        else:
            nodes=[find_node(doc,x) for x in ob]
            if nodes:anchor=nodes[0]
            elif b<len(old):anchor=find_node(doc,old[b])
            else:anchor=doc._element.body.sectPr
            for block in nb:
                for node in new_nodes(doc,block):
                    anchor.addprevious(node);counts['blocks_inserted']+=1
            for node in nodes:node.getparent().remove(node)
    # Running furniture belongs to the current edition, not the history notes.
    if "Draft-0.6.1" in str(out):
        for part in doc.part.package.parts:
            if part.partname.startswith('/word/footer') or part.partname.startswith('/word/header'):
                for node in part.element.iter(qn('w:t')):
                    if node.text:node.text=node.text.replace('DRAFT 0.6 ', 'DRAFT 0.6.1 ').replace('24 November 2026','25 November 2026')
        doc.core_properties.version=VERSION
    if out.name=='OIBOK-Guide-Draft-0.6.1.docx':
        # Keep the Chapter 7 opening together ahead of its retained landscape figure.
        next(p for p in doc.paragraphs if p.text=='7 Turn experience into lasting capability').paragraph_format.page_break_before=True
    doc.save(out)
    # Every changed paragraph and cell must be present in the edited document.
    alltext=norm(' '.join(p.text for p in doc.paragraphs)+' '+' '.join(c.text for t in doc.tables for r in t.rows for c in r.cells))
    for op,a,b,c,d in matcher.get_opcodes():
        if op=='equal':continue
        for block in new[c:d]:
            if block['t']=='Table':pieces=[t for row in rows(block) for t in row_text(row)]
            elif block['t']=='BulletList':pieces=[block_text(b) for item in block['c'] for b in item]
            elif block['t']=='OrderedList':pieces=[block_text(b) for item in block['c'][1] for b in item]
            else:pieces=[block_text(block)]
            for piece in pieces:
                if norm(piece) not in alltext:raise AssertionError(f'Missing text {piece[:100]}')
    print(json.dumps({'output':str(out.relative_to(ROOT)),**counts}))


def update_toc(path,pdf):
    import fitz
    doc=Document(path);pages=fitz.open(pdf);heads=[]
    for n,page in enumerate(pages,1):
        for block in page.get_text('dict')['blocks']:
            if 'lines' not in block:continue
            lines=[]
            for line in block['lines']:
                if max((s['size'] for s in line['spans']),default=0)>=16:
                    lines.append(norm(''.join(s['text'] for s in line['spans'])))
            if lines:heads.append((n,norm(' '.join(lines))))
    changed=[]
    for p in doc.paragraphs:
        links=p._p.findall(qn('w:hyperlink'))
        if not links or '\t' not in p.text:continue
        label=norm(p.text.split('\t')[0])
        found=[n for n,t in heads if t==label or t.replace('- ','-')==label]
        if len(found)!=1:raise ValueError(f'TOC page unresolved: {label}, {found}')
        after_tab=False
        for run in p.runs:
            if '\t' in run.text:
                old=run.text;run.text='\t'+str(found[0]);changed.append([label,old,found[0]])
                after_tab=True
            elif after_tab:
                run.text=''
    doc.save(path);print(json.dumps({'toc':str(path), 'entries':changed}))


def main():
    p=argparse.ArgumentParser();p.add_argument('--toc',nargs=2,metavar=('DOCX','PDF'))
    p.add_argument('--png',nargs=2,metavar=('PDF','OUTPUT_DIRECTORY'))
    args=p.parse_args()
    if args.toc:return update_toc(Path(args.toc[0]),Path(args.toc[1]))
    if args.png:
        # Independent PDF raster check for body content and running furniture.
        import fitz
        out=Path(args.png[1]);out.mkdir(parents=True,exist_ok=True)
        with fitz.open(args.png[0]) as pdf:
            for n,page in enumerate(pdf,1):page.get_pixmap(dpi=85).save(out/f'page-{n}.png')
            print(json.dumps({'png_pages':len(pdf),'directory':str(out)}))
        return
    editions=[('guide','Guide'),('working-companion','Working-Companion'),('silvergum-case-pack','Silvergum-Case-Pack')]
    for source,name in editions:
        new=ROOT/f'content/guide/{source}-draft-{VERSION}.md'
        out=ROOT/f'downloads/guide/OIBOK-{name}-Draft-{VERSION}.docx'
        patch((ROOT/f'content/guide/{source}-draft-0.6.md').read_text(),new.read_text(),ROOT/f'downloads/guide/OIBOK-{name}-Draft-0.6.docx',out)
        shutil.copyfile(new,out.with_suffix('.md'))
    review=ROOT/'content/guide/chapter-six-review.md'
    old=subprocess.check_output(['git','show',f'{BASE_REVISION}:content/guide/chapter-six-review.md'],cwd=ROOT).decode()
    template=ROOT/'downloads/review/Chapter-6-review.docx'
    baseline=io.BytesIO(subprocess.check_output(['git','show',f'{BASE_REVISION}:downloads/review/Chapter-6-review.docx'],cwd=ROOT))
    patch(old,review.read_text(),baseline,template)


if __name__=='__main__':main()
