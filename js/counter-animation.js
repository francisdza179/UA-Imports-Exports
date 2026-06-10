export function initCounterAnimation() {
  const counters = document.querySelectorAll('.stats-count');

  if (!counters.length) return;

  counters.forEach((el) => animateCounter(el));

  const observerOptions = {
    root: null,
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting) {
        if (el.dataset.entered === 'false') {
          animateCounter(el);
        }
        el.dataset.entered = 'true';
      } else {
        el.dataset.entered = 'false';
      }
    });
  }, observerOptions);

  counters.forEach((el) => observer.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'), 10);
  const duration = 2000;

  if (isNaN(target)) return;

  if (el.animationFrameId) {
    cancelAnimationFrame(el.animationFrameId);
    el.animationFrameId = null;
  }

  el.textContent = '0';

  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 4);
    const currentValue = Math.min(Math.round(easedProgress * target), target);
    el.textContent = currentValue;

    if (progress < 1) {
      el.animationFrameId = requestAnimationFrame(update);
    } else {
      el.textContent = target;
      el.animationFrameId = null;
    }
  }

  el.animationFrameId = requestAnimationFrame(update);
}
