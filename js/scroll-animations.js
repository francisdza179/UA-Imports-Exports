/* ============================================================
   UA IMPORTS & EXPORTS — Scroll Animations
   Intersection Observer-based reveal system + Parallax
   ============================================================ */

export function initScrollAnimations() {
  initRevealAnimations();
  initParallax();
}

/* ── Reveal Animations ───────────────────────────── */
function initRevealAnimations() {
  const revealElements = document.querySelectorAll('[data-reveal]');

  if (!revealElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });
}

/* ── Parallax ────────────────────────────────────── */
function initParallax() {
  const items = document.querySelectorAll('[data-parallax="scroll"]');
  if (!items.length) return;

  let elements = [];
  let ticking = false;

  function cachePositions() {
    elements = [];
    items.forEach((el) => {
      const container = el.closest('.image-banner') || el.parentElement;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      elements.push({
        el,
        offsetTop: rect.top + window.scrollY,
        height: rect.height,
      });
    });
  }

  function updateParallax() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    for (let i = 0; i < elements.length; i++) {
      const { el, offsetTop, height } = elements[i];
      const containerCenter = offsetTop + height / 2 - scrollY;
      const viewportCenter = windowHeight / 2;
      const delta = (containerCenter - viewportCenter) / windowHeight;

      if (Math.abs(delta) > 1.5) continue;

      const offsetPx = delta * 100;

      el.style.transform = `translate3d(0, ${offsetPx}px, 0)`;
    }
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  cachePositions();
  updateParallax();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => { cachePositions(); updateParallax(); });
}
