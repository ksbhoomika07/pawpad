import urllib.request
import re
import json
import os

url = 'https://sntharun.github.io/PawPad-New/assets/js/pages/services-pages.js'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    content = resp.read().decode('utf-8')

with open('scratch/remote-services-pages.js', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Downloaded services-pages.js ({len(content)} chars)")

# Find all image paths
imgs = set(re.findall(r'assets/img/[^"\'\s)]+', content))
print("Images referenced:")
for img in sorted(imgs):
    print(" -", img)
    # Download missing images
    local_path = img.replace('/', os.sep)
    if not os.path.exists(local_path):
        img_url = f"https://sntharun.github.io/PawPad-New/{img}"
        print(f"   -> Downloading missing {img_url} to {local_path}")
        os.makedirs(os.path.dirname(local_path), exist_ok=True)
        try:
            req_img = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req_img) as resp_img, open(local_path, 'wb') as out_f:
                out_f.write(resp_img.read())
            print("   -> Success!")
        except Exception as e:
            print(f"   -> Error downloading {img_url}: {e}")
