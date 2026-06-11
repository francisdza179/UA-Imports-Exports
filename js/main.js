/* ============================================================
   UA IMPORTS & EXPORTS — Main Entry Point
   ============================================================ */

import { initScrollAnimations } from './scroll-animations.js';
import { initHeroVideoSlider } from './hero-video-slider.js';
import { initCounterAnimation } from './counter-animation.js';
import { initNavbar } from './navbar.js';
import { initStorytellingCarousel } from './storytelling-carousel.js';
import { initProductFilter } from './product-filter.js';
import { initTestimonialsCarousel } from './testimonials-carousel.js';
import { initFaqAccordion } from './faq-accordion.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  initNavbar();
  initHeroVideoSlider();
  initScrollAnimations();
  initCounterAnimation();
  initStorytellingCarousel();
  initProductFilter();
  initTestimonialsCarousel();
  initFaqAccordion();
  // Cleanup missing images and placeholders
  document.querySelectorAll('.product-card').forEach(card => {
    if (card.textContent.includes('Origin TBD')) {
      card.style.display = 'none';
    }
  });

  document.querySelectorAll('.product-card__image').forEach(img => {
    img.addEventListener('error', function() {
      const card = this.closest('.product-card');
      if (card) card.style.display = 'none';
    });
    if (img.complete && img.naturalHeight === 0) {
      const card = img.closest('.product-card');
      if (card) card.style.display = 'none';
    }
  });

  console.log('✅ UA Imports & Exports — All modules initialized');
});
