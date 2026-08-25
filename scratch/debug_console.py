import subprocess, time, json, urllib.request, asyncio
import websockets

async def check_page():
    proc = subprocess.Popen([
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new',
        '--remote-debugging-port=9222',
        '--disable-gpu',
        '--user-data-dir=C:/Users/Ranjana/AppData/Local/Temp/chrome_test_profile2',
        'http://localhost:8085/contact.html'
    ])
    time.sleep(2)
    try:
        tabs_raw = urllib.request.urlopen('http://127.0.0.1:9222/json').read().decode('utf-8')
        tabs = json.loads(tabs_raw)
        contact_tab = None
        for t in tabs:
            if 'contact.html' in t.get('url', ''):
                contact_tab = t
                break
        if not contact_tab:
            print('Could not find contact tab')
            return
        
        ws_url = contact_tab['webSocketDebuggerUrl']
        async with websockets.connect(ws_url) as ws:
            # Enable Runtime and Log
            await ws.send(json.dumps({'id': 1, 'method': 'Runtime.enable'}))
            await ws.send(json.dumps({'id': 2, 'method': 'Log.enable'}))
            
            # Evaluate document.body.innerHTML
            await ws.send(json.dumps({
                'id': 3,
                'method': 'Runtime.evaluate',
                'params': {'expression': 'document.getElementById("app").innerHTML'}
            }))
            
            start = time.time()
            while time.time() - start < 3:
                try:
                    msg = await asyncio.wait_for(ws.recv(), timeout=1.0)
                    data = json.loads(msg)
                    if data.get('method') == 'Runtime.consoleAPICalled':
                        print('CONSOLE:', data['params']['type'], data['params']['args'])
                    elif data.get('method') == 'Runtime.exceptionThrown':
                        print('EXCEPTION:', data['params']['exceptionDetails'])
                    elif data.get('id') == 3:
                        res = data.get('result', {}).get('result', {}).get('value', '')
                        print('APP INNER HTML (length %d):' % len(res), res[:200])
                except asyncio.TimeoutError:
                    break
    finally:
        proc.terminate()

asyncio.run(check_page())
