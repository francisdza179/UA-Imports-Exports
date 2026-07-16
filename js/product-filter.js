/**
 * ============================================================================
 *  Product Showcase — data-driven render + filtering
 * ============================================================================
 *  The grid is built entirely from js/product-data.js. Filtering only toggles
 *  the visibility of cards; it never mutates the data or the DOM structure,
 *  so the showcase's contents cannot drift or get corrupted by edits made
 *  anywhere else on the site.
 * ============================================================================
 */

import { PRODUCE, CATEGORY_FOLDERS, ALL_ITEMS_PER_CATEGORY } from './product-data.js';

function buildCard(category, item) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.setAttribute('data-category', category);

  const wrapper = document.createElement('div');
  wrapper.className = 'product-card__image-wrapper';

  const img = document.createElement('img');
  img.src = 'assets/images/' + CATEGORY_FOLDERS[category] + '/' + item.file;
  img.alt = item.name;
  img.className = 'product-card__image';
  img.loading = 'lazy';

  const name = document.createElement('h3');
  name.className = 'product-card__name';
  name.textContent = item.name;

  wrapper.appendChild(img);
  card.appendChild(wrapper);
  card.appendChild(name);
  return card;
}

/** Render every category's items into the grid from data. */
function renderGrid(grid) {
  const fragment = document.createDocumentFragment();
  Object.keys(PRODUCE).forEach((category) => {
    PRODUCE[category].forEach((item) => {
      fragment.appendChild(buildCard(category, item));
    });
  });
  grid.innerHTML = '';
  grid.appendChild(fragment);
}

export function initProductFilter() {
  const section = document.getElementById('product-showcase');
  if (!section) return;

  const filterBtns = section.querySelectorAll('.filter-btn');
  const grid = section.querySelector('#product-grid');
  if (!filterBtns.length || !grid) return;

  // Build the showcase from the single source of truth.
  renderGrid(grid);

  const productCards = grid.querySelectorAll('.product-card');

  function showCard(card) {
    card.classList.remove('is-hidden');
    setTimeout(() => card.classList.remove('fade-out'), 50);
  }

  function filterGrid(filterValue) {
    // Hide everything first.
    productCards.forEach((card) => card.classList.add('is-hidden'));

    if (filterValue === 'all') {
      // Exactly ALL_ITEMS_PER_CATEGORY from each category → a balanced 4x4.
      const shownPerCategory = {};
      productCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        const shown = shownPerCategory[category] || 0;
        if (shown < ALL_ITEMS_PER_CATEGORY) {
          showCard(card);
          shownPerCategory[category] = shown + 1;
        }
      });
    } else {
      // A single category tab shows ALL of its items (a full 4x4 grid).
      productCards.forEach((card) => {
        if (card.getAttribute('data-category') === filterValue) {
          showCard(card);
        }
      });
    }
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      productCards.forEach((card) => card.classList.add('fade-out'));

      setTimeout(() => {
        filterGrid(filterValue);
      }, 400);
    });
  });

  // Initialize on the "All" tab. The grid has data-reveal, so we reveal
  // without the fade-out transition on first paint.
  filterGrid('all');
}
