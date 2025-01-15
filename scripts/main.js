import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'

// Generate the fish list
const fishHTML = fishList()

// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()

// Render each HTML string to the correct DOM element
document.getElementById('fish-list').innerHTML = fishHTML;
document.getElementById('tip-list').innerHTML = tipHTML;
document.getElementById('location-list').innerHTML = locationHTML;

fishListContainer.innerHTML = fishHTML;

import { tipList } from './tipList.js'
import { locationList } from './locationList.js'