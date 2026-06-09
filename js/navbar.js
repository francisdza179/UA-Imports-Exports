/* ============================================================
   UA IMPORTS & EXPORTS — Navbar Controller
   Sticky nav, glassmorphism, smooth scroll, mobile menu
   ============================================================ */

export function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.navbar__hamburger');
  const mobileOverlay = document.querySelector('.navbar__mobile-overlay');
  const navLinks = document.querySelectorAll('.navbar__link');
  const SCROLL_THRESHOLD = 80;

  if (!navbar) return;

  // ── Scroll-based glassmorphism ──────────────────
  let ticking = false;

  function handleScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > SCROLL_THRESHOLD) {
          navbar.classList.add('is-scrolled');
        } else {
          navbar.classList.remove('is-scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Check initial state

  // ── Mobile hamburger toggle ────────────────────
  if (hamburger && mobileOverlay) {
    hamburger.addEventListener('click', () => {
      const isActive = hamburger.classList.toggle('is-active');
      mobileOverlay.classList.toggle('is-open', isActive);
      document.body.style.overflow = isActive ? 'hidden' : '';
    });

    // Close mobile menu on link click
    const mobileLinks = mobileOverlay.querySelectorAll('.navbar__link, .navbar__cta');
    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('is-active');
        mobileOverlay.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Smooth scroll to section ───────────────────
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // ── Active link highlighting on scroll ─────────
  const sections = document.querySelectorAll('section[id]');
  const path = window.location.pathname;
  const page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

  function highlightActiveLink() {
    if (page === 'index.html' || page === '') {
      const scrollPos = window.scrollY + 150;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${id}` || href === `index.html#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    } else {
      // On subpages, keep the current page active and don't clear it on scroll
      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href && (href === page || href.endsWith('/' + page))) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }

  window.addEventListener('scroll', highlightActiveLink, { passive: true });
  highlightActiveLink(); // Call on load to set initial state correctly
}
