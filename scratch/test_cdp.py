import subprocess, time, json, urllib.request, asyncio

# Let's inspect using simple CDP over websocket
async def test():
    proc = subprocess.Popen([
        r'C:\Program Files\Google\Chrome\Application\chrome.exe',
        '--headless=new',
        '--remote-debugging-port=9222',
        '--disable-gpu',
        '--user-data-dir=C:/Users/Ranjana/AppData/Local/Temp/chrome_test_profile',
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
        print('Found contact tab:', contact_tab)
        if contact_tab:
            import urllib.request
            ws_url = contact_tab['webSocketDebuggerUrl']
            print('WS URL:', ws_url)
    finally:
        proc.terminate()

asyncio.run(test())
