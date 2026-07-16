/**
 * ============================================================================
 *  Our Products page — data-driven render
 * ============================================================================
 *  Each .products__showcase is filled entirely from js/products-data.js. The
 *  markup in products.html only declares the (empty) showcases with a
 *  data-products-category attribute; the cards are generated here. Editing
 *  anything else in the site cannot alter the catalog, and the per-category
 *  counts are derived from the data so they can never drift out of sync.
 * ============================================================================
 */

import { PRODUCTS, CATEGORY_FOLDERS } from './products-data.js';

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

  const origin = document.createElement('p');
  origin.className = 'product-card__origin';
  origin.textContent = item.origin;

  wrapper.appendChild(img);
  card.appendChild(wrapper);
  card.appendChild(name);
  card.appendChild(origin);
  return card;
}

export function initProductsRender() {
  const showcases = document.querySelectorAll('[data-products-category]');
  if (!showcases.length) return;

  showcases.forEach((showcase) => {
    const category = showcase.getAttribute('data-products-category');
    const items = PRODUCTS[category];
    if (!items) return;

    const fragment = document.createDocumentFragment();
    items.forEach((item) => fragment.appendChild(buildCard(category, item)));
    showcase.innerHTML = '';
    showcase.appendChild(fragment);

    // Keep the "NN products" badge in sync with the data (fortress against drift).
    const categoryBlock = showcase.closest('.products__category');
    if (categoryBlock) {
      const countEl = categoryBlock.querySelector('.products__category-count strong');
      if (countEl) countEl.textContent = String(items.length);
    }
  });
}
