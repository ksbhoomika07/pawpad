with open('scratch/boarding_page_extracted.js', 'r', encoding='utf-8') as f:
    boarding_code = f.read()

with open('assets/js/pages/services-pages.js', 'r', encoding='utf-8') as f:
    orig = f.read()

start = orig.find('function BoardingPage')
end = orig.find('function MyotherapyPage')

if start != -1 and end != -1:
    new_content = orig[:start] + boarding_code + '\n' + orig[end:]
    with open('assets/js/pages/services-pages.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('Updated assets/js/pages/services-pages.js successfully')
else:
    print(f'Error: start={start}, end={end}')
