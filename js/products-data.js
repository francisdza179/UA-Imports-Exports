/**
 * ============================================================================
 *  OUR PRODUCTS PAGE — SINGLE SOURCE OF TRUTH
 * ============================================================================
 *  This file is the ONLY place that defines what the Products page displays.
 *  The grid is rendered from this data by js/products-render.js, so the
 *  products can never be corrupted by edits made elsewhere in products.html,
 *  other sections, or other pages.
 *
 *  - Every category contains exactly 30 items (the 30 images found in its
 *    namesake folder under assets/images/Our Full Product Range/).
 *  - Items are kept in alphabetical order.
 *  - "origin" reuses the text already on the page where the name matches;
 *    items new to the page fall back to "South India".
 *
 *  To change the catalog, edit ONLY this file.
 * ============================================================================
 */

export const CATEGORY_ORDER = [
  "fruits",
  "vegetables",
  "roots",
  "others"
];

export const CATEGORY_FOLDERS = {
  "fruits": "Our Full Product Range/Fresh Fruits",
  "vegetables": "Our Full Product Range/Fresh Vegetables",
  "roots": "Our Full Product Range/Roots, Bulbs & Tubers",
  "others": "Our Full Product Range/Seeds, Spices, Nuts & Others"
};

export const CATEGORY_TITLES = {
  "fruits": "Fresh Fruits",
  "vegetables": "Fresh Vegetables",
  "roots": "Roots, Bulbs & Tubers",
  "others": "Seeds, Spices, Nuts & Others"
};

