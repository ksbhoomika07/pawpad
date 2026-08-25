import glob, re

for path in glob.glob('course_forms/*.html'):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    modified = False
    # Check desktop link
    if '<a href="../myotherapy.html" class="nav-link">Myotherapy</a>' in content and '<a href="../contact.html" class="nav-link">Contact</a>' not in content:
        content = content.replace(
            '<a href="../myotherapy.html" class="nav-link">Myotherapy</a>',
            '<a href="../myotherapy.html" class="nav-link">Myotherapy</a>\n      <a href="../contact.html" class="nav-link">Contact</a>'
        )
        modified = True

    # Check mobile link with &rarr; or svg
    if '<a href="../myotherapy.html" class="m-link"><span>Myotherapy</span><span>&rarr;</span></a>' in content and 'href="../contact.html" class="m-link"' not in content:
        content = content.replace(
            '<a href="../myotherapy.html" class="m-link"><span>Myotherapy</span><span>&rarr;</span></a>',
            '<a href="../myotherapy.html" class="m-link"><span>Myotherapy</span><span>&rarr;</span></a>\n      <a href="../contact.html" class="m-link"><span>Contact</span><span>&rarr;</span></a>'
        )
        modified = True
    elif '<a href="../myotherapy.html" class="m-link"><span>Myotherapy</span><svg' in content and 'href="../contact.html" class="m-link"' not in content:
        svg_match = re.search(r'(<a href="\.\./myotherapy\.html" class="m-link"><span>Myotherapy</span>(<svg.*?</svg>)</a>)', content, re.DOTALL)
        if svg_match:
            orig = svg_match.group(1)
            svg = svg_match.group(2)
            repl = orig + '\n      <a href="../contact.html" class="m-link"><span>Contact</span>' + svg + '</a>'
            content = content.replace(orig, repl)
            modified = True

    if modified:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print('Updated:', path)
