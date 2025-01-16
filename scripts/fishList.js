import { database } from './aquariumData.js';

export const generateFishHTML = (fishArray, categoryName) => {
    const fishHTML = fishArray
        .map(fish => `
            <section class="fish-card">
                <h2>${fish.name}</h2>
                <h3>${fish.species}</h3>
                <p>Length: ${fish.length} inches</p>
                <p>Diet: ${fish.diet}</p>
                <p>Location: ${fish.location}</p>
                <div class="image-container">
                    <img src="${fish.image}">
                </div>
            </section>
        `)
        .join('');

    return `
        <article class="fish-category">
            <h1>${categoryName}</h1>
            ${fishHTML}
        </article>
    `;
};



/*loops through each fish in the database.fish array and 
generates HTML for each fish, wrapping the details
 (name, species, length, diet, location, and image) inside a <section class="fish">. 
 All the sections are enclosed in an <article> tag,
 and the final HTML is returned to be rendered in the DOM*/

