const array = [1, 2, 2, 3, 4, 4, 4, 5, 6, 6, 7, 1, 2, 3];
console.log("Array:", array);

const occurrences = {};


for (const num of array) {
    if (occurrences[num]) {
        occurrences[num]++; 
    } else {
        occurrences[num] = 1; 
    }
}

console.log("Occurrences of integers:");
for (const key in occurrences) {
    console.log(`Number ${key} occurs ${occurrences[key]} times.`);
}
console.log("-----------------------------------------------");
