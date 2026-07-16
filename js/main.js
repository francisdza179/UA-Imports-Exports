/* ============================================================
   UA IMPORTS & EXPORTS — Main Entry Point
   ============================================================ */

import { initScrollAnimations } from './scroll-animations.js';
import { initHeroVideoSlider } from './hero-video-slider.js';
import { initCounterAnimation } from './counter-animation.js';
import { initNavbar } from './navbar.js';
import { initStorytellingCarousel } from './storytelling-carousel.js';
import { initProductFilter } from './product-filter.js';
import { initProductsRender } from './products-render.js';
import { initTestimonialsCarousel } from './testimonials-carousel.js';
import { initFaqAccordion } from './faq-accordion.js';
import { initForms } from './forms.js';
import { initProcessTabs } from './process-tabs.js';

/* Run each initializer in isolation so a failure in one module can never
   block the others. This is critical: the reveal system adds the visibility
   class to [data-reveal] elements, and if a later module throws it must not
   prevent that from running (otherwise sections stay invisible). */
function safeInit(name, fn) {
  try {
    fn();
  } catch (err) {
    console.error(`❌ init "${name}" failed:`, err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Reveal/animation system runs first — it only restores visibility and
  // must execute even if another module below errors.
  safeInit('scrollAnimations', initScrollAnimations);

  safeInit('navbar', initNavbar);
  safeInit('heroVideoSlider', initHeroVideoSlider);
  safeInit('counterAnimation', initCounterAnimation);
  safeInit('storytellingCarousel', initStorytellingCarousel);
  safeInit('productFilter', initProductFilter);
  safeInit('productsRender', initProductsRender);
  safeInit('testimonialsCarousel', initTestimonialsCarousel);
  safeInit('faqAccordion', initFaqAccordion);
  safeInit('forms', initForms);
  safeInit('processTabs', initProcessTabs);

  // Cleanup: hide product cards with missing images / placeholder text.
  // Scoped to the home showcase so it never affects other pages (e.g. the
  // products catalog) that also use .product-card.
  safeInit('productCardCleanup', () => {
    const scope = document.getElementById('product-showcase');
    if (!scope) return;

    scope.querySelectorAll('.product-card').forEach(card => {
      if (card.textContent.includes('Origin TBD')) {
        card.style.display = 'none';
      }
    });

    scope.querySelectorAll('.product-card__image').forEach(img => {
      img.addEventListener('error', function () {
        const card = this.closest('.product-card');
        if (card) card.style.display = 'none';
      });
      if (img.complete && img.naturalHeight === 0) {
        const card = img.closest('.product-card');
        if (card) card.style.display = 'none';
      }
    });
  });

  console.log('✅ UA Imports & Exports — All modules initialized');
});
