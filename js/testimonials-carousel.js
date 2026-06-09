export function initTestimonialsCarousel() {
  const carousel = document.getElementById('testimonials-carousel');
  if (!carousel) return;

  const slidesContainer = carousel.querySelector('.testimonials__slides');
  const slides = carousel.querySelectorAll('.testimonials__slide');
  const dots = document.querySelectorAll('.testimonials__dot');

  if (!slides.length || !dots.length) return;

  let currentSlide = 0;
  let isTransitioning = false;

  function goToSlide(index) {
    if (isTransitioning || index === currentSlide) return;

    isTransitioning = true;
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    currentSlide = index;

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  slidesContainer.addEventListener('transitionend', () => {
    isTransitioning = false;
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-slide'));
      goToSlide(index);
      resetAutoplay();
    });
  });

  /* ── Autoplay ──────────────────────────────── */
  let autoplayInterval;

  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      const next = (currentSlide + 1) % slides.length;
      goToSlide(next);
    }, 5000);
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }

  startAutoplay();
}
