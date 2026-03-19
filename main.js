/* ─────────────────────────────────────────
   BACKFLOW SERVICES VA — Global JS
   ───────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  // ── Scroll Reveal ──
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(r => revealObserver.observe(r));
  }

  // ── Navbar scroll shadow ──
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // ── Active nav link ──
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ── Mobile hamburger toggle ──
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      const isOpen = mobileNav.classList.contains('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      // Animate bars
      const bars = hamburger.querySelectorAll('span');
      if (isOpen) {
        bars[0].style.transform = 'translateY(7px) rotate(45deg)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        bars[0].style.transform = '';
        bars[1].style.opacity = '';
        bars[2].style.transform = '';
      }
    });

    // Close mobile nav when a link is clicked
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        hamburger.querySelectorAll('span').forEach(b => {
          b.style.transform = '';
          b.style.opacity = '';
        });
      });
    });
  }

  // ── FAQ accordion ──
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const answer = q.nextElementSibling;
      const isOpen = q.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-q.open').forEach(openQ => {
        openQ.classList.remove('open');
        openQ.nextElementSibling.classList.remove('open');
      });

      if (!isOpen) {
        q.classList.add('open');
        answer.classList.add('open');
      }
    });
  });

  // ── Contact form submit ──
  const formSubmit = document.getElementById('formSubmit');
  if (formSubmit) {
    formSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      formSubmit.textContent = '✅ Request Sent! We\'ll be in touch shortly.';
      formSubmit.style.background = '#2a7a4b';
      formSubmit.disabled = true;
    });
  }

});
