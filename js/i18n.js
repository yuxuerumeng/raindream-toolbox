// ToolBox i18n engine v3
(function(){
  const dicts={{zh:{"site_title": "ToolBox — 免费在线工具", "site_desc": "图片压缩、二维码生成、JSON格式化、PDF合并等30+在线工具。浏览器本地处理，快速安全免费。", "nav_home": "首页", "hero_prefix": "工具", "hero_title": "即刻可用", "hero_sub": "15+ 在线工具，快速安全，免费下载。", "scroll_hint": "向下滚动", "cat_media": "媒体工具", "cat_image": "图片工具", "cat_doc": "文档工具", "cat_dev": "开发工具", "cat_util": "实用工具", "about_btn": "关于我", "tool_compress": "图片压缩", "tool_compress_desc": "实时调节压缩质量", "tool_convert": "格式转换", "tool_convert_desc": "PNG / JPEG / WebP 互转", "tool_qrcode": "二维码生成", "tool_qrcode_desc": "支持自定义 Logo", "tool_palette": "调色板", "tool_palette_desc": "提取图片配色方案", "tool_pdf": "PDF 合并", "tool_pdf_desc": "多文件排序一键合并", "tool_json": "JSON 格式化", "tool_json_desc": "美化 / 压缩 / 校验", "tool_markdown": "Markdown 预览", "tool_markdown_desc": "实时预览，可导出HTML", "tool_diff": "文本对比", "tool_diff_desc": "差异高亮对比", "tool_textcase": "大小写转换", "tool_textcase_desc": "大写、小写、驼峰等", "tool_base64": "Base64 编解码", "tool_base64_desc": "文本图片编码解码", "tool_urlencode": "URL 编解码", "tool_urlencode_desc": "URL编码与解码", "tool_uuid": "UUID 生成器", "tool_uuid_desc": "批量生成UUID", "tool_timestamp": "时间戳转换", "tool_timestamp_desc": "Unix与日期互转", "tool_color": "颜色转换", "tool_color_desc": "HEX / RGB / HSL", "tool_password": "密码生成器", "tool_password_desc": "随机强密码", "tool_ytthumb_title": "YouTube 视频下载", "tool_ytthumb_desc_full": "粘贴链接即可播放和下载。", "tool_bili_title": "B站视频下载", "tool_bili_desc_full": "粘贴B站链接即可播放和下载。", "tool_wordcount_title": "字数统计", "tool_wordcount_desc_full": "粘贴文本，实时统计字数、字符数、行数。", "tool_css_title": "CSS 压缩", "tool_css_desc_full": "粘贴 CSS 代码，一键压缩或美化。", "tool_hash_title": "哈希生成", "tool_hash_desc_full": "输入文本，生成 MD5 / SHA 哈希值。", "tool_resize_title": "图片缩放", "tool_resize_desc_full": "上传图片，按比例或指定尺寸缩放。", "tool_regex_title": "正则测试", "tool_regex_desc_full": "输入正则表达式和测试文本，实时高亮匹配。", "ad_placeholder": "[ 广告位 — AdSense ]", "footer_privacy": "所有工具均为浏览器本地处理，文件不会上传至任何服务器。", "back_home": "返回首页", "lang_label": "EN", "upload_drop": "拖拽图片到此处", "upload_or": "或", "select_file": "选择文件", "quality_label": "压缩质量", "target_format": "目标格式"},"en":{"site_title": "ToolBox — Free Online Tools", "site_desc": "Image compression, QR code, JSON formatter, PDF merger and 30+ free tools. Processed locally in browser.", "nav_home": "Home", "hero_prefix": "Tools", "hero_title": "Ready to Use", "hero_sub": "15+ online tools, fast, safe, free download.", "scroll_hint": "Scroll Down", "cat_media": "Media", "cat_image": "Image", "cat_doc": "Document", "cat_dev": "Developer", "cat_util": "Utility", "about_btn": "About Me", "tool_compress": "Image Compress", "tool_compress_desc": "Adjust quality in real-time", "tool_convert": "Format Convert", "tool_convert_desc": "PNG / JPEG / WebP", "tool_qrcode": "QR Code Generator", "tool_qrcode_desc": "Custom logo support", "tool_palette": "Color Palette", "tool_palette_desc": "Extract color schemes", "tool_pdf": "PDF Merger", "tool_pdf_desc": "Sort and merge PDFs", "tool_json": "JSON Formatter", "tool_json_desc": "Beautify / Minify / Validate", "tool_markdown": "Markdown Preview", "tool_markdown_desc": "Live preview, export HTML", "tool_diff": "Text Diff", "tool_diff_desc": "Highlight differences", "tool_textcase": "Text Case", "tool_textcase_desc": "UPPER, lower, camelCase", "tool_base64": "Base64 Encode/Decode", "tool_base64_desc": "Text and image conversion", "tool_urlencode": "URL Encode/Decode", "tool_urlencode_desc": "URL encoding and decoding", "tool_uuid": "UUID Generator", "tool_uuid_desc": "Batch UUID generation", "tool_timestamp": "Timestamp Convert", "tool_timestamp_desc": "Unix to date conversion", "tool_color": "Color Convert", "tool_color_desc": "HEX / RGB / HSL", "tool_password": "Password Generator", "tool_password_desc": "Strong random passwords", "tool_ytthumb_title": "YouTube Download", "tool_ytthumb_desc_full": "Paste link to play and download.", "tool_bili_title": "Bilibili Download", "tool_bili_desc_full": "Paste Bilibili link to play and download.", "tool_wordcount_title": "Word Counter", "tool_wordcount_desc_full": "Paste text to count words, chars, lines.", "tool_css_title": "CSS Minifier", "tool_css_desc_full": "Paste CSS to minify or beautify.", "tool_hash_title": "Hash Generator", "tool_hash_desc_full": "Generate MD5 / SHA hash from text.", "tool_resize_title": "Image Resize", "tool_resize_desc_full": "Resize image by percentage or dimensions.", "tool_regex_title": "Regex Tester", "tool_regex_desc_full": "Test regex patterns with live highlighting.", "ad_placeholder": "[ Ad Slot — AdSense ]", "footer_privacy": "All tools process files locally in browser. Nothing is uploaded.", "back_home": "Back", "lang_label": "中", "upload_drop": "Drop image here", "upload_or": "or", "select_file": "Select File", "quality_label": "Quality", "target_format": "Target Format"}}};
  let current='zh';
  function detectLang(){
    const s=localStorage.getItem('lang');
    if(s==='zh'||s==='en')return s;
    const n=(navigator.language||'').toLowerCase();
    return n.startsWith('zh')?'zh':'en';
  }
  function applyLang(lang){
    current=lang;localStorage.setItem('lang',lang);
    document.documentElement.lang=lang==='zh'?'zh-CN':'en';
    const d=dicts[lang];
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      if(d[el.dataset.i18n])el.textContent=d[el.dataset.i18n];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      if(d[el.dataset.i18nPlaceholder])el.placeholder=d[el.dataset.i18nPlaceholder];
    });
    const m=document.querySelector('meta[name="description"]');
    if(m&&d.site_desc)m.content=d.site_desc;
    updateBtns();
  }
  function updateBtns(){
    document.querySelectorAll('.lang-switch').forEach(el=>{
      el.dataset.lang=current==='zh'?'en':'zh';
      el.textContent=dicts[current].lang_label;
    });
  }
  function insertSwitcher(target){
    const btn=document.createElement('button');
    btn.className='lang-switch';
    btn.textContent=dicts[current].lang_label;
    btn.onclick=function(e){e.preventDefault();applyLang(current==='zh'?'en':'zh')};
    btn.style.cssText='background:none;border:1px solid var(--border3);color:var(--text3);padding:.2rem .65rem;border-radius:10px;font-size:.7rem;cursor:pointer;font-family:inherit;transition:all .3s';
    target.appendChild(btn);
  }
  applyLang(detectLang());
  window.addEventListener('DOMContentLoaded',()=>{
    const nav=document.querySelector('.nav');if(!nav)return;
    let mr=nav.querySelector('.mobile-nav-right');
    if(!mr){mr=document.createElement('div');mr.className='mobile-nav-right';nav.appendChild(mr)}
    insertSwitcher(mr);
  });
  window.i18n={toggle:function(){applyLang(current==='zh'?'en':'zh')},current:function(){return current}};
})();
