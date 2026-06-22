/**
 * Product Filter Logic
 * Handles category filtering with smooth animations for the product showcase section.
 */

export function initProductFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');
  const grid = document.getElementById('product-grid');

  if (!filterBtns.length || !productCards.length || !grid) return;

  const ITEMS_PER_TAB = 16;

  function filterGrid(filterValue) {
    // First hide all cards
    productCards.forEach(card => {
      card.classList.add('is-hidden');
    });

    if (filterValue === 'all') {
      const categories = ['fruits', 'vegetables', 'roots', 'others'];
      const perCategory = ITEMS_PER_TAB / categories.length;
      const counts = { fruits: 0, vegetables: 0, roots: 0, others: 0 };

      productCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (counts[category] < perCategory) {
          card.classList.remove('is-hidden');
          counts[category]++;
          setTimeout(() => {
            card.classList.remove('fade-out');
          }, 50);
        }
      });
    } else {
      let visibleCount = 0;
      productCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (category === filterValue && visibleCount < ITEMS_PER_TAB) {
          card.classList.remove('is-hidden');
          visibleCount++;
          setTimeout(() => {
            card.classList.remove('fade-out');
          }, 50);
        }
      });
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        card.classList.add('fade-out');
      });

      setTimeout(() => {
        filterGrid(filterValue);
      }, 400);
    });
  });

  // Initialize: show first 16 items for "all" without animation
  filterGrid('all');
}
