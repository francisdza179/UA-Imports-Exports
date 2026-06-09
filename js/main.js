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

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  initNavbar();
  initHeroVideoSlider();
  initScrollAnimations();
  initCounterAnimation();
  initStorytellingCarousel();
  initProductFilter();
  initTestimonialsCarousel();

  console.log('✅ UA Imports & Exports — All modules initialized');
});
