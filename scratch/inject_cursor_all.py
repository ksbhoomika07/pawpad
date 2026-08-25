import glob, re

# 1. Update root html files
root_htmls = [
    'index.html', 'about.html', 'experience.html', 'grooming.html',
    'courses.html', 'boarding.html', 'myotherapy.html', 'contact.html', 'policies.html'
]

for path in root_htmls:
    try:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if 'assets/js/cursor.js' not in content:
            if 'assets/js/page-shell.js' in content:
                content = content.replace(
                    '<script src="assets/js/page-shell.js"></script>',
                    '<script src="assets/js/cursor.js"></script>\n  <script src="assets/js/page-shell.js"></script>'
                )
            elif '</body>' in content:
                content = content.replace(
                    '</body>',
                    '  <script src="assets/js/cursor.js"></script>\n</body>'
                )
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)
            print('Updated root html:', path)
    except Exception as e:
        print('Error updating', path, e)

# 2. Update course_forms/*.html
for path in glob.glob('course_forms/*.html'):
    try:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if 'assets/js/cursor.js' not in content:
            if '</body>' in content:
                content = content.replace(
                    '</body>',
                    '  <script src="../assets/js/cursor.js"></script>\n</body>'
                )
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)
            print('Updated course form:', path)
    except Exception as e:
        print('Error updating', path, e)
