import os
import re

root_dir = '.'
code_extensions = ('.html', '.js', '.jsx', '.css', '.json', '.mjs')
image_extensions = ('.png', '.jpg', '.jpeg', '.webp', '.svg', '.ico')

all_images = set()
for r, d, files in os.walk('assets/img'):
    for f in files:
        if f.lower().endswith(image_extensions):
            rel_path = os.path.relpath(os.path.join(r, f), root_dir).replace('\\', '/')
            all_images.add(rel_path)

if os.path.exists('favicon.ico'): all_images.add('favicon.ico')
if os.path.exists('favicon.png'): all_images.add('favicon.png')

print(f"Total image files on disk: {len(all_images)}")

# Scan code files for references
code_files = []
code_content = ''
for r, d, files in os.walk(root_dir):
    if 'scratch' in r or '.git' in r or 'node_modules' in r or 'scripts' in r:
        continue
    for f in files:
        if f.lower().endswith(code_extensions):
            p = os.path.join(r, f)
            code_files.append(p)
            with open(p, 'r', encoding='utf-8', errors='ignore') as cf:
                code_content += '\n' + cf.read()

print(f"Scanned {len(code_files)} source files.")

referenced_images = set()
for img in all_images:
    basename = os.path.basename(img)
    # Match either the full relative path or filename without extension
    if img in code_content or basename in code_content:
        referenced_images.add(img)

unused = all_images - referenced_images

print(f"\n--- REFERENCED IMAGES ({len(referenced_images)}) ---")
for img in sorted(referenced_images):
    print(f"  [USED] {img}")

print(f"\n--- UNUSED IMAGES ({len(unused)}) ---")
for img in sorted(unused):
    print(f"  [UNUSED] {img}")
