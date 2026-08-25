with open('scratch/remote-services-pages.js', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('function BoardingPage')
end = text.find('function MyotherapyPage')
if end == -1: end = len(text)

boarding_code = text[start:end]

with open('scratch/boarding_page_extracted.js', 'w', encoding='utf-8') as f:
    f.write(boarding_code)

print("Saved boarding_page_extracted.js")
