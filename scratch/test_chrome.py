import subprocess
import time
import json
import urllib.request
import urllib.parse
import socket

# Check if port 9222 is free
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
result = sock.connect_ex(('127.0.0.1', 9222))
sock.close()

proc = subprocess.Popen([
    r'C:\Program Files\Google\Chrome\Application\chrome.exe',
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    'http://localhost:8085/contact.html'
])

time.sleep(2)
try:
    tabs_raw = urllib.request.urlopen('http://127.0.0.1:9222/json').read().decode('utf-8')
    tabs = json.loads(tabs_raw)
    print('Open tabs:', len(tabs))
    for t in tabs:
        print('Tab title:', t.get('title'), 'url:', t.get('url'))
finally:
    proc.terminate()
