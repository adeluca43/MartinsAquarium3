import { database } from './aquariumData.js';


export const locationList = () => {
    let html = '<article class="locations">';
// create and export function locationList, start HTML for the locations article

html += '<h1>Location</h1>' // creates header location
    
    database.locations.forEach(location => { 
        html += `
            <section class="location">
                <h2>${location.name}</h2>
                <h3>${location.country}</h3>
                <p>${location.description}</p>
            </section>
        `;
    });
    html += '</article>';

    return html;
};
/*loops through each location in the database.locations list and 
adds its details (name, country, and description) into an HTML structure. 
Each location is wrapped in a <section class="location"> ( putting the info in a container element)
with its name in an <h2>, country in an <h3>, and description in a <p>(paragraph).
After all locations are iterated(dealt with), it closes the outer <article> tag 
and returns the complete HTML */