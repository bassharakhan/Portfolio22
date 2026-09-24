const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
const co=new IntersectionObserver(e=>e.forEach(x=>{if(!x.isIntersecting)return;co.unobserve(x.target);const n=x.target,t=+n.dataset.to,s=performance.now();
(function f(now){const p=Math.min((now-s)/1800,1),v=t*(1-Math.pow(1-p,3));n.textContent=Number.isInteger(t)?Math.round(v):v.toFixed(1);if(p<1)requestAnimationFrame(f)})(s)}),{threshold:.6});
document.querySelectorAll('[data-to]').forEach(n=>co.observe(n));
const tr=document.querySelector('.track');if(tr){const ds=[...document.querySelectorAll('.dots button')];let i=0,tm;
const go=n=>{i=(n+ds.length)%ds.length;tr.style.transform=`translateX(-${i*100}%)`;ds.forEach((d,k)=>d.classList.toggle('on',k===i))};
const run=()=>{clearInterval(tm);tm=setInterval(()=>go(i+1),5500)};ds.forEach((d,k)=>d.onclick=()=>{go(k);run()});run()}
const m=document.querySelector('.menu'),nv=document.getElementById('nv');if(m)m.onclick=()=>{const o=nv.classList.toggle('open');m.setAttribute('aria-expanded',o)};
