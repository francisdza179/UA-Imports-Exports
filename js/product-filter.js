/**
 * Product Filter Logic
 * Handles category filtering with smooth animations for the product showcase section.
 */

export function initProductFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');
  const grid = document.getElementById('product-grid');

  if (!filterBtns.length || !productCards.length || !grid) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      // First, fade out all cards
      productCards.forEach(card => {
        card.classList.add('fade-out');
      });

      // Wait for fade out animation to complete (400ms matching CSS)
      setTimeout(() => {
        productCards.forEach(card => {
          const category = card.getAttribute('data-category');
          const isFeatured = card.getAttribute('data-featured') === 'true';
          
          let shouldShow = false;
          if (filterValue === 'all') {
            shouldShow = isFeatured;
          } else {
            shouldShow = (category === filterValue);
          }

          if (shouldShow) {
            card.classList.remove('is-hidden');
            // Slight delay before fading in to ensure display block has taken effect
            setTimeout(() => {
              card.classList.remove('fade-out');
            }, 50);
          } else {
            card.classList.add('is-hidden');
          }
        });
      }, 400);
    });
  });
}
