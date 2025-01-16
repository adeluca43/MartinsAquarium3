import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'

// Generate the fish list
const fishHTML = fishList()
// Select the container element
const fishListContainer = document.getElementById('fishList');
// Render HTML string to the correct DOM element
fishListContainer.innerHTML = fishHTML;

// repeat for tips
const tipHTML = tipList()
const tipListContainer = document.getElementById('tipList');
tipListContainer.innerHTML = tipHTML;

// repeat for location
const locationHTML = locationList()
const locationListContainer = document.getElementById('locationList');
locationListContainer.innerHTML = locationHTML;