import urllib.request

for fname in ['assets/js/shared.js', 'assets/js/pages/home.js']:
    url = f'https://sntharun.github.io/PawPad-New/{fname}'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as resp:
        content = resp.read().decode('utf-8')
    save_name = fname.replace('/', '_')
    with open(f'scratch/remote_{save_name}', 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Fetched {fname} ({len(content)} bytes)')
