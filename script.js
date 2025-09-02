

document.querySelectorAll('.navbar a[href^="#"]').forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();                        // stop native hash jump
    const targetId = link.getAttribute('href');
    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;

    // Scroll even if the hash is already current
    targetEl.scrollIntoView({behavior:'smooth', block:'start'});

    // Update the address bar so deep-links still work
    history.pushState(null,'',targetId);
  });
});



const nav = document.querySelector('.navbar');
  const trigger = 50;           // px from top before we switch colors

  window.addEventListener('scroll', () => {
    if (window.scrollY > trigger){
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
  
  
  const intro = document.getElementById('intro');
  intro.addEventListener('animationend', e=>{
    if (e.animationName === 'introOut') intro.remove();
  });  





  /* ====== F A D E  •  I N  •  O N  •  S C R O L L ====== */
const revealEls = document.querySelectorAll('.reveal');

const io = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('reveal--visible');
      observer.unobserve(entry.target);        // animate only once
    }
  });
}, {
  threshold: 0.2       // fire when 20 % of the element is visible
});

revealEls.forEach(el => io.observe(el));


/* ====== M O B I L E  •  M E N U ====== */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger){
  hamburger.addEventListener('click', () => {
    const open = nav.classList.toggle('navbar--open');
    hamburger.setAttribute('aria-expanded', String(open));
  });

  // Close on link click (useful on mobile after navigating)
  navLinks?.querySelectorAll('a').forEach(a =>{
    a.addEventListener('click', () => {
      if (nav.classList.contains('navbar--open')){
        nav.classList.remove('navbar--open');
        hamburger.setAttribute('aria-expanded','false');
      }
    });
  });
}

