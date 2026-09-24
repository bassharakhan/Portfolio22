const tabs=[...document.querySelectorAll('.tab')],pill=document.querySelector('.pill'),cards=[...document.querySelectorAll('.pc')],lb=document.getElementById('lb');
let cur=tabs[0];const mv=t=>{pill.style.width=t.offsetWidth+'px';pill.style.transform=`translateX(${t.offsetLeft}px)`};
mv(cur);addEventListener('resize',()=>mv(cur));document.fonts&&document.fonts.ready.then(()=>mv(cur));
tabs.forEach(t=>t.onclick=()=>{if(t===cur)return;cur=t;tabs.forEach(x=>{x.classList.toggle('on',x===t);x.setAttribute('aria-selected',x===t)});mv(t);
const f=t.dataset.f;cards.forEach(c=>c.classList.add('out'));
setTimeout(()=>{let n=0;cards.forEach(c=>{const s=f==='all'||c.dataset.cat===f;c.hidden=!s;if(s){c.style.setProperty('--d',n++%3);c.classList.add('in')}});
requestAnimationFrame(()=>cards.forEach(c=>c.classList.remove('out')))},300)});
cards.forEach(c=>c.onclick=()=>{const i=lb.querySelector('.lbim img');i.src=c.dataset.img;i.alt=c.dataset.title;lb.querySelector('.lbc').textContent=c.dataset.label;lb.querySelector('h2').textContent=c.dataset.title;lb.querySelector('.lbd').textContent=c.dataset.desc;const a=lb.querySelector('.lbl');a.href=c.dataset.link;a.textContent=c.dataset.lt;lb.scrollTop=0;lb.showModal()});
lb.querySelector('.x').onclick=()=>lb.close();lb.addEventListener('click',e=>{if(e.target===lb)lb.close()});