export const PRODUCTS = {
  fruits: [
    { name: "Alphonso Mango", file: "Alphonso Mango.jpg", origin: "Ratnagiri & Devgad" },
    { name: "Apple", file: "Apple.jpg", origin: "Himachal & Kashmir" },
    { name: "Banana (Plantain Nendran)", file: "Banana (PlantainNendran).jpg", origin: "Kerala & Tamil Nadu" },
    { name: "Black Grapes", file: "Black Grapes.jpg", origin: "Maharashtra & Karnataka" },
    { name: "Carambola (Star Fruit)", file: "Carambola (Star Fruit).jpg", origin: "Kerala & Tamil Nadu" },
    { name: "Custard Apple", file: "Custard Apple.jpg", origin: "Maharashtra & Andhra" },
    { name: "Dragon Fruit", file: "Dragon Fruit.jpg", origin: "Karnataka & Gujarat" },
    { name: "Green Grapes", file: "Green Grapes.jpg", origin: "Maharashtra & Andhra" },
    { name: "Guava", file: "Guava.jpg", origin: "Uttar Pradesh & Andhra" },
    { name: "Hog Plums", file: "Hog Plums.jpg", origin: "Kerala & Karnataka" },
    { name: "Indian Jujube (Ber)", file: "Indian Jujube (Ber).jpg", origin: "Tamil Nadu & Gujarat" },
    { name: "Jackfruit", file: "Jackfruit.jpg", origin: "Kerala & Karnataka" },
    { name: "Jamun", file: "Jamun.jpg", origin: "Tamil Nadu & Maharashtra" },
    { name: "King Coconut", file: "King Coconut.jpg", origin: "Kerala & Tamil Nadu" },
    { name: "Litchi", file: "Litchi.jpg", origin: "Bihar & Uttarakhand" },
    { name: "Mangosteen", file: "Mangosteen.jpg", origin: "Kerala & Karnataka" },
    { name: "Muskmelon", file: "Muskmelon.jpg", origin: "Tamil Nadu & Andhra" },
    { name: "Oranges", file: "Oranges.jpg", origin: "Nagpur & Coorg" },
    { name: "Papaya", file: "Papaya.jpg", origin: "Tamil Nadu & Andhra" },
    { name: "Passion Fruit", file: "Passion Fruit.jpg", origin: "Kerala & Nagaland" },
    { name: "Pineapple", file: "Pineapple.jpg", origin: "Kerala & West Bengal" },
    { name: "Pomegranate", file: "Pomegranate.jpg", origin: "Maharashtra & Karnataka" },
    { name: "Pomelo", file: "Pomelo.jpg", origin: "Karnataka & Kerala" },
    { name: "Rambutan", file: "Rambutan.jpg", origin: "Kerala & Karnataka" },
    { name: "Red Banana", file: "Red Banana.jpg", origin: "Tamil Nadu & Kerala" },
    { name: "Sapota", file: "Sapota.jpg", origin: "Gujarat & Karnataka" },
    { name: "Sugarcane", file: "Sugarcane.jpg", origin: "Tamil Nadu & Maharashtra" },
    { name: "Sweet Lime", file: "Sweet Lime.jpg", origin: "Maharashtra & Andhra" },
    { name: "Watermelon", file: "Watermelon.jpg", origin: "Tamil Nadu & Karnataka" },
    { name: "Wood-apple", file: "Wood-apple.jpg", origin: "Tamil Nadu & Andhra" },
  ],
  vegetables: [
    { name: "Ash Gourd", file: "Ash Gourd.jpg", origin: "Tamil Nadu & Andhra" },
    { name: "Baby Corn", file: "Baby Corn.jpg", origin: "Tamil Nadu & Andhra" },
    { name: "Baby Potatoes", file: "Baby Potatoes.png", origin: "Tamil Nadu & Karnataka" },
    { name: "Beetroot", file: "Beetroot.png", origin: "Tamil Nadu & Maharashtra" },
    { name: "Bitter Gourd", file: "Bitter Gourd.jpg", origin: "Tamil Nadu & Andhra" },
    { name: "Bottle Gourd", file: "Bottle Gourd.jpg", origin: "Tamil Nadu & Andhra" },
    { name: "Broad Beans (Avarakkai)", file: "Broad Beans (Avarakkai).png", origin: "Tamil Nadu & Karnataka" },
    { name: "Cabbage", file: "Cabbage.jpg", origin: "Tamil Nadu & Karnataka" },
    { name: "Capsicum", file: "Capsicum.jpg", origin: "Tamil Nadu & Karnataka" },
    { name: "Cauliflower", file: "Cauliflower.jpg", origin: "Tamil Nadu & Maharashtra" },
    { name: "Celery", file: "Celery.png", origin: "Tamil Nadu & Himachal" },
    { name: "Cluster Beans", file: "Cluster Beans.jpg", origin: "Tamil Nadu & Gujarat" },
    { name: "Corn", file: "Corn.png", origin: "Tamil Nadu & Karnataka" },
    { name: "Drumstick", file: "Drumstick.jpg", origin: "Tamil Nadu & Andhra" },
    { name: "Eggplant", file: "Eggplant.jpg", origin: "Tamil Nadu & Maharashtra" },
    { name: "French Beans", file: "French Beans.png", origin: "Tamil Nadu & Karnataka" },
    { name: "Ivy Gourd", file: "Ivy Gourd.jpg", origin: "Tamil Nadu & Andhra" },
    { name: "Kohlrabi", file: "Kohlrabi.jpg", origin: "Tamil Nadu & Karnataka" },
    { name: "Lemon", file: "Lemon.jpg", origin: "Tamil Nadu & Andhra" },
    { name: "Long Beans", file: "Long Beans.jpg", origin: "Tamil Nadu & Kerala" },
    { name: "Okra", file: "Okra.jpg", origin: "Tamil Nadu & Andhra" },
    { name: "Pointed Gourd", file: "Pointed Gourd.jpg", origin: "Tamil Nadu & West Bengal" },
    { name: "Pumpkin", file: "Pumpkin.png", origin: "Tamil Nadu & Andhra" },
    { name: "Raw Banana", file: "Raw Banana.png", origin: "Tamil Nadu & Kerala" },
    { name: "Red Cabbage", file: "Red Cabbage.png", origin: "Tamil Nadu & Karnataka" },
    { name: "Ridge Gourd", file: "Ridge Gourd.jpg", origin: "Tamil Nadu & Andhra" },
    { name: "Snake Gourd", file: "Snake Gourd.jpg", origin: "Tamil Nadu & Kerala" },
    { name: "Spring Onion", file: "Spring Onion.png", origin: "Tamil Nadu & Maharashtra" },
    { name: "Tomato", file: "Tomato.jpg", origin: "Tamil Nadu & Andhra" },
    { name: "Zucchini", file: "Zucchini.png", origin: "Tamil Nadu & Karnataka" },
  ],
  roots: [
    { name: "Arrowroot", file: "Arrowroot.png", origin: "Tamil Nadu & Kerala" },
    { name: "Baby Potatoes", file: "Baby Potatoes.jpg", origin: "Tamil Nadu & Karnataka" },
    { name: "Beetroot", file: "Beetroot.jpg", origin: "Tamil Nadu & Maharashtra" },
    { name: "Carrot", file: "Carrot.jpg", origin: "Tamil Nadu & Karnataka" },
    { name: "Cassava Root", file: "Cassava Root.jpg", origin: "Tamil Nadu & Kerala" },
    { name: "Coleus Root", file: "Coleus Root.jpg", origin: "Tamil Nadu & Kerala" },
    { name: "Colocasia", file: "Colocasia.jpg", origin: "Kerala & West Bengal" },
    { name: "Elephant Foot Yam", file: "Elephant Foot Yam.jpg", origin: "Tamil Nadu & Andhra" },
    { name: "Fresh Burdock Root", file: "Fresh Burdock Root.jpg", origin: "Himachal & Kashmir" },
    { name: "Fresh Horseradish", file: "Fresh Horseradish.jpg", origin: "Himachal & Uttarakhand" },
    { name: "Fresh Sunchokes", file: "Fresh Sunchokes.jpg", origin: "Himachal & Uttarakhand" },
    { name: "Galangal", file: "Galangal.png", origin: "Kerala & Tamil Nadu" },
    { name: "Garlic", file: "Garlic.jpg", origin: "Tamil Nadu & Gujarat" },
    { name: "Ginger", file: "Ginger.jpg", origin: "Kerala & Karnataka" },
    { name: "Licorice Root", file: "Licorice Root.jpg", origin: "Gujarat & Rajasthan" },
    { name: "Lotus Root", file: "Lotus Root.jpg", origin: "Kerala & West Bengal" },
    { name: "Lotus Stem", file: "Lotus Stem.jpg", origin: "Kerala & West Bengal" },
    { name: "Parsnip", file: "Parsnip.jpg", origin: "Himachal & Kashmir" },
    { name: "Potato", file: "Potato.jpg", origin: "Tamil Nadu & Gujarat" },
    { name: "Purple Yam", file: "Purple Yam.jpg", origin: "Kerala & Tamil Nadu" },
    { name: "Red Onion", file: "Red Onion.jpg", origin: "Tamil Nadu & Maharashtra" },
    { name: "Shallots", file: "Shallots.jpg", origin: "Tamil Nadu" },
    { name: "Sweet Potato", file: "Sweet Potato.jpg", origin: "Tamil Nadu & Andhra" },
    { name: "Taro Root", file: "Taro Root.jpg", origin: "Tamil Nadu & Kerala" },
    { name: "Turmeric Root", file: "Turmeric Root.png", origin: "Tamil Nadu & Andhra" },
    { name: "Turnip", file: "Turnip.jpg", origin: "Tamil Nadu & Himachal" },
    { name: "Vetiver Root", file: "Vetiver Root.jpg", origin: "Tamil Nadu & Kerala" },
    { name: "White Onion", file: "White Onion.jpg", origin: "Tamil Nadu & Maharashtra" },
    { name: "White Radish", file: "White Radish.jpg", origin: "Tamil Nadu & Karnataka" },
    { name: "Yam Beans", file: "Yam Beans.jpg", origin: "Kerala & Tamil Nadu" },
  ],
  others: [
    { name: "Areca Nut", file: "Areca Nut.jpg", origin: "Kerala & Karnataka" },
    { name: "Arrowroot", file: "Arrowroot.jpg", origin: "Tamil Nadu & Kerala" },
    { name: "Bay Leaves", file: "Bay Leaves.jpg", origin: "Kerala & Northeast" },
    { name: "Black Cardamom", file: "Black Cardamom.jpg", origin: "Sikkim & West Bengal" },
    { name: "Black Pepper", file: "Black Pepper.jpg", origin: "Kerala & Karnataka" },
    { name: "Cashew Nuts", file: "Cashew Nuts.jpg", origin: "Kerala & Tamil Nadu" },
    { name: "Cinnamon", file: "Cinnamon.jpg", origin: "Kerala & Tamil Nadu" },
    { name: "Cloves", file: "Cloves.jpg", origin: "Kerala & Tamil Nadu" },
    { name: "Coconut Husk", file: "Coconut Husk.jpg", origin: "Tamil Nadu & Kerala" },
    { name: "Coriander Seeds", file: "Coriander Seeds.jpg", origin: "Gujarat & Rajasthan" },
    { name: "Cumin Seeds", file: "Cumin Seeds.jpg", origin: "Gujarat & Rajasthan" },
    { name: "Curry Powder", file: "Curry Powder.jpg", origin: "Kerala & Tamil Nadu" },
    { name: "Dried Ginger", file: "Dried Ginger.jpg", origin: "Kerala & Karnataka" },
    { name: "Dry Red Chillies", file: "Dry Red Chillies.jpg", origin: "Andhra & Tamil Nadu" },
    { name: "Fennel Seeds", file: "Fennel Seeds.jpg", origin: "Gujarat & Rajasthan" },
    { name: "Fenugreek Seeds", file: "Fenugreek Seeds.jpg", origin: "Gujarat & Rajasthan" },
    { name: "Galangal", file: "Galangal.jpg", origin: "Kerala & Tamil Nadu" },
    { name: "Green Cardamom", file: "Green Cardamom.jpg", origin: "Kerala & Tamil Nadu" },
    { name: "Mace", file: "Mace.jpg", origin: "Kerala & Tamil Nadu" },
    { name: "Moringa Powder", file: "Moringa Powder.jpg", origin: "Tamil Nadu & Andhra" },
    { name: "Mustard Seeds", file: "Mustard Seeds.jpg", origin: "Gujarat & Uttar Pradesh" },
    { name: "Nutmeg", file: "Nutmeg.jpg", origin: "Kerala & Tamil Nadu" },
    { name: "Psyllium Seed Husk", file: "Psyllium Seed Husk.jpg", origin: "Gujarat & Rajasthan" },
    { name: "Sesame Seeds", file: "Sesame Seeds.jpg", origin: "Tamil Nadu & Gujarat" },
    { name: "Star Anise", file: "Star Anise.jpg", origin: "Kerala & Northeast" },
    { name: "Sugarcane", file: "Sugarcane.png", origin: "Tamil Nadu & Maharashtra" },
    { name: "Sunflower Seeds", file: "Sunflower Seeds.jpg", origin: "Karnataka & Maharashtra" },
    { name: "Tamarind", file: "Tamarind.jpg", origin: "Tamil Nadu & Andhra" },
    { name: "Turmeric Root", file: "Turmeric Root.jpg", origin: "Tamil Nadu & Andhra" },
    { name: "White Pepper", file: "White Pepper.jpg", origin: "Kerala & Karnataka" },
  ],
};
