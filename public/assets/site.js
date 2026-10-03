(function(){
  if(/noanim/.test(location.search)){document.querySelectorAll('.rv').forEach(function(e){e.classList.add('in')})}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
  document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
  var t=new Date('2026-10-24T00:00:00+05:30').getTime();
  var d=Math.ceil((t-Date.now())/86400000);
  document.querySelectorAll('[data-days]').forEach(function(el){
    el.textContent = el.hasAttribute('data-short') ? (d>0? String(d) : '0') : d>1 ? d+' DAYS TO GO' : (d===1 ? 'TOMORROW' : (d===0 ? 'TONIGHT' : 'SEASON 1 IS DONE'));
  });
  var y=document.getElementById('yr'); if(y) y.textContent=new Date().getFullYear();
})();
(function(){
  var b=document.querySelector('.tg'); if(!b) return;
  var rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function R(a,z){return a+Math.random()*(z-a)}
  function grow(el,n,hmin,hmax){
    for(var k=0;k<n;k++){var s=document.createElement('span');s.className='tg-blade';var w=R(5,9),h=R(hmin,hmax),r=R(-14,14);
      s.style.cssText='width:'+w.toFixed(1)+'px;height:'+h.toFixed(0)+'px;margin:0 -'+(w*0.35).toFixed(1)+'px;--r:'+r.toFixed(1)+'deg;transform:rotate('+r.toFixed(1)+'deg)';
      s.dataset.r=r;s.dataset.h=h;s.dataset.w=w;var i=document.createElement('i');i.style.cssText='--d:'+R(1.6,3.4).toFixed(2)+'s;--dl:-'+R(0,3).toFixed(2)+'s;--a:'+R(5,12).toFixed(1)+'deg';s.appendChild(i);el.appendChild(s)}
  }
  grow(b.querySelector('.tg-back'),50,30,80);
  grow(b.querySelector('.tg-front'),64,10,28);
  var blades=[].slice.call(b.querySelectorAll('.tg-blade'));
  function lean(x,force){var br=b.getBoundingClientRect();
    blades.forEach(function(s){var sr=s.getBoundingClientRect(),cx=sr.left+sr.width/2,dx=cx-x,base=+s.dataset.r,
      push=Math.max(0,1-Math.abs(dx)/(force?260:120))*(dx<0?-1:1)*(force?70:38);
      s.style.transform='rotate('+(base+push).toFixed(1)+'deg)'})}
  function rest(){blades.forEach(function(s){s.style.transform='rotate('+s.dataset.r+'deg)'})}
  if(!rm){b.addEventListener('pointermove',function(e){lean(e.clientX,false)});b.addEventListener('pointerleave',rest)}
  var lines=['grass touched','ok. back to pitching.','the hosts never do this','+10 aura','touched. now apply.'],n=0,f=1,regrow=null;
  function size(){blades.forEach(function(s){s.style.height=(+s.dataset.h*f).toFixed(1)+'px';s.style.width=(+s.dataset.w*Math.max(.45,Math.sqrt(f))).toFixed(1)+'px'})}
  b.addEventListener('click',function(e){
    var br=b.getBoundingClientRect(),x=e.clientX||br.left+br.width/2;
    b.classList.add('touched','gust');if(!rm)lean(x,true);
    var t=document.createElement('span');t.className='tg-toast';f=Math.max(.12,f*.8);size();clearTimeout(regrow);
    t.textContent=f<=.12?'lawn destroyed. go apply.':lines[n++%lines.length];
    if(f<=.12){regrow=setTimeout(function(){f=1;size()},6000)}b.appendChild(t);setTimeout(function(){t.remove()},1950);
    if(!rm&&b.animate){for(var k=0;k<16;k++){var p=document.createElement('span');p.className='tg-bit';var face=b.querySelector('.tg-face');
      p.style.left=(br.width/2+R(-br.width/3,br.width/3))+'px';p.style.bottom='4px';p.style.background=['#48c04f','#1f8a3b','#D9FF3D','#8ce99a'][k%4];b.appendChild(p);
      p.animate([{transform:'translate(0,0) rotate(0)',opacity:1},{transform:'translate('+R(-120,120)+'px,'+R(-150,-60)+'px) rotate('+R(-400,400)+'deg)',opacity:1,offset:.6},{transform:'translate('+R(-160,160)+'px,'+R(-40,30)+'px) rotate('+R(-600,600)+'deg)',opacity:0}],{duration:R(800,1300),easing:'cubic-bezier(.2,.7,.4,1)'}).onfinish=(function(q){return function(){q.remove()}})(p)}}
    setTimeout(function(){b.classList.remove('touched')},220);
    setTimeout(function(){b.classList.remove('gust');rest()},900);
  });
})();
(function(){
  var btn=document.querySelector('.lb-btn'),panel=document.getElementById('lb-panel');if(!btn||!panel)return;
  var list=panel.querySelector('.lb-list'),form=panel.querySelector('.lb-form'),inp=panel.querySelector('#lb-name'),meP=panel.querySelector('.lb-me');
  var id=localStorage.getItem('spl_gid');if(!id){id=(Math.random().toString(36).slice(2)+Date.now().toString(36)+Math.random().toString(36).slice(2)).replace(/[^a-z0-9]/g,'').slice(0,24);localStorage.setItem('spl_gid',id)}
  var name=localStorage.getItem('spl_gname')||'',pending=+(localStorage.getItem('spl_gpend')||0),timer=null,busy=false;inp.value=name;
  function render(top){list.innerHTML='';if(!top||!top.length){var e=document.createElement('li');e.className='lb-empty';e.textContent='No one has touched grass yet. Be first.';list.appendChild(e);return}
    top.forEach(function(r){var li=document.createElement('li');if(name&&r.name===name)li.className='me';var a=document.createElement('span');a.className='n';a.textContent=r.name;var b=document.createElement('span');b.className='s';b.textContent=r.score;li.appendChild(a);li.appendChild(b);list.appendChild(li)})}
  function msg(t){meP.textContent=t}
  function load(){fetch('/api/grass').then(function(r){return r.json()}).then(function(d){render(d.top)}).catch(function(){msg('Leaderboard is napping. Try again soon.')})}
  function send(){if(busy||!name)return;busy=true;var n=Math.min(pending,500);
    fetch('/api/grass',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({id:id,name:name,n:n})}).then(function(r){return r.json().then(function(d){return{s:r.status,d:d}})}).then(function(x){
      busy=false;if(x.s===409||x.s===400){msg(x.d.error);name='';localStorage.removeItem('spl_gname');openP();return}
      pending=Math.max(0,pending-n);if(x.d.limited){pending+=n;msg('Easy, tiger. Saving your touches in a sec.')}else if(x.d.name)msg('You: '+x.d.me+' touches');
      localStorage.setItem('spl_gpend',pending);if(x.d.top)render(x.d.top);if(pending>0)setTimeout(send,x.d.limited?5000:400)}).catch(function(){busy=false})}
  function openP(){panel.hidden=false;btn.setAttribute('aria-expanded','true');load()}
  function closeP(){panel.hidden=true;btn.setAttribute('aria-expanded','false')}
  btn.addEventListener('click',function(){panel.hidden?openP():closeP()});
  panel.querySelector('.lb-x').addEventListener('click',closeP);
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeP()});
  form.addEventListener('submit',function(e){e.preventDefault();var v=inp.value.replace(/\s+/g,' ').trim();if(v.length<2){msg('Name needs 2+ characters.');return}name=v;localStorage.setItem('spl_gname',name);msg('Saving…');send()});
  var tg=document.querySelector('.tg'),asked=false;
  if(tg)tg.addEventListener('click',function(){pending++;localStorage.setItem('spl_gpend',pending);
    if(!name){if(!asked){asked=true;setTimeout(function(){openP();msg('Add a name to get your '+pending+' touch'+(pending>1?'es':'')+' on the board.');inp.focus()},700)}return}
    clearTimeout(timer);timer=setTimeout(send,1200)});
  if(name&&pending>0)send();
})();
