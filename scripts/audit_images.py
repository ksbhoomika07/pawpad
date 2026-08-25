import os
import re
from PIL import Image

workspace = r'c:\RIED Internship\Paw Pad Website'
all_files = []
for root, dirs, files in os.walk(workspace):
    if any(x in root for x in ['.git', 'dist', 'node_modules', 'unreferenced']):
        continue
    for f in files:
        if f.endswith(('.html', '.js', '.css', '.mjs', '.json', '.jsx')):
            all_files.append(os.path.join(root, f))

image_refs = set()
for fpath in all_files:
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
        # Find all matches for assets/img/...
        matches = re.findall(r'assets/img/[a-zA-Z0-9_\-\./]+\.(?:png|jpg|jpeg|webp|ico|svg)', content, re.IGNORECASE)
        for m in matches:
            image_refs.add(m)

print(f"--- REFERENCED IMAGES ({len(image_refs)}) ---")
for r in sorted(image_refs):
    print(r)

all_images = []
img_dir = os.path.join(workspace, 'assets', 'img')
for root, dirs, files in os.walk(img_dir):
    if 'unreferenced' in root:
        continue
    for f in files:
        rel = os.path.relpath(os.path.join(root, f), workspace).replace('\\', '/')
        all_images.append(rel)

print(f"\n--- TOTAL IMAGES ON DISK: {len(all_images)} ---")
unref = []
used = []
for img in sorted(all_images):
    if img in image_refs:
        used.append(img)
    else:
        unref.append(img)

print(f"\n--- USED IMAGES ({len(used)}) ---")
for u in used:
    print("  " + u)

print(f"\n--- UNUSED IMAGES ({len(unref)}) ---")
for ur in unref:
    print("  " + ur)
