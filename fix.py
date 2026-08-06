path = r"C:\Users\zxcv7\OneDrive\文档\ChatGPT\codex变现\tools-site\index.html"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

old = '\n开发工具</div>\n  <div class="tool-grid">\n'
new = '\n<div class="section" style="padding-top:2rem">\n  <div class="section-label" data-i18n="cat_dev">开发工具</div>\n  <div class="tool-grid">\n'

if old in content:
    content = content.replace(old, new)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("FIXED")
else:
    print("NOT FOUND, checking context...")
    idx = content.find("开发工具</div>")
    if idx >= 0:
        print(repr(content[idx-20:idx+80]))
