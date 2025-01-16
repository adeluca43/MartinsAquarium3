import { database } from './aquariumData.js'

// below creates and exports the function TipList
export const tipList = () => {
    let html = '<article>'; 

    html += '<h1>Tips</h1>'; // Adds header above the tips

    // Loop through each tip and generate HTML for each one
    database.tips.forEach(tip => {
        html += `
            <section class="tip">
                <h3>${tip.topic}</h3>
                <p>${tip.text}</p>
            </section>
        `;
    });

    html += '</article>'; // Close the article tag ( means ending this section of info like starting and stopping a paragraph)

    return html; // Return the generated HTML string
};
