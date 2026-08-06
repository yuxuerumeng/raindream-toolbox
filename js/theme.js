// Theme - auto dark/light with system detection
(function(){
  const KEY='theme';
  function getSystemTheme(){return window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}
  function applyTheme(t){
    document.documentElement.classList.toggle('light',t==='light');
    updateBtn(t);
  }
  function updateBtn(t){
    document.querySelectorAll('.theme-toggle').forEach(b=>{
      b.innerHTML=t==='dark'?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
      b.setAttribute('aria-label',t==='dark'?'切换到浅色模式':'切换到深色模式');
    });
  }
  function toggle(){
    const next=document.documentElement.classList.contains('light')?'dark':'light';
    localStorage.setItem(KEY,next);
    applyTheme(next);
  }
  function insertBtn(target){
    const btn=document.createElement('button');
    btn.className='theme-toggle';
    btn.onclick=function(e){e.preventDefault();toggle()};
    target.appendChild(btn);
    updateBtn(document.documentElement.classList.contains('light')?'light':'dark');
  }
  // Init
  const stored=localStorage.getItem(KEY);
  const theme=stored||getSystemTheme();
  applyTheme(theme);
  // Listen for system changes
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change',e=>{
    if(!localStorage.getItem(KEY))applyTheme(e.matches?'light':'dark');
  });
  // Insert button
  window.addEventListener('DOMContentLoaded',()=>{
    const nav=document.querySelector('.nav');
    if(!nav)return;
    let wrap=nav.querySelector('.mobile-nav-right');
    if(!wrap){wrap=document.createElement('div');wrap.className='mobile-nav-right';nav.appendChild(wrap)}
    insertBtn(wrap);
  });
  window.theme={toggle};
})();
