// i18n - lightweight translation engine
(function(){
  const supported=['zh','en'];
  let current='zh';
  let dict={};

  function detectLang(){
    const stored=localStorage.getItem('lang');
    if(stored&&supported.includes(stored))return stored;
    const nav=(navigator.language||'').split('-')[0];
    return supported.includes(nav)?nav:'zh';
  }

  async function loadLang(lang){
    current=lang;
    localStorage.setItem('lang',lang);
    document.documentElement.lang=lang;
    try{
      const base=location.pathname.includes('/tools/')?'..':'';
      const resp=await fetch(base+'/lang/'+lang+'.json');
      dict=await resp.json();
      translateAll();
      updateSwitcher();
    }catch(e){console.warn('i18n load failed:',e)}
  }

  function translateAll(){
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key=el.dataset.i18n;
      if(dict[key])el.textContent=dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      const key=el.dataset.i18nPlaceholder;
      if(dict[key])el.placeholder=dict[key];
    });
  }

  function updateSwitcher(){
    document.querySelectorAll('.lang-switch').forEach(el=>{
      el.classList.toggle('active',el.dataset.lang===current);
    });
  }

  function insertSwitcher(target){
    const btn=document.createElement('button');
    btn.className='lang-switch';
    btn.dataset.lang=(current==='zh'?'en':'zh');
    btn.textContent=current==='zh'?'EN':'中';
    btn.onclick=()=>{const next=current==='zh'?'en':'zh';loadLang(next)};
    btn.style.cssText='background:none;border:1px solid rgba(255,255,255,.15);color:rgba(255,255,255,.5);padding:.2rem .65rem;border-radius:10px;font-size:.7rem;cursor:pointer;font-family:inherit;transition:all .2s';
    target.appendChild(btn);
    updateSwitcher();
  }

  function toggleLang(){
    const next=current==='zh'?'en':'zh';
    loadLang(next);
  }

  // Init
  const initLang=detectLang();
  loadLang(initLang);

  // Expose
  window.i18n={toggle:toggleLang,current:()=>current};

  window.addEventListener('DOMContentLoaded',()=>{
    const navLinks=document.querySelector('.nav-links');
    if(navLinks){
      const li=document.createElement('li');
      insertSwitcher(li);
      navLinks.appendChild(li);
    }else{
      const nav=document.querySelector('.nav');
      if(nav){
        const wrap=document.createElement('div');
        insertSwitcher(wrap);
        nav.appendChild(wrap);
      }
    }
  });
})();
