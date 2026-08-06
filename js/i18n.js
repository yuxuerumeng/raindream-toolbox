// i18n - embedded translations, auto-detect system language
(function(){
  const dicts={
    zh:{site_title:"ToolBox \u2014 \u514d\u8d39\u5728\u7ebf\u5de5\u5177\uff0c\u6240\u6709\u5904\u7406\u672c\u5730\u5b8c\u6210",site_desc:"\u56fe\u7247\u538b\u7f29\u3001\u4e8c\u7ef4\u7801\u751f\u6210\u3001JSON\u683c\u5f0f\u5316\u3001PDF\u5408\u5e76\u7b4915+\u5728\u7ebf\u5de5\u5177\u3002\u6d4f\u89c8\u5668\u672c\u5730\u5904\u7406\uff0c\u5feb\u901f\u5b89\u5168\u514d\u8d39\u3002",nav_home:"\u9996\u9875",hero_title:"\u5373\u523b\u53ef\u7528",hero_sub:"15+ \u5728\u7ebf\u5de5\u5177\uff0c\u5168\u90e8\u6d4f\u89c8\u5668\u672c\u5730\u5904\u7406\uff0c\u5feb\u901f\u5b89\u5168\u514d\u8d39\u3002",scroll_hint:"\u5411\u4e0b\u6eda\u52a8",cat_image:"\u56fe\u7247\u5de5\u5177",cat_doc:"\u6587\u6863\u5de5\u5177",cat_dev:"\u5f00\u53d1\u5de5\u5177",tool_compress:"\u56fe\u7247\u538b\u7f29",tool_compress_desc:"\u62d6\u52a8\u6ed1\u5757\u5b9e\u65f6\u8c03\u8282\u8d28\u91cf\uff0c\u5373\u65f6\u9884\u89c8\u538b\u7f29\u6548\u679c",tool_convert:"\u683c\u5f0f\u8f6c\u6362",tool_convert_desc:"PNG / JPEG / WebP \u4efb\u610f\u4e92\u8f6c",tool_qrcode:"\u4e8c\u7ef4\u7801\u751f\u6210",tool_qrcode_desc:"\u8f93\u5165\u5185\u5bb9\u4e00\u952e\u751f\u6210\uff0c\u652f\u6301\u81ea\u5b9a\u4e49Logo",tool_palette:"\u8c03\u8272\u677f",tool_palette_desc:"\u4e0a\u4f20\u56fe\u7247\u667a\u80fd\u63d0\u53d6\u914d\u8272\u65b9\u6848",tool_pdf:"PDF \u5408\u5e76",tool_pdf_desc:"\u591a\u6587\u4ef6\u62d6\u62fd\u6392\u5e8f\uff0c\u4e00\u952e\u5408\u5e76\u4e0b\u8f7d",tool_json:"JSON \u683c\u5f0f\u5316",tool_json_desc:"\u538b\u7f29\u6216\u7f8e\u5316JSON\uff0c\u81ea\u52a8\u6821\u9a8c\u8bed\u6cd5",tool_markdown:"Markdown \u9884\u89c8",tool_markdown_desc:"\u5b9e\u65f6\u9884\u89c8\uff0c\u652f\u6301\u5bfc\u51faHTML",tool_diff:"\u6587\u672c\u5bf9\u6bd4",tool_diff_desc:"\u4e24\u6bb5\u6587\u672c\u5dee\u5f02\u9ad8\u4eae\u5bf9\u6bd4",tool_textcase:"\u5927\u5c0f\u5199\u8f6c\u6362",tool_textcase_desc:"\u5927\u5199\u3001\u5c0f\u5199\u3001\u9996\u5b57\u6bcd\u5927\u5199\u3001\u9a7c\u5cf0\u7b49",tool_base64:"Base64 \u7f16\u89e3\u7801",tool_base64_desc:"\u6587\u672c/\u56fe\u7247 Base64 \u7f16\u7801\u4e0e\u89e3\u7801",tool_urlencode:"URL \u7f16\u89e3\u7801",tool_urlencode_desc:"URL\u7f16\u7801\u4e0e\u89e3\u7801\uff0c\u4e00\u952e\u590d\u5236",tool_uuid:"UUID \u751f\u6210\u5668",tool_uuid_desc:"\u751f\u6210UUID v4\uff0c\u652f\u6301\u6279\u91cf\u751f\u6210",tool_timestamp:"\u65f6\u95f4\u6233\u8f6c\u6362",tool_timestamp_desc:"Unix\u65f6\u95f4\u6233\u4e0e\u65e5\u671f\u53cc\u5411\u8f6c\u6362",tool_color:"\u989c\u8272\u8f6c\u6362",tool_color_desc:"HEX / RGB / HSL \u4e92\u8f6c",tool_password:"\u5bc6\u7801\u751f\u6210\u5668",tool_password_desc:"\u968f\u673a\u5f3a\u5bc6\u7801\uff0c\u81ea\u5b9a\u4e49\u957f\u5ea6",ad_placeholder:"[ \u5e7f\u544a\u4f4d \u2014 \u90e8\u7f72\u540e\u66ff\u6362\u4e3a AdSense \u4ee3\u7801 ]",footer_privacy:"\u6240\u6709\u5de5\u5177\u5747\u4e3a\u6d4f\u89c8\u5668\u672c\u5730\u5904\u7406\uff0c\u6587\u4ef6\u4e0d\u4f1a\u4e0a\u4f20\u81f3\u4efb\u4f55\u670d\u52a1\u5668\u3002",footer_copy:"\u00a9 2026 ToolBox \u2014 raindream.top",back_home:"\u8fd4\u56de\u9996\u9875",lang_label:"EN"},
    en:{site_title:"ToolBox \u2014 Free Online Tools",site_desc:"Image compression, QR code, JSON formatter, PDF merger and 15+ free tools.",nav_home:"Home",hero_prefix:"Tools",hero_title:"Ready to Use",hero_sub:"15+ online tools, all processed locally. Fast, secure, free.",scroll_hint:"Scroll Down",cat_image:"Image Tools",cat_doc:"Document Tools",cat_dev:"Developer Tools",tool_compress:"Image Compress",tool_compress_desc:"Adjust quality in real-time",tool_convert:"Format Convert",tool_convert_desc:"PNG / JPEG / WebP conversion",tool_qrcode:"QR Code Generator",tool_qrcode_desc:"Custom logo support",tool_palette:"Color Palette",tool_palette_desc:"Extract color schemes from images",tool_pdf:"PDF Merger",tool_pdf_desc:"Drag, sort, and merge PDFs",tool_json:"JSON Formatter",tool_json_desc:"Beautify, minify, and validate",tool_markdown:"Markdown Preview",tool_markdown_desc:"Live preview with HTML export",tool_diff:"Text Diff",tool_diff_desc:"Highlight differences between texts",tool_textcase:"Text Case",tool_textcase_desc:"UPPER, lower, Title, camelCase",tool_base64:"Base64 Encode/Decode",tool_base64_desc:"Text and image conversion",tool_urlencode:"URL Encode/Decode",tool_urlencode_desc:"URL encoding and decoding",tool_uuid:"UUID Generator",tool_uuid_desc:"Generate UUID v4, batch supported",tool_timestamp:"Timestamp Convert",tool_timestamp_desc:"Unix timestamp and date conversion",tool_color:"Color Convert",tool_color_desc:"HEX / RGB / HSL conversion",tool_password:"Password Generator",tool_password_desc:"Strong random passwords",ad_placeholder:"[ Ad Slot \u2014 Replace with AdSense code ]",footer_privacy:"All tools process files locally. Nothing is uploaded.",footer_copy:"\u00a9 2026 ToolBox \u2014 raindream.top",back_home:"Back to Home",lang_label:"\u4e2d"}
  };
  const supported=['zh','en'];let current='zh';
  function detectLang(){const s=localStorage.getItem('lang');if(s&&supported.includes(s))return s;const n=(navigator.language||navigator.userLanguage||'').toLowerCase();if(n.startsWith('zh'))return'zh';if(n.startsWith('en'))return'en';return'zh'}
  function applyLang(lang,b){
    current=lang;localStorage.setItem('lang',lang);document.documentElement.lang=lang==='zh'?'zh-CN':'en';
    const d=dicts[lang];document.querySelectorAll('[data-i18n]').forEach(e=>{if(d[e.dataset.i18n])e.textContent=d[e.dataset.i18n]});
    document.querySelectorAll('[data-i18n-placeholder]').forEach(e=>{if(d[e.dataset.i18nPlaceholder])e.placeholder=d[e.dataset.i18nPlaceholder]});
    const m=document.querySelector('meta[name="description"]');if(m&&d.site_desc)m.content=d.site_desc;
    updateBtns(b);
  }
  function updateBtns(b){
    const next=current==='zh'?'en':'zh';
    (b||document.querySelectorAll('.lang-switch')).forEach(el=>{el.dataset.lang=next;el.textContent=dicts[current].lang_label;el.classList.toggle('active',el.dataset.lang===current)});
  }
  function insertSwitcher(target){
    const next=current==='zh'?'en':'zh';const btn=document.createElement('button');
    btn.className='lang-switch';btn.dataset.lang=next;btn.textContent=dicts[current].lang_label;
    btn.onclick=function(e){e.preventDefault();const n=current==='zh'?'en':'zh';applyLang(n,[btn]);updateBtns([btn])};
    btn.style.cssText='background:none;border:1px solid var(--border3);color:var(--text3);padding:.2rem .65rem;border-radius:10px;font-size:.7rem;cursor:pointer;font-family:inherit;transition:all .3s';
    target.appendChild(btn);updateBtns([btn]);
  }
  applyLang(detectLang());
  window.addEventListener('DOMContentLoaded',()=>{
    const nav=document.querySelector('.nav');if(!nav)return;
    let mr=nav.querySelector('.mobile-nav-right');
    if(!mr){mr=document.createElement('div');mr.className='mobile-nav-right';nav.appendChild(mr)}
    insertSwitcher(mr);
  });
  

  window.i18n={toggle:function(){const next=current==='zh'?'en':'zh';applyLang(next);updateBtns()},current:function(){return current}};
})();
