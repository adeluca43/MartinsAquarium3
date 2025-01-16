import { database } from './aquariumData.js';

export const mostHolyFish = () => {
    const holyFish = [];
    for (const fish of database.fish) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish);
        }
    }

    return holyFish;
};

export const soldierFish = () => {
    const soldiers = [];
    for (const fish of database.fish) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish);
        }
    }

    return soldiers;
};

export const regularFish = () => {
    const regulars = [];
    for (const fish of database.fish) {
        if (fish.length < 3 && fish.length >5 ) {
            regulars.push(fish);
        }
    }

    return regulars;
};