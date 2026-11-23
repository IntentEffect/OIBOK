from pathlib import Path
import argparse,importlib,json
from pypdf import PdfReader,PdfWriter
from drawing import Drawing
ROOT=Path(__file__).resolve().parents[2]
MAPPING={
'overview':('supporting_figures','draw_overview'),
'applying-oibok':('practice_figures','draw_application'),
'accepted-handoff':('practice_figures','draw_handoff'),
'people-and-ai':('practice_figures','draw_people_ai'),
'evaluating-change':('evidence_figures','draw_evaluation'),
'lasting-capability':('evidence_figures','draw_learning'),
'shared-vocabulary':('supporting_figures','draw_vocabulary'),
'connected-records':('supporting_figures','draw_records'),
'resource-comparison':('evidence_figures','draw_resources'),
}
parser=argparse.ArgumentParser();parser.add_argument('--only',nargs='*');args=parser.parse_args()
metadata=json.loads((ROOT/'website/diagrams.json').read_text())
for d in metadata['figures']:
 slug=d['slug']
 if args.only and slug not in args.only:continue
 module,function=MAPPING[slug]
 c=Drawing(ROOT/f'assets/diagrams/{slug}.svg',ROOT/f'downloads/diagrams/{slug}.pdf',d['title'],d['summary'],f"Source: OIBOK 1.0 · Guide 0.3 · Research chapters {', '.join(map(str,d['chapters']))} · oibok.org/diagrams/{slug}/",d['kind'])
 getattr(importlib.import_module(module),function)(c);c.finish();print(slug)
if not args.only:
 writer=PdfWriter()
 for d in metadata['figures']:writer.append(PdfReader(ROOT/f"downloads/diagrams/{d['slug']}.pdf"))
 writer.add_metadata({'/Title':'OIBOK Diagrams Draft 0.1','/Author':'OIBOK community','/Subject':'Nine draft diagrams for practitioner review. Original content CC BY-SA 4.0.'})
 with (ROOT/'downloads/diagrams/OIBOK-Diagrams-Draft-0.1-A3.pdf').open('wb') as f:writer.write(f)
