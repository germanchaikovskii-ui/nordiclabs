"""Buildless site checks: routes, assets, anchors, shared navigation and preservation."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import re, subprocess, xml.etree.ElementTree as ET
ROOT=Path(__file__).resolve().parent.parent
WEB=ROOT/'website'
class Page(HTMLParser):
 def __init__(self,text):
  super().__init__();self.ids=[];self.links=[];self.feed(text)
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if a.get('id'):self.ids.append(a['id'])
  for key in ('href','src','poster'):
   if a.get(key):self.links.append(a[key])
errors=[]
pages={p:Page(p.read_text()) for p in WEB.rglob('*.html')}
for p,page in pages.items():
 if len(set(page.ids))!=len(page.ids):errors.append(f'Duplicate IDs: {p.relative_to(ROOT)}')
 for link in page.links:
  u=urlsplit(link)
  if u.scheme or u.netloc:continue
  target=(WEB/u.path.lstrip('/') if u.path.startswith('/') else p.parent/unquote(u.path)) if u.path else p
  target=target.resolve()
  if target.is_dir():target/= 'index.html'
  if not target.exists():errors.append(f'Missing: {p.relative_to(ROOT)} -> {link}');continue
  if u.fragment and target in pages and unquote(u.fragment) not in pages[target].ids:errors.append(f'Missing anchor: {p.relative_to(ROOT)} -> {link}')
 text=p.read_text()
 for cls in ['navigation','footer-links']:
  nav=re.search(r'<nav[^>]*class="'+cls+r'".*?</nav>',text,re.S)
  if not nav or '>Critical AI<' not in nav[0]:errors.append(f'Missing Critical AI in {cls}: {p.relative_to(ROOT)}')
for p in (WEB/'assets/critical').rglob('*.svg'):
 try:ET.parse(p)
 except ET.ParseError as e:errors.append(f'Invalid SVG {p}: {e}')
base='1caa9c4'
for rel in ['website/terms/index.html','website/privacy/index.html']:
 before=subprocess.check_output(['git','show',base+':'+rel],cwd=ROOT,text=True)
 after=(ROOT/rel).read_text()
 for s in [before,after]:assert re.search(r'<main\b.*?</main>',s,re.S)
 assert re.search(r'<main\b.*?</main>',before,re.S)[0]==re.search(r'<main\b.*?</main>',after,re.S)[0],rel
for rel in ['index.html','404.html','CNAME','arc-engine/index.html']:
 before=subprocess.check_output(['git','show',base+':'+rel],cwd=ROOT)
 assert before==(ROOT/rel).read_bytes(),f'Protected production file changed: {rel}'
# Existing service content must be identical; shared header/footer changes are allowed.
for p in pages:
 if p==WEB/'index.html' or 'critical' in p.relative_to(WEB).parts:continue
 rel=str(p.relative_to(ROOT));old=subprocess.check_output(['git','show',base+':'+rel],cwd=ROOT,text=True)
 before=re.search(r'<main\b.*?</main>',old,re.S);after=re.search(r'<main\b.*?</main>',p.read_text().replace('<option>Critical Infrastructure AI</option>', ''),re.S)
 if before and after and before[0]!=after[0]:errors.append('Existing main content changed: '+rel)
for path in ['critical/','critical/reference-solutions/','critical/pilot/']:
 assert (WEB/path/'index.html') in pages
print(f'Checked {len(pages)} HTML pages; local links/assets/anchors; SVG parsing; 4-direction navigation; legal and production preservation.')
if errors:print('\n'.join(errors));raise SystemExit(1)
print('PASS')
