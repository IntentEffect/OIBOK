"""Build SVG and PNG sharing assets from OIBOK's existing wordmark and colours.

Requires Pillow and Liberation Sans/Serif fonts. The same drawing commands
produce editable vector masters and raster exports.
"""
from html import escape
from pathlib import Path
import subprocess
from PIL import Image, ImageDraw, ImageFont

ASSETS = Path(__file__).resolve().parents[1] / "assets"
PAPER, INK, RUST, MUTED, LINE = "#f6f5f0", "#232b2a", "#a3412c", "#5b6461", "#d6d8d0"
SCALE = 3


class Drawing:
    def __init__(self, width, height, label):
        self.width, self.height = width, height
        self.image = Image.new("RGB", (width * SCALE, height * SCALE), PAPER)
        self.draw = ImageDraw.Draw(self.image)
        self.svg = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}" role="img" aria-label="{escape(label)}">',
                    f'<rect width="{width}" height="{height}" fill="{PAPER}"/>']

    def ellipse(self, x, y, rx, ry, fill):
        self.draw.ellipse(tuple(v * SCALE for v in (x-rx, y-ry, x+rx, y+ry)), fill=fill)
        self.svg.append(f'<ellipse cx="{x}" cy="{y}" rx="{rx}" ry="{ry}" fill="{fill}"/>')

    def line(self, x1, y1, x2, y2):
        self.draw.line(tuple(v*SCALE for v in (x1, y1, x2, y2)), fill=LINE, width=2*SCALE)
        self.svg.append(f'<path d="M{x1} {y1}H{x2}" stroke="{LINE}" stroke-width="2"/>')

    def text(self, x, baseline, value, size, family="Liberation Sans", bold=False, colour=INK, tracking=0, end=None):
        spec = family + (":style=Bold" if bold else ":style=Regular")
        filename = subprocess.check_output(["fc-match", "-f", "%{file}", spec], text=True)
        font = ImageFont.truetype(filename, round(size*SCALE))
        width = sum(font.getlength(c)/SCALE for c in value) + tracking*max(0,len(value)-1)
        if end is not None:
            x = end-width
        start = x
        for char in value:
            self.draw.text((x*SCALE, baseline*SCALE), char, font=font, fill=colour, anchor="ls")
            x += font.getlength(char)/SCALE + tracking
        self.svg.append(f'<text x="{start:.3f}" y="{baseline}" font-family="{family}" font-size="{size}" font-weight="{700 if bold else 400}" font-kerning="none" letter-spacing="{tracking}" fill="{colour}">{escape(value)}</text>')
        return start+width

    def save(self, stem, png_size=None):
        (ASSETS/(stem+".svg")).write_text("\n".join(self.svg+["</svg>"])+"\n")
        size = png_size or (self.width,self.height)
        self.image.resize(size, Image.Resampling.LANCZOS).save(ASSETS/(stem+".png"), optimize=True)


social = Drawing(1200,630,"OIBOK. Understand the situation. Act together. Learn and improve.")
end = social.text(64,139,"OIBOK",104,bold=True,tracking=-5)
social.text(end-3,139,".",104,bold=True,colour=RUST)
social.text(68,181,"ORGANISATION INTELLIGENCE BODY OF KNOWLEDGE",16,bold=True,tracking=1.7)
social.line(64,216,1136,216)
social.line(64,522,1136,522)
for y, heading, label in [(303,"Understand the situation.","01 / ORIENT"),(379,"Act together.","02 / COORDINATE"),(455,"Learn and improve.","03 / IMPROVE")]:
    social.text(64,y,heading,57,family="Liberation Serif",tracking=-1)
    social.text(877,y-9,label,15,bold=True,colour=RUST,tracking=1.5)
social.text(64,573,"Research · Practical Guide · Open tools",21,colour=MUTED)
social.text(0,573,"oibok.org",24,bold=True,end=1136)
social.save("social-preview")

icon = Drawing(64,64,"OIBOK")
icon.ellipse(25,31,19,23,INK)
icon.ellipse(25,31,10,14,PAPER)
icon.ellipse(53,48,6,6,RUST)
icon.save("favicon",(32,32))
(ASSETS/"favicon.png").replace(ASSETS/"favicon-32.png")
icon.image.resize((180,180),Image.Resampling.LANCZOS).save(ASSETS/"apple-touch-icon.png",optimize=True)
print("Built social preview, SVG favicon, 32px favicon and 180px touch icon.")
