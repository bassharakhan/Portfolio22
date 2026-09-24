const f=document.getElementById('cf'),ok=document.getElementById('ok');
f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);
const s=`New enquiry: ${d.get('type')} from ${d.get('name')}`;
const b=`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nProject type: ${d.get('type')}\nBudget: ${d.get('budget')}\n\n${d.get('message')}`;
ok.classList.add('show');location.href='mailto:bassharakhan@gmail.com?subject='+encodeURIComponent(s)+'&body='+encodeURIComponent(b)});
