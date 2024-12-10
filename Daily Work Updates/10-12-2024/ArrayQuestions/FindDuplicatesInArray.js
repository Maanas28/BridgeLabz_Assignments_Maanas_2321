let arr = [1, 2, 2, 3, 4, 5, 6, 7, 4];
console.log("Initial array:", arr);

let seen = new Set();
let duplicates = new Set();
for (let num of arr) {
    if (seen.has(num)) {
        duplicates.add(num);
    } else {
        seen.add(num);
    }
}
console.log("Duplicate elements:", Array.from(duplicates).join(", "));
console.log("-----------------------------------------------");