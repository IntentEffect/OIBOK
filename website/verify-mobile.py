import json, subprocess, time, urllib.request
from pathlib import Path
from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
from functools import partial
from threading import Thread
def req(path, data=None):
 raw=None if data is None else json.dumps(data).encode()
 with urllib.request.urlopen(urllib.request.Request('http://127.0.0.1:9515'+path,raw,{'Content-Type':'application/json'}),timeout=30) as r: return json.load(r)['value']
site=ThreadingHTTPServer(('127.0.0.1',0),partial(SimpleHTTPRequestHandler,directory='dist'))
Thread(target=site.serve_forever,daemon=True).start()
root='http://127.0.0.1:'+str(site.server_port)
with subprocess.Popen(['chromedriver','--port=9515'],stdout=subprocess.DEVNULL) as driver:
 try:
  for i in range(60):
   try: req('/status');break
   except OSError:time.sleep(.25)
  for width in [390,320]:
   sid=req('/session',{'capabilities':{'alwaysMatch':{'browserName':'chrome','goog:chromeOptions':{'args':['--headless','--no-sandbox','--disable-dev-shm-usage'],'mobileEmulation':{'deviceMetrics':{'width':width,'height':844,'pixelRatio':2,'mobile':True,'touch':True}}}}}})['sessionId']
   session='/session/'+sid
   def js(s):return req(session+'/execute/sync',{'script':s,'args':[]})
   def key(k):req(session+'/actions',{'actions':[{'type':'key','id':'kb','actions':[{'type':'keyDown','value':k},{'type':'keyUp','value':k}]}]})
   req(session+'/url',{'url':root+'/knowledge/'})
   for expected in ['/knowledge/coordination-and-collective-action/','/tools/practice-review/#improvement-and-handoff-worksheet','/tools/two-case-review/']:
    assert js('return document.documentElement.clientWidth')==width
    assert js('return document.documentElement.scrollWidth')<=width+1
    for idx in range(800):
     key('\ue004')
     if js('return document.activeElement.href || ""')==root+expected:break
    else:raise ValueError('Keyboard could not reach '+expected)
    key('\ue007')
    assert js('return location.href')==root+expected
   pdf=js('return document.querySelector("article a[href$=\'.pdf\']").href')
   assert Path('dist'+pdf[len(root):]).read_bytes().startswith(b'%PDF')
   print(f'PASS {width}px mobile layout, three keyboard transitions and fillable PDF destination',flush=True)
   urllib.request.urlopen(urllib.request.Request('http://127.0.0.1:9515'+session,method='DELETE')).close()
 finally: driver.terminate();site.shutdown()
