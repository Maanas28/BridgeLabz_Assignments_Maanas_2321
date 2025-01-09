console.log("===Ways to Search Elements in an Array===");
console.log("----------------------------------");

let arr = [1,3,4,2,3,4,5,4,5,6];

// 1. Using indexOf
console.log("Using indexOf:");
let index = arr.indexOf(3);
console.log("Index of 3:", index);
console.log("----------------------------------");

// 2. Using lastIndexOf
console.log("Using lastIndexOf:");
let lastIndex = arr.lastIndexOf(3);
console.log("Last index of 3:", lastIndex);
console.log("----------------------------------");

// 3. Using includes
console.log("Using includes:");
let includesValue = arr.includes(4);
console.log("Does the array include 4?", includesValue);
console.log("----------------------------------");

// 4. Using find
console.log("Using find:");
let foundValue = arr.find(value => value > 4);
console.log("First value greater than 4:", foundValue);
console.log("----------------------------------");

// 5. Using findIndex
console.log("Using findIndex:");
let foundIndex = arr.findIndex(value => value > 4);
console.log("Index of first value greater than 4:", foundIndex);
console.log("----------------------------------");

// 6. Using some
console.log("Using some:");
let hasOdd = arr.some(value => value % 2 !== 0);
console.log("Does the array have any odd numbers?", hasOdd);
console.log("----------------------------------");

// 7. Using every
console.log("Using every:");
let allGreaterThanZero = arr.every(value => value > 0);
console.log("Are all elements greater than 0?", allGreaterThanZero);
console.log("----------------------------------");

// 8. Using filter
console.log("Using filter:");
let filteredValues = arr.filter(value => value > 3);
console.log("Values greater than 3:", filteredValues);
console.log("----------------------------------");

// 9. Using forEach
console.log("Using forEach:");
console.log("Checking for value 5:");
arr.forEach(value => {
    if (value === 5) {
        console.log("Found 5 in the array.");
    }
});
console.log("----------------------------------");

// 10. Using a custom for loop
console.log("Using a custom for loop:");
let isFound = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 6) {
        isFound = true;
        console.log("6 found at index:", i);
        break;
    }
}
if (!isFound) console.log("6 not found in the array.");
console.log("----------------------------------");
