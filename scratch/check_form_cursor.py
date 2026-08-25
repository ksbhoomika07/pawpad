import subprocess, time, json, urllib.request, asyncio
import websockets

async def check_form():
    proc = subprocess.Popen([
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new',
        '--remote-debugging-port=9222',
        '--disable-gpu',
        '--user-data-dir=C:/Users/Ranjana/AppData/Local/Temp/chrome_test_profile4',
        'http://localhost:8085/course_forms/pawpad-application-pcgec.html'
    ])
    time.sleep(2)
    try:
        tabs_raw = urllib.request.urlopen('http://127.0.0.1:9222/json').read().decode('utf-8')
        tabs = json.loads(tabs_raw)
        tab = None
        for t in tabs:
            if 'pawpad-application-pcgec.html' in t.get('url', ''):
                tab = t
                break
        if not tab:
            print('Could not find tab')
            return
        
        ws_url = tab['webSocketDebuggerUrl']
        async with websockets.connect(ws_url) as ws:
            await ws.send(json.dumps({'id': 1, 'method': 'Runtime.enable'}))
            await ws.send(json.dumps({
                'id': 2,
                'method': 'Runtime.evaluate',
                'params': {'expression': 'Boolean(document.querySelector(".cursor-dot")) + " dot bg: " + window.getComputedStyle(document.querySelector(".cursor-dot")).backgroundColor + " body cursor: " + window.getComputedStyle(document.body).cursor'}
            }))
            
            start = time.time()
            while time.time() - start < 3:
                try:
                    msg = await asyncio.wait_for(ws.recv(), timeout=1.0)
                    data = json.loads(msg)
                    if data.get('id') == 2:
                        res = data.get('result', {}).get('result', {}).get('value', '')
                        print('EVAL RESULT:', res)
                        break
                except asyncio.TimeoutError:
                    break
    finally:
        proc.terminate()

asyncio.run(check_form())
