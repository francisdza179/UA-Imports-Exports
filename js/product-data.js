/**
 * ============================================================================
 *  PRODUCT SHOWCASE — SINGLE SOURCE OF TRUTH
 * ============================================================================
 *  This file is the ONLY place that defines what the Home page "Discover Our
 *  Produce" showcase displays. The grid is rendered from this data by
 *  js/product-filter.js, so the showcase can never be corrupted by edits made
 *  elsewhere in index.html, other sections, or other pages.
 *
 *  Rules that keep the layout a reliable 4x4 grid on every tab:
 *   - Every category below contains EXACTLY 16 items (a full 4x4 grid).
 *   - Items within a category are kept in ALPHABETICAL order.
 *   - Each category maps to its segregated image folder under
 *     "assets/images/Discover Our Produce/".
 *   - The "All" tab shows ALL_ITEMS_PER_CATEGORY (4) items from each category,
 *     which yields 4 x 4 = 16 items in alphabetical order per category.
 *
 *  To change the showcase, edit ONLY this file.
 * ============================================================================
 */

/** Maps a filter key (data-filter / data-category) to its image folder. */
export const CATEGORY_FOLDERS = {
  fruits: 'Discover Our Produce/Fruits',
  vegetables: 'Discover Our Produce/Vegetables',
  roots: 'Discover Our Produce/Roots, Bulbs & Tubers',
  others: 'Discover Our Produce/Seeds, Spices, Nuts & Others',
};

/** How many items from each category appear under the "All" tab. */
export const ALL_ITEMS_PER_CATEGORY = 4;

export const PRODUCE = {
  fruits: [
    { name: 'Alphonso Mango', file: 'Alphonso Mango.jpg' },
    { name: 'Apple', file: 'Apple.jpg' },
    { name: 'Banana (Plantain Nendran)', file: 'Banana (PlantainNendran).jpg' },
    { name: 'Black Grapes', file: 'Black Grapes.jpg' },
    { name: 'Custard Apple', file: 'Custard Apple.jpg' },
    { name: 'Dragon Fruit', file: 'Dragon Fruit.jpg' },
    { name: 'Green Grapes', file: 'Green Grapes.jpg' },
    { name: 'Jackfruit', file: 'Jackfruit.jpg' },
    { name: 'King Coconut', file: 'King Coconut.jpg' },
    { name: 'Mangosteen', file: 'Mangosteen.jpg' },
    { name: 'Oranges', file: 'Oranges.jpg' },
    { name: 'Papaya', file: 'Papaya.jpg' },
    { name: 'Pineapple', file: 'Pineapple.jpg' },
    { name: 'Pomegranate', file: 'Pomegranate.jpg' },
    { name: 'Red Banana', file: 'Red Banana.jpg' },
    { name: 'Sapota', file: 'Sapota.jpg' },
  ],
  vegetables: [
    { name: 'Ash Gourd', file: 'Ash Gourd.jpg' },
    { name: 'Baby Corn', file: 'Baby Corn.jpg' },
    { name: 'Bitter Gourd', file: 'Bitter Gourd.jpg' },
    { name: 'Bottle Gourd', file: 'Bottle Gourd.jpg' },
    { name: 'Cabbage', file: 'Cabbage.jpg' },
    { name: 'Capsicum', file: 'Capsicum.jpg' },
    { name: 'Cauliflower', file: 'Cauliflower.jpg' },
    { name: 'Cluster Beans', file: 'Cluster Beans.jpg' },
    { name: 'Corn', file: 'Corn.jpg' },
    { name: 'Drumstick', file: 'Drumstick.jpg' },
    { name: 'Eggplant', file: 'Eggplant.jpg' },
    { name: 'Green Chillies', file: 'Green Chillies.jpg' },
    { name: 'Ivy Gourd', file: 'Ivy Gourd.jpg' },
    { name: 'Okra', file: 'Okra.jpg' },
    { name: 'Snake Gourd', file: 'Snake Gourd.jpg' },
    { name: 'Tomato', file: 'Tomato.jpg' },
  ],
  roots: [
    { name: 'Arrowroot', file: 'Arrowroot.jpg' },
    { name: 'Baby Potatoes', file: 'Baby Potatoes.jpg' },
    { name: 'Beetroot', file: 'Beetroot.jpg' },
    { name: 'Carrot', file: 'Carrot.jpg' },
    { name: 'Cassava Root', file: 'Cassava Root.jpg' },
    { name: 'Elephant Foot Yam', file: 'Elephant Foot Yam.jpg' },
    { name: 'Garlic', file: 'Garlic.jpg' },
    { name: 'Ginger', file: 'Ginger.jpg' },
    { name: 'Lotus Root', file: 'Lotus Root.jpg' },
    { name: 'Parsnip', file: 'Parsnip.jpg' },
    { name: 'Potato', file: 'Potato.jpg' },
    { name: 'Purple Yam', file: 'Purple Yam.jpg' },
    { name: 'Red Onion', file: 'Red Onion.jpg' },
    { name: 'Shallots', file: 'Shallots.jpg' },
    { name: 'Sweet Potato', file: 'Sweet Potato.jpg' },
    { name: 'Turnip', file: 'Turnip.jpg' },
  ],
  others: [
    { name: 'Areca Nut', file: 'Areca Nut.jpg' },
    { name: 'Black Pepper', file: 'Black Pepper.jpg' },
    { name: 'Cashew Nuts', file: 'Cashew Nuts.jpg' },
    { name: 'Cinnamon', file: 'Cinnamon.jpg' },
    { name: 'Cloves', file: 'Cloves.jpg' },
    { name: 'Coriander Seeds', file: 'Coriander Seeds.jpg' },
    { name: 'Cumin Seeds', file: 'Cumin Seeds.jpg' },
    { name: 'Dry Red Chillies', file: 'Dry Red Chillies.jpg' },
    { name: 'Fennel Seeds', file: 'Fennel Seeds.jpg' },
    { name: 'Fenugreek Seeds', file: 'Fenugreek Seeds.jpg' },
    { name: 'Green Cardamom', file: 'Green Cardamom.jpg' },
    { name: 'Mace', file: 'Mace.jpg' },
    { name: 'Mustard Seeds', file: 'Mustard Seeds.jpg' },
    { name: 'Nutmeg', file: 'Nutmeg.jpg' },
    { name: 'Star Anise', file: 'Star Anise.jpg' },
    { name: 'Tamarind', file: 'Tamarind.jpg' },
  ],
};
