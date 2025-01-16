import { database } from './aquariumData.js';

export const fishList = () => {
     let html = '<article>'; // Initialize the HTML string 

    html += '<h1>Fish</h1>' //adds header above the fish

    database.fish.forEach(fish => {
        html += `
            <section class="fish-card">
                <h2>${fish.name}</h2>
                <h3>${fish.species}</h3>
                <div>Length: ${fish.length} inches</div>
                <div>Diet: ${fish.diet}</div>
                <div>Location: ${fish.location}</div>
                <div class="image-container">
                <img src="${fish.image}"> </div>
            </section>
        `;
    });

    html += '</article>'; 

    return html; 
}

/*loops through each fish in the database.fish array and 
generates HTML for each fish, wrapping the details
 (name, species, length, diet, location, and image) inside a <section class="fish">. 
 All the sections are enclosed in an <article> tag,
 and the final HTML is returned to be rendered in the DOM*/

