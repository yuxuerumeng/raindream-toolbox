// i18n - embedded translations, auto-detect system language
(function(){
  const dicts={
    zh:{
      site_title:"ToolBox — 免费在线工具，所有处理本地完成",
      site_desc:"图片压缩、二维码生成、JSON格式化、PDF合并等15+在线工具。浏览器本地处理，快速安全免费。",
      nav_home:"首页",hero_title:"即刻可用",hero_sub:"15+ 在线工具，全部浏览器本地处理，快速安全免费。",
      scroll_hint:"向下滚动",cat_image:"图片工具",cat_doc:"文档工具",cat_dev:"开发工具",
      tool_compress:"图片压缩",tool_compress_desc:"拖动滑块实时调节质量，即时预览压缩效果",
      tool_convert:"格式转换",tool_convert_desc:"PNG / JPEG / WebP 任意互转",
      tool_qrcode:"二维码生成",tool_qrcode_desc:"输入内容一键生成，支持自定义Logo",
      tool_palette:"调色板",tool_palette_desc:"上传图片智能提取配色方案",
      tool_pdf:"PDF 合并",tool_pdf_desc:"多文件拖拽排序，一键合并下载",
      tool_json:"JSON 格式化",tool_json_desc:"压缩或美化JSON，自动校验语法",
      tool_markdown:"Markdown 预览",tool_markdown_desc:"实时预览，支持导出HTML",
      tool_diff:"文本对比",tool_diff_desc:"两段文本差异高亮对比",
      tool_textcase:"大小写转换",tool_textcase_desc:"大写、小写、首字母大写、驼峰等",
      tool_base64:"Base64 编解码",tool_base64_desc:"文本/图片 Base64 编码与解码",
      tool_urlencode:"URL 编解码",tool_urlencode_desc:"URL编码与解码，一键复制",
      tool_uuid:"UUID 生成器",tool_uuid_desc:"生成UUID v4，支持批量生成",
      tool_timestamp:"时间戳转换",tool_timestamp_desc:"Unix时间戳与日期双向转换",
      tool_color:"颜色转换",tool_color_desc:"HEX / RGB / HSL 互转",
      tool_password:"密码生成器",tool_password_desc:"随机强密码，自定义长度",
      ad_placeholder:"[ 广告位 — 部署后替换为 AdSense 代码 ]",
      footer_privacy:"所有工具均为浏览器本地处理，文件不会上传至任何服务器。",
      footer_copy:"© 2026 ToolBox — tb.raindream.top",
      back_home:"返回首页",lang_label:"EN"
    },
    en:{
      site_title:"ToolBox — Free Online Tools",
      site_desc:"Image compression, QR code, JSON formatter, PDF merger and 15+ free tools. Processed locally in browser.",
      nav_home:"Home",hero_title:"Ready to Use",hero_sub:"15+ online tools, all processed locally. Fast, secure, free.",
      scroll_hint:"Scroll Down",cat_image:"Image Tools",cat_doc:"Document Tools",cat_dev:"Developer Tools",
      tool_compress:"Image Compress",tool_compress_desc:"Adjust quality in real-time",
      tool_convert:"Format Convert",tool_convert_desc:"PNG / JPEG / WebP conversion",
      tool_qrcode:"QR Code Generator",tool_qrcode_desc:"Custom logo support",
      tool_palette:"Color Palette",tool_palette_desc:"Extract color schemes from images",
      tool_pdf:"PDF Merger",tool_pdf_desc:"Drag, sort, and merge PDFs",
      tool_json:"JSON Formatter",tool_json_desc:"Beautify, minify, and validate",
      tool_markdown:"Markdown Preview",tool_markdown_desc:"Live preview with HTML export",
      tool_diff:"Text Diff",tool_diff_desc:"Highlight differences between texts",
      tool_textcase:"Text Case",tool_textcase_desc:"UPPER, lower, Title, camelCase",
      tool_base64:"Base64 Encode/Decode",tool_base64_desc:"Text and image conversion",
      tool_urlencode:"URL Encode/Decode",tool_urlencode_desc:"URL encoding and decoding",
      tool_uuid:"UUID Generator",tool_uuid_desc:"Generate UUID v4, batch supported",
      tool_timestamp:"Timestamp Convert",tool_timestamp_desc:"Unix timestamp and date conversion",
      tool_color:"Color Convert",tool_color_desc:"HEX / RGB / HSL conversion",
      tool_password:"Password Generator",tool_password_desc:"Strong random passwords",
      ad_placeholder:"[ Ad Slot — Replace with AdSense code ]",
      footer_privacy:"All tools process files locally. Nothing is uploaded.",
      footer_copy:"© 2026 ToolBox — tb.raindream.top",
      back_home:"Back to Home",lang_label:"中"
    }
  };

  const supported=['zh','en'];
  let current='zh';

  function detectLang(){
    const stored=localStorage.getItem('lang');
    if(stored&&supported.includes(stored))return stored;
    const nav=(navigator.language||navigator.userLanguage||'').toLowerCase();
    if(nav.startsWith('zh'))return'zh';
    if(nav.startsWith('en'))return'en';
    return'zh';
  }

  function applyLang(lang){
    current=lang;
    localStorage.setItem('lang',lang);
    document.documentElement.lang=lang==='zh'?'zh-CN':'en';
    const d=dicts[lang];
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      if(d[el.dataset.i18n])el.textContent=d[el.dataset.i18n];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      if(d[el.dataset.i18nPlaceholder])el.placeholder=d[el.dataset.i18nPlaceholder];
    });
    // Update desc meta
    const meta=document.querySelector('meta[name="description"]');
    if(meta&&d.site_desc)meta.content=d.site_desc;
    updateSwitchers();
  }

  function updateSwitchers(){
    document.querySelectorAll('.lang-switch').forEach(el=>{
      el.classList.toggle('active',el.dataset.lang===current);
    });
  }

  function insertSwitcher(target){
    const next=current==='zh'?'en':'zh';
    const btn=document.createElement('button');
    btn.className='lang-switch';btn.dataset.lang=next;
    btn.textContent=dicts[current].lang_label||(current==='zh'?'EN':'中');
    btn.onclick=function(e){e.preventDefault();applyLang(next);insertOrUpdateSwitchers()};
    btn.style.cssText='background:none;border:1px solid rgba(255,255,255,.15);color:rgba(255,255,255,.5);padding:.2rem .65rem;border-radius:10px;font-size:.7rem;cursor:pointer;font-family:inherit;transition:all .2s';
    target.appendChild(btn);
    updateSwitchers();
  }

  function insertOrUpdateSwitchers(){
    document.querySelectorAll('.lang-switch').forEach(el=>el.parentElement?.removeChild(el));
    const navLinks=document.querySelector('.nav-links');
    if(navLinks){
      const li=document.createElement('li');insertSwitcher(li);navLinks.appendChild(li);
    }else{
      const nav=document.querySelector('.nav');
      if(nav){const wrap=document.createElement('div');insertSwitcher(wrap);nav.appendChild(wrap)}
    }
  }

  // Init
  applyLang(detectLang());
  window.addEventListener('DOMContentLoaded',insertOrUpdateSwitchers);
  window.i18n={toggle:()=>{applyLang(current==='zh'?'en':'zh');insertOrUpdateSwitchers()},current:()=>current};
})();
