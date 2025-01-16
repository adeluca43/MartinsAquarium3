import { generateFishHTML } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'
import { mostHolyFish, soldierFish, regularFish } from './filterFish.js'


// Generate HTML for all fish categories
const holyFishHTML = generateFishHTML(mostHolyFish(), 'Most Holy Fish');
const soldierFishHTML = generateFishHTML(soldierFish(), 'Soldier Fish');
const regularFishHTML = generateFishHTML(regularFish(), 'Regular Fish');

// Combine all HTML
const combinedHTML = `${holyFishHTML}${soldierFishHTML}${regularFishHTML}`;

// Update the DOM with the combined HTML
const fishListContainer = document.getElementById('fishList');
fishListContainer.innerHTML = combinedHTML;

// Generate and render care tips
const tipHTML = tipList();
const tipListContainer = document.getElementById('tipList');
tipListContainer.innerHTML = tipHTML;

// Generate and render locations
const locationHTML = locationList();
const locationListContainer = document.getElementById('locationList');
locationListContainer.innerHTML = locationHTML;




