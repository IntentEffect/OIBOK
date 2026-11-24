"""Regenerate the printable, fillable A4 pilot worksheet with ReportLab."""
from pathlib import Path

from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas

root = Path(__file__).resolve().parents[2]
target = root / 'downloads/toolkit/OIBOK-Two-Case-Review-Draft-0.1-A4.pdf'
pdf = canvas.Canvas(str(target), pagesize=A4, invariant=True)
pdf.setTitle('OIBOK | Review one recurring problem')
pdf.setAuthor('Intent & Effect')
ink = HexColor('#232b2a')
rust = HexColor('#a3412c')
muted = HexColor('#535d59')
line = HexColor('#a6afa7')
page_w, page_h = A4
left = 38
width = page_w - 2 * left

def label(x, top, words, size=10, font='Helvetica', colour=ink):
    pdf.setFont(font, size)
    pdf.setFillColor(colour)
    pdf.drawString(x, page_h - top, words)

def field(name, title, hint, x, top, w, height):
    label(x, top, title, 11, 'Helvetica-Bold')
    label(x, top + 15, hint, 9, colour=muted)
    pdf.acroForm.textfield(
        name=name, tooltip=f'{title}. {hint}', x=x, y=page_h-top-21-height,
        width=w, height=height, fontSize=10, fontName='Helvetica',
        borderWidth=.6, borderColor=line, fillColor=white, textColor=ink,
        fieldFlags='multiline', maxlen=1000, forceBorder=True,
    )

label(left, 39, 'OIBOK', 18, 'Helvetica-Bold')
label(left + pdf.stringWidth('OIBOK', 'Helvetica-Bold', 18), 39, '.', 18, 'Helvetica-Bold', rust)
pdf.setFillColor(muted)
pdf.setFont('Helvetica', 9)
pdf.drawRightString(page_w-left, page_h-37, 'FIELD PILOT  /  DRAFT 0.1  /  25 NOVEMBER 2026')
label(left, 82, 'Review one recurring problem', 30, 'Times-Bold')
label(left, 106, 'Bring two recent cases and the people who did and received the work.', 11)
label(left, 123, 'Before reading Chapter 1, complete the first two boxes. Keep case references local.', 10, colour=muted)

field('problem', 'What keeps happening?', 'Name the piece of work, its start and end, and who feels the effect.', left, 155, width, 35)
field('initial', 'What do we already think, and what would we do?', 'Capture your original explanation and intended action in the team’s own words.', left, 228, width, 41)
gap = 16
half = (width-gap)/2
field('good_case', 'Case that went well', 'Reference, first clue, who saw it, action and result.', left, 311, half, 71)
field('delayed_case', 'Case that stalled', 'Use the same details. What was known at the time?', left+half+gap, 311, half, 71)
field('explanations', 'Which explanation fits the cases?', 'Give a rival explanation and the evidence that could change your mind.', left, 424, width, 41)
field('added_value', 'What did the review add?', 'What changed in your explanation or intended action? Record if it added nothing.', left, 505, width, 36)
field('decision', 'What will we do next?', 'Try a small change, investigate further or keep current practice. Include the owner and review date.', left, 582, width, 42)
field('follow_up', 'At the review date, what happened?', 'Record eligible cases, effects, extra work, and what happened with a different colleague. Decide what follows.', left, 666, width, 54)
pdf.setStrokeColor(line)
pdf.line(left, page_h-768, page_w-left, page_h-768)
label(left, 787, 'Pilot feedback: record time spent and a prompt to keep or change.', 9, colour=muted)
label(left, 806, 'oibok.org/research/chapter-one-pilot/', 9, 'Helvetica-Bold', rust)
pdf.linkURL('https://oibok.org/research/chapter-one-pilot/', (left,page_h-810,left+175,page_h-793))
pdf.setFont('Helvetica', 9)
pdf.setFillColor(muted)
pdf.drawRightString(page_w-left, page_h-806, 'Intent & Effect  /  CC BY-SA 4.0')
pdf.save()
