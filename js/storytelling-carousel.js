export function initStorytellingCarousel() {
  const carousel = document.getElementById('storytelling-carousel');
  if (!carousel) return;

  const slidesContainer = carousel.querySelector('.storytelling__slides');
  let slides = carousel.querySelectorAll('.storytelling__slide');
  const dots = carousel.querySelectorAll('.storytelling__dot');

  const originalSlideCount = slides.length;
  
  // Clone the first slide to create a seamless infinite loop effect
  const firstSlideClone = slides[0].cloneNode(true);
  
  // Ensure the clone's revealable elements are already fully visible/revealed
  firstSlideClone.classList.add('is-revealed');
  firstSlideClone.querySelectorAll('[data-reveal]').forEach(el => {
    el.classList.add('is-revealed');
    el.removeAttribute('data-reveal'); // Prevent intersection observer conflicts
  });
  
  // Remove the active class from the cloned slide
  firstSlideClone.classList.remove('active');
  
  // Append clone to the container
  slidesContainer.appendChild(firstSlideClone);

  // Re-select slides to include the clone
  slides = carousel.querySelectorAll('.storytelling__slide');

  let currentSlide = 0;
  let isTransitioning = false;

  // ── Dynamic Height Alignment ─────────────────────────────
  // Ensures that all storytelling headers are of equal height on all devices
  function alignHeaderHeights() {
    const headers = carousel.querySelectorAll('.storytelling__header');
    
    // Reset heights so we can measure their natural dimensions
    headers.forEach(header => {
      header.style.height = 'auto';
      header.style.minHeight = '0';
    });

    // Find the maximum height among all headers (including the cloned one)
    let maxHeight = 0;
    headers.forEach(header => {
      const height = header.offsetHeight;
      if (height > maxHeight) {
        maxHeight = height;
      }
    });

    // Set all headers to the maximum height to align the card grids perfectly
    headers.forEach(header => {
      header.style.height = `${maxHeight}px`;
    });
  }

  // Align heights on initialization
  alignHeaderHeights();

  // Re-align on window resize to ensure full responsiveness
  window.addEventListener('resize', alignHeaderHeights);
  
  // Re-align on full window load to account for loaded web fonts
  window.addEventListener('load', alignHeaderHeights);

  // ── Slide Navigation ────────────────────────────────────
  function goToSlide(index, instant = false) {
    if (isTransitioning && !instant) return;
    
    if (instant) {
      slidesContainer.style.transition = 'none';
      slidesContainer.style.transform = `translateX(-${index * 100}%)`;
      currentSlide = index;
      isTransitioning = false;
      return;
    }

    slidesContainer.style.transition = 'transform 0.6s var(--ease-smooth)';
    isTransitioning = true;
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    currentSlide = index;

    // Update active class on dots (modulo original count to handle the clone)
    const dotIndex = index % originalSlideCount;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === dotIndex);
    });
  }

  // Native transitionend listener for robust, frame-perfect infinite looping
  slidesContainer.addEventListener('transitionend', (e) => {
    // Only react to the transform transition of the container itself
    if (e.target !== slidesContainer || e.propertyName !== 'transform') return;

    if (currentSlide === originalSlideCount) {
      // Jump back to the real first slide instantly without any animation
      slidesContainer.style.transition = 'none';
      slidesContainer.style.transform = 'translateX(0)';
      
      // Force a browser reflow/layout recalculation to apply style changes instantly
      slidesContainer.offsetHeight; 
      
      currentSlide = 0;
    }
    isTransitioning = false;
  });

  let autoplayInterval;

  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 6000);
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }

  // Event listeners for dots
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      if (isTransitioning) return;
      const index = parseInt(dot.getAttribute('data-slide'));
      goToSlide(index);
      resetAutoplay();
    });
  });

  // Start the autoplay initially
  startAutoplay();
}
