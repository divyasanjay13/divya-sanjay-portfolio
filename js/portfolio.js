window.addEventListener('load',()=>{
  /* preloader */
  const pre=document.getElementById('preloader'),bar=document.getElementById('preBar');
  pre.querySelectorAll('.pre-name span').forEach((l,i)=>setTimeout(()=>{l.style.transition='transform .5s cubic-bezier(.77,0,.175,1),opacity .5s';l.style.transform='translateY(0)';l.style.opacity='1';},52*i));
  setTimeout(()=>{bar.style.width='100%';},160);
  setTimeout(()=>{pre.style.transition='opacity .55s,transform .55s';pre.style.opacity='0';pre.style.transform='translateY(-14px)';setTimeout(()=>pre.style.display='none',570);},1850);

  /* gsap */
  if(typeof gsap!=='undefined'){
    gsap.registerPlugin(ScrollTrigger,TextPlugin);
    const tl=gsap.timeline({delay:1.95});
    tl.to('#hl',{opacity:1,y:0,duration:.6,ease:'power2.out'})
      .from('#hn1',{y:70,opacity:0,duration:.7,ease:'power3.out'},'-=.2')
      .from('#hn2',{y:70,opacity:0,duration:.7,ease:'power3.out'},'-=.5')
      .from('#hd',{y:30,opacity:0,duration:.6,ease:'power2.out'},'-=.35')
      .from('#hb',{y:20,opacity:0,duration:.5,ease:'power2.out'},'-=.3')
      .from('#heb',{y:20,opacity:0,duration:.5,ease:'power2.out'},'-=.25')
      .from('#hv',{x:50,opacity:0,duration:.8,ease:'power3.out'},'-=.85');
    gsap.utils.toArray('.st').forEach(el=>gsap.from(el,{scrollTrigger:{trigger:el,start:'top 87%'},y:40,opacity:0,duration:.8,ease:'power2.out'}));
    gsap.utils.toArray('.scc').forEach((c,i)=>gsap.from(c,{scrollTrigger:{trigger:c,start:'top 90%'},y:50,opacity:0,duration:.65,delay:(i%3)*.08,ease:'power2.out'}));
    gsap.utils.toArray('.tli').forEach(item=>gsap.from(item,{scrollTrigger:{trigger:item,start:'top 88%'},x:-30,opacity:0,duration:.7,ease:'power2.out'}));
    gsap.utils.toArray('.feat-card,.edu-card').forEach((c,i)=>gsap.from(c,{scrollTrigger:{trigger:c,start:'top 93%'},scale:.93,opacity:0,duration:.55,delay:i*.06,ease:'back.out(1.6)'}));
  }

  /* typed */
  const phrases=['pixel-perfect UIs.','React experiences.','GSAP animations.','responsive websites.','Figma designs into code.'];
  let pi=0,ci=0,del=false;
  const tel=document.getElementById('typed');
  function type(){if(!tel)return;const p=phrases[pi];if(!del){tel.textContent=p.slice(0,++ci);if(ci===p.length){del=true;setTimeout(type,1700);return;}}else{tel.textContent=p.slice(0,--ci);if(ci===0){del=false;pi=(pi+1)%phrases.length;}}setTimeout(type,del?38:68);}
  setTimeout(type,2350);

  /* cursor */
  const cd=document.getElementById('cd'),cr=document.getElementById('cr');
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
  (function ac(){cd.style.left=mx+'px';cd.style.top=my+'px';rx+=(mx-rx)*.11;ry+=(my-ry)*.11;cr.style.left=rx+'px';cr.style.top=ry+'px';requestAnimationFrame(ac);})();
  document.querySelectorAll('a,button').forEach(el=>{
    el.addEventListener('mouseenter',()=>{cr.style.width='54px';cr.style.height='54px';cr.style.borderColor='var(--rust)';});
    el.addEventListener('mouseleave',()=>{cr.style.width='38px';cr.style.height='38px';cr.style.borderColor='var(--teal)';});
  });

  /* scroll progress */
  const spb=document.getElementById('spb');
  window.addEventListener('scroll',()=>{spb.style.width=(window.scrollY/(document.body.scrollHeight-innerHeight)*100)+'%';},{passive:true});

  /* navbar */
  const nav=document.getElementById('navbar');
  window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>40),{passive:true});

  /* hamburger */
  const ham=document.getElementById('ham'),navL=document.getElementById('navL');
  ham.addEventListener('click',()=>{
    navL.classList.toggle('open');
    const s=ham.querySelectorAll('span');
    if(navL.classList.contains('open')){s[0].style.transform='rotate(45deg) translate(5px,5px)';s[1].style.opacity='0';s[2].style.transform='rotate(-45deg) translate(5px,-5px)';}
    else{s.forEach(x=>{x.style.transform='';x.style.opacity='';});}
  });
  navL.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navL.classList.remove('open');ham.querySelectorAll('span').forEach(x=>{x.style.transform='';x.style.opacity='';});}));

  /* skill bars */
  const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.style.width=e.target.dataset.width+'%';obs.unobserve(e.target);}});},{threshold:.3});
  document.querySelectorAll('.sbf').forEach(b=>obs.observe(b));

  /* aos */
  if(typeof AOS!=='undefined')AOS.init({once:true,duration:760,easing:'ease-out-cubic',offset:50});

  /* swiper */
  if(typeof Swiper!=='undefined'){
    new Swiper('.swiper-projects',{
      grabCursor:true,loop:true,
      autoplay:{delay:3400,pauseOnMouseEnter:true,disableOnInteraction:false},
      pagination:{el:'.swiper-pagination',clickable:true},
      navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'},
      breakpoints:{0:{slidesPerView:1,spaceBetween:16},480:{slidesPerView:1.3,spaceBetween:18},640:{slidesPerView:1.6,spaceBetween:20},768:{slidesPerView:2,spaceBetween:22},1024:{slidesPerView:2.6,spaceBetween:26},1280:{slidesPerView:3,spaceBetween:28}}
    });
  }
});