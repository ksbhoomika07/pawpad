import subprocess, time, json, urllib.request, asyncio, base64
import websockets

async def capture_form_screenshot():
    proc = subprocess.Popen([
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new',
        '--remote-debugging-port=9222',
        '--window-size=1440,1200',
        '--disable-gpu',
        '--user-data-dir=C:/Users/Ranjana/AppData/Local/Temp/chrome_test_profile5',
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
            return
        
        ws_url = tab['webSocketDebuggerUrl']
        async with websockets.connect(ws_url) as ws:
            await ws.send(json.dumps({'id': 1, 'method': 'Page.enable'}))
            await ws.send(json.dumps({'id': 2, 'method': 'Input.dispatchMouseEvent', 'params': {'type': 'mouseMoved', 'x': 520, 'y': 380}}))
            await asyncio.sleep(1)
            await ws.send(json.dumps({'id': 3, 'method': 'Page.captureScreenshot', 'params': {'format': 'png'}}))
            
            while True:
                msg = await ws.recv()
                data = json.loads(msg)
                if data.get('id') == 3:
                    img_b64 = data['result']['data']
                    with open(r'c:\RIED Internship\Paw Pad Website\scratch\form_cursor_screenshot.png', 'wb') as f:
                        f.write(base64.b64decode(img_b64))
                    print('Form screenshot saved!')
                    break
    finally:
        proc.terminate()

asyncio.run(capture_form_screenshot())
