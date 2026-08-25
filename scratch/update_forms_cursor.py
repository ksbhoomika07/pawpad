import glob

cursor_css = """
  @media (pointer: fine) {
    body, a, button, input, select, textarea, label, [role="button"], .nav-link, .m-link, .nav-cart-btn, .hamburger, .back-link, .cta {
      cursor: none !important;
    }
  }
"""

for path in glob.glob('course_forms/*.html'):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    modified = False
    if '--driftwood:' not in content:
        content = content.replace(
            '--gold:#B08D4E;',
            '--gold:#B08D4E;--driftwood:#b18d4e;'
        )
        modified = True

    if 'cursor: none' not in content:
        content = content.replace(
            '</style>',
            cursor_css + '\n</style>'
        )
        modified = True

    if '<script src="../assets/js/cursor.js"></script>' not in content:
        content = content.replace(
            '</body>',
            '  <script src="../assets/js/cursor.js"></script>\n</body>'
        )
        modified = True

    if modified:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print('Updated form styles:', path)
