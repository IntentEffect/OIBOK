"""Shared vector primitives for OIBOK draft visual set 0.1.
Coordinates are top-left, in a 1200 x 848 landscape A3 drawing.
The same text wrapping and geometry produce SVG and embedded-font PDF.
"""
from pathlib import Path
from xml.sax.saxutils import escape
import math
from reportlab.pdfgen import canvas as pdfcanvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A3, landscape

W, H = 1200, 848
PAPER, INK, MUTED = '#f6f5f0', '#232b2a', '#5b6461'
ACCENT, LINE, TINT, WHITE = '#a3412c', '#c9cec5', '#e7ece3', '#ffffff'
BLUE, BLUE_LIGHT = '#406e7c', '#e6eef0'
FONTROOT = Path('/usr/share/fonts/truetype/liberation')
for name, filename in [('OI','LiberationSans-Regular.ttf'),('OI-Bold','LiberationSans-Bold.ttf'),('OI-Serif','LiberationSerif-Regular.ttf')]:
    if name not in pdfmetrics.getRegisteredFontNames():
        pdfmetrics.registerFont(TTFont(name, str(FONTROOT / filename)))

class Drawing:
    W, H = W, H
    PAPER, INK, MUTED, ACCENT, LINE, TINT, WHITE, BLUE, BLUE_LIGHT = PAPER, INK, MUTED, ACCENT, LINE, TINT, WHITE, BLUE, BLUE_LIGHT
    def __init__(self, svg_path, pdf_path, title, subtitle, source, status='Draft practice illustration'):
        self.svg_path, self.pdf_path = Path(svg_path), Path(pdf_path)
        self.svg_path.parent.mkdir(parents=True, exist_ok=True)
        self.pdf_path.parent.mkdir(parents=True, exist_ok=True)
        self.parts=[]
        self.text_boxes=[]
        self.pdf=pdfcanvas.Canvas(str(pdf_path),pagesize=landscape(A3),pageCompression=1)
        self.pdf.setTitle(title+' | OIBOK draft visual 0.1')
        self.pdf.setAuthor('OIBOK community')
        self.pdf.setSubject('Draft for practitioner review. '+source)
        pw,ph=landscape(A3)
        self.pdf.scale(pw/W,ph/H)
        self.parts.append(f'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 {W} {H}" width="1200" height="848" role="img" aria-labelledby="title desc"><title id="title">{escape(title)}</title><desc id="desc">{escape(subtitle+" "+source+" Draft for practitioner review. CC BY-SA 4.0.")}</desc>')
        self.rect(0,0,W,H,fill=PAPER,stroke=None)
        self.text(44,26,'OIBOK',size=22,weight='bold')
        self.text(1156,32,'DRAFT 0.1  /  FOR PRACTITIONER REVIEW',size=12,weight='bold',color=ACCENT,align='right')
        bottom=self.text(44,69,title,size=36,font='serif',width=1112,leading=39)
        self.text(44,bottom+10,subtitle,size=16,width=1112,color=MUTED,leading=21)
        self.line([(44,158),(1156,158)],color=LINE,width=1)
        self.line([(44,764),(1156,764)],color=LINE,width=1)
        self.text(44,779,status+' · Visual set 0.1 · 23 November 2026',size=12,color=MUTED)
        self.text(1156,779,'oibok.org/diagrams/ · CC BY-SA 4.0',size=12,color=MUTED,align='right')
        self.text(44,801,source,size=11,width=1112,color=MUTED,leading=14)
    def _font(self,weight='normal',font='sans'):
        return 'OI-Serif' if font=='serif' else 'OI-Bold' if weight=='bold' else 'OI'
    def wrap(self,text,width,size=16,weight='normal',font='sans'):
        fn=self._font(weight,font); lines=[]
        for paragraph in str(text).split('\n'):
            if not paragraph: lines.append(''); continue
            line=''
            for word in paragraph.split():
                test=(line+' '+word).strip()
                if line and pdfmetrics.stringWidth(test,fn,size)>width:
                    lines.append(line); line=word
                else: line=test
            lines.append(line)
        return lines
    def text(self,x,y,text,size=16,width=None,color=INK,weight='normal',font='sans',leading=None,align='left'):
        leading=leading or size*1.3
        lines=self.wrap(text,width,size,weight,font) if width else str(text).split('\n')
        fn=self._font(weight,font)
        fam='Liberation Serif, Georgia, serif' if font=='serif' else 'Liberation Sans, Arial, sans-serif'
        self.pdf.setFillColor(HexColor(color));self.pdf.setFont(fn,size)
        for i,line in enumerate(lines):
            yy=y+size+i*leading
            tw=pdfmetrics.stringWidth(line,fn,size)
            xx=x if align=='left' else x-tw if align=='right' else x-tw/2
            if xx < -1 or xx+tw>W+1 or yy>H+1 or y<0:
                raise ValueError(f'Text outside page: {line!r} at {xx},{yy}')
            self.pdf.drawString(xx,H-yy,line)
            self.parts.append(f'<text x="{xx:.2f}" y="{yy:.2f}" fill="{color}" font-family="{fam}" font-size="{size}" font-weight="{700 if weight=="bold" else 400}">{escape(line)}</text>')
            self.text_boxes.append((xx,yy-size,xx+tw,yy,line))
        return y+size+(len(lines)-1)*leading
    def rect(self,x,y,w,h,fill=WHITE,stroke=LINE,width=1,radius=0):
        self.pdf.setLineWidth(width)
        if fill:self.pdf.setFillColor(HexColor(fill))
        if stroke:self.pdf.setStrokeColor(HexColor(stroke))
        if radius:self.pdf.roundRect(x,H-y-h,w,h,radius,fill=bool(fill),stroke=bool(stroke))
        else:self.pdf.rect(x,H-y-h,w,h,fill=bool(fill),stroke=bool(stroke))
        self.parts.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{radius}" fill="{fill or "none"}" stroke="{stroke or "none"}" stroke-width="{width}"/>')
    def box(self,x,y,w,h,title,body='',fill=WHITE,stroke=LINE,title_size=19,body_size=15,padding=17,accent=False):
        self.rect(x,y,w,h,fill=fill,stroke=ACCENT if accent else stroke,width=1.4 if accent else 1)
        bottom=self.text(x+padding,y+padding,title,size=title_size,width=w-2*padding,weight='bold')
        if body:bottom=self.text(x+padding,bottom+10,body,size=body_size,width=w-2*padding,color=MUTED,leading=body_size*1.35)
        if bottom>y+h-padding+4:raise ValueError(f'Box overflow {title!r}: bottom {bottom}, limit {y+h-padding+4}')
        return bottom
    def line(self,points,color=LINE,width=1.5,dashed=False):
        self.pdf.setStrokeColor(HexColor(color));self.pdf.setLineWidth(width)
        self.pdf.setDash([5,4] if dashed else [])
        p=self.pdf.beginPath();p.moveTo(points[0][0],H-points[0][1])
        for x,y in points[1:]:p.lineTo(x,H-y)
        self.pdf.drawPath(p,stroke=1,fill=0);self.pdf.setDash([])
        coords=' '.join(f'{x},{y}' for x,y in points)
        self.parts.append(f'<polyline points="{coords}" fill="none" stroke="{color}" stroke-width="{width}"'+(' stroke-dasharray="5 4"' if dashed else '')+'/>')
    def arrow(self,points,color=ACCENT,width=1.7,dashed=False,label=None,label_x=None,label_y=None):
        self.line(points,color,width,dashed)
        x,y=points[-1];ax,ay=points[-2];angle=math.atan2(y-ay,x-ax); length=8; half=3.6
        x1=x-length*math.cos(angle)+half*math.sin(angle);y1=y-length*math.sin(angle)-half*math.cos(angle)
        x2=x-length*math.cos(angle)-half*math.sin(angle);y2=y-length*math.sin(angle)+half*math.cos(angle)
        self.pdf.setFillColor(HexColor(color));p=self.pdf.beginPath();p.moveTo(x,H-y);p.lineTo(x1,H-y1);p.lineTo(x2,H-y2);p.close();self.pdf.drawPath(p,stroke=0,fill=1)
        self.parts.append(f'<polygon points="{x},{y} {x1},{y1} {x2},{y2}" fill="{color}"/>')
        if label:self.text(label_x if label_x is not None else (ax+x)/2,label_y if label_y is not None else (ay+y)/2-21,label,size=13,color=color,align='center')
    def finish(self):
        self.parts.append('</svg>')
        self.svg_path.write_text('\n'.join(self.parts)+'\n')
        self.pdf.showPage();self.pdf.save()
