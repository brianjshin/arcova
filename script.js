

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

<<<<<<< HEAD

/* ====== T E A M  •  B I O  •  P A N E L ====== */
const bioData = {
  eric: {
    name: 'Eric Jackson',
    role: 'Partner',
    bio: [
      'Eric M. Jackson is a technology executive and company builder with deep expertise in go-to-market strategy and revenue generation. As PayPal\'s first head of U.S. marketing, Eric developed and implemented the revenue model that turned the company profitable, working alongside Peter Thiel during the company\'s formative years.',
      'Eric has since founded multiple technology companies, including CapLinked, a venture-backed deal management platform featured in the Wall Street Journal as the "go-to place for setting up and closing deals," and served on the boards of CritiqueIt (acquired by 2U, Nasdaq: TWOU) and other technology ventures.',
      'Eric is the author of The PayPal Wars, which won the Writers Notes Book Award. He has appeared on Bloomberg, CNN, and Fox News, and spoken at conferences around the world, including the World Knowledge Forum in Seoul, the Lang Di Fintech Conference in Shanghai, and the BlockFin Summit in San Francisco. Eric graduated with honors from Stanford University.'
    ]
  },
  kenneth: {
    name: 'Kenneth Lee',
    role: 'Partner',
    bio: [
      'Kenneth Lee is CEO and founder of Kencoa Aerospace, a Tier-1 supplier to Boeing, Lockheed Martin, Airbus, and other major aerospace OEMs. He has built three successful aerospace manufacturing ventures across the U.S. and South Korea, establishing deep operational capabilities in precision machining, advanced materials, and complex assembly.',
      'In 1995, Kenneth founded California Metal, an aerospace raw materials distributor serving top-tier OEMs and winning Boeing\'s Performance Excellence Award four consecutive years. In 2013, he founded Kencoa Aerospace Corporation in South Korea from a mobile container office with five employees, scaling to over 200 employees and becoming the first Korean SME to manufacture a complete flight-worthy aircraft — the KT-100 Air Force Trainer. Lee later acquired and transformed Heart of Georgia Metal Crafters, earning Lockheed Martin\'s Elite Supplier Performance Award as a top 2% global supplier.',
      'Kenneth holds a BBA with high honors from Seoul National University and an MBA from USC Marshall School of Business.'
    ]
  },
  brian: {
    name: 'Brian Shin',
    role: 'Partner',
    bio: [
      'Brian brings a decade of experience building and scaling AI-powered analytics and automation products for enterprise customers. At Adobe, he led the development of AI/ML solutions for creatives using Adobe Express and for B2B marketing and sales teams on Adobe Journey Optimizer, driving adoption and revenue growth from initial research through go-to-market execution.',
      'His background spans the full product lifecycle, providing firsthand insight into the operational and technical challenges founders face as they scale.',
      'Prior to Adobe, Brian served in the Republic of Korea Army. A Korean-American dual citizen fluent in both markets, he facilitates cross-border alignment between U.S. technology companies and South Korean institutional capital and industrial partners.',
      'Brian holds a degree in economics and human-computer interaction from Carnegie Mellon University.'
    ]
  }
};

const teamCards = document.querySelectorAll('.team-card');
const bioPanel = document.getElementById('bio-panel');

if (bioPanel) {
  const bioPanelName = bioPanel.querySelector('.bio-panel__name');
  const bioPanelRole = bioPanel.querySelector('.bio-panel__role');
  const bioPanelText = bioPanel.querySelector('.bio-panel__text');
  const bioClose = bioPanel.querySelector('.bio-panel__close');

  function openBio(card) {
    const member = card.dataset.member;
    const data = bioData[member];
    if (!data) return;

    teamCards.forEach(c => {
      c.classList.remove('active');
      c.setAttribute('aria-expanded', 'false');
    });

    card.classList.add('active');
    card.setAttribute('aria-expanded', 'true');
    bioPanelName.textContent = data.name;
    bioPanelRole.textContent = data.role;
    bioPanelText.innerHTML = data.bio.map(p => `<p>${p}</p>`).join('');
    bioPanel.classList.add('open');
    bioPanel.setAttribute('aria-hidden', 'false');
  }

  function closeBio() {
    teamCards.forEach(c => {
      c.classList.remove('active');
      c.setAttribute('aria-expanded', 'false');
    });
    bioPanel.classList.remove('open');
    bioPanel.setAttribute('aria-hidden', 'true');
  }

  teamCards.forEach(card => {
    card.addEventListener('click', e => {
      // Don't toggle bio if user clicked a link inside the card
      if (e.target.closest('a')) return;

      if (card.classList.contains('active')) {
        closeBio();
      } else {
        openBio(card);
      }
    });

    // Keyboard accessibility
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (card.classList.contains('active')) {
          closeBio();
        } else {
          openBio(card);
        }
      }
    });
  });

  bioClose.addEventListener('click', closeBio);
}

=======
>>>>>>> 59b9f18442ac1aeaf54d6c0877cacc0ca20c752c
