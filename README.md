# ToolBox

A collection of 15 free online tools, all processed locally in your browser. Zero uploads, zero installations.

**Live:** [raindream.top](https://raindream.top)

---

## Features

- **100% Local Processing** — Files never leave your browser
- **Dark/Light Theme** — Auto-detects system preference, with manual toggle
- **Chinese/English i18n** — Auto-detects browser language, with manual switch
- **Mobile Responsive** — Optimized for phones, tablets, and desktops
- **Zero Dependencies** — Pure HTML/CSS/JS, no build step required

---

## Tools

### Image Tools
| Tool | Description |
|------|-------------|
| Image Compress | Adjust quality in real-time with instant preview |
| Format Convert | PNG / JPEG / WebP conversion |
| QR Code Generator | Generate QR codes with custom logo support |
| Color Palette | Extract color schemes from uploaded images |
| Color Convert | HEX / RGB / HSL format conversion |

### Document Tools
| Tool | Description |
|------|-------------|
| PDF Merger | Drag, sort, and merge multiple PDFs |
| JSON Formatter | Beautify, minify, and validate JSON |
| Markdown Preview | Live preview with HTML export |
| Text Diff | Highlight differences between two texts |
| Text Case | UPPER, lower, Title, camelCase, snake_case |

### Developer Tools
| Tool | Description |
|------|-------------|
| Base64 Encode/Decode | Text and image Base64 conversion |
| URL Encode/Decode | URL encoding and decoding |
| UUID Generator | Generate UUID v4 in batch |
| Timestamp Convert | Unix timestamp and date conversion |
| Password Generator | Strong random passwords, customizable |

---

## Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Custom properties, animations, responsive grid
- **Vanilla JavaScript** — i18n engine, theme system, carousel
- **CDN Libraries** — pdf-lib, qrcode (for PDF merge & QR generation)

---

## Deployment

This is a static site. Deploy anywhere:

| Platform | Command |
|----------|---------|
| Vercel | Import Git repo, done |
| Cloudflare Pages | Connect Git repo, done |
| GitHub Pages | Push to `main`, enable in Settings |
| Any static host | Upload all files to web root |

---

## Project Structure

```
tools-site/
├── index.html           # Landing page with tool categories
├── css/style.css        # Shared styles + theme system
├── js/
│   ├── i18n.js          # Translation engine (zh/en)
│   └── theme.js         # Dark/light theme switcher
├── lang/                # Language JSON files
├── tools/               # 15 individual tool pages
├── ads.txt              # AdSense verification
├── robots.txt           # SEO
├── sitemap.xml          # Search engine sitemap
└── favicon.svg          # Browser tab icon
```

---

## License

MIT — feel free to use, modify, and deploy your own instance.

---

Made by [雨梦 RainDream](https://i.raindream.top)
