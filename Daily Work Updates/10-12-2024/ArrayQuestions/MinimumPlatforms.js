function findMinimumPlatforms(arrivals, departures) {
    arrivals.sort((a, b) => a - b);
    departures.sort((a, b) => a - b);

    let platformsNeeded = 0;
    let maxPlatforms = 0;
    let i = 0, j = 0;

    while (i < arrivals.length && j < departures.length) {
        if (arrivals[i] <= departures[j]) {
            platformsNeeded++;
            maxPlatforms = Math.max(maxPlatforms, platformsNeeded);
            i++;
        } else {
            platformsNeeded--;
            j++;
        }
    }

    return maxPlatforms;
}

const arrivals = [900, 940, 950, 1100, 1500, 1800];
const departures = [910, 1200, 1120, 1130, 1900, 2000];

console.log("Minimum Platforms Required:", findMinimumPlatforms(arrivals, departures));
