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

  // Respect users who prefer reduced motion — skip parallax entirely.
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduceMotion.matches) return;

  let elements = [];
  let ticking = false;

  function cachePositions() {
    elements = [];
    items.forEach((el) => {
      const container = el.closest('.image-banner') || el.parentElement;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      // The background is rendered larger than its container and centred on it,
      // so it can travel up to half the excess height without exposing edges.
      const overflow = (elRect.height - containerRect.height) / 2;

      elements.push({
        el,
        offsetTop: containerRect.top + window.scrollY,
        height: containerRect.height,
        maxShift: Math.max(0, overflow),
      });
    });
  }

  function updateParallax() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    for (let i = 0; i < elements.length; i++) {
      const { el, offsetTop, height, maxShift } = elements[i];

      // Progress of the container through the viewport: -1 (below) → 1 (above).
      const progress =
        (offsetTop + height / 2 - (scrollY + windowHeight / 2)) / windowHeight;

      // Shift the image opposite to scroll for a depth effect, clamped so the
      // oversized background always covers the container.
      const shift = Math.max(-maxShift, Math.min(maxShift, progress * maxShift));

      el.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0)`;
    }
    ticking = false;
  }

  function requestUpdate() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  function recache() {
    cachePositions();
    requestUpdate();
  }

  cachePositions();
  requestUpdate();

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', recache);

  // Recompute once everything (incl. images) has settled on the page.
  window.addEventListener('load', recache);

  // If the browser supports it, watch the containers for size changes
  // (e.g. orientation flip, font load, layout shift) and recache.
  if ('ResizeObserver' in window) {
    const ro = new ResizeObserver(recache);
    elements.forEach(({ el }) => {
      const container = el.closest('.image-banner') || el.parentElement;
      if (container) ro.observe(container);
    });
  }

  // Re-measure when each background image finishes loading (async layout).
  items.forEach((el) => {
    if (el.complete) return;
    el.addEventListener('load', recache, { once: true });
  });

  // If the user toggles reduced-motion mid-session, disable the effect.
  const onMotionChange = (e) => {
    if (e.matches) {
      elements.forEach(({ el }) => (el.style.transform = ''));
      elements = [];
    } else {
      recache();
    }
  };
  if (reduceMotion.addEventListener) {
    reduceMotion.addEventListener('change', onMotionChange);
  } else if (reduceMotion.addListener) {
    reduceMotion.addListener(onMotionChange);
  }
}
