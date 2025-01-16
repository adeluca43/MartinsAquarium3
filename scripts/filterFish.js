import { database } from './aquariumData.js';

export const mostHolyFish = () => {
    return database.fish.filter(fish => fish.length % 3 === 0).slice(0,3);
};

export const soldierFish = () => {
    return database.fish.filter(fish => fish.length % 5 === 0).slice(0,3);
};

/*export const regularFish = () => {
    const regulars = [];
    for (const fish of database.fish) {
        if (fish.length < 3 && fish.length >5 ) {
            regulars.push(fish);
        }
    }

    return regulars;
}; */

export const regularFish = () => {
    return database.fish.filter(fish => fish.length % 3 !== 0 && fish.length % 5 !== 0).slice(0,2);
};