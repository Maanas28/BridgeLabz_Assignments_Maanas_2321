console.log("\n=== Traversal In an Array ===");
console.log("----------------------------------");


// 2. Iterating Over an Array
const alphabets = ["a", "b", "c"];
process.stdout.write("Iterating over array: ");
for (let x = 0; x  < alphabets.length; x++) {
    process.stdout.write(alphabets[x] + " "); // Write each element in a single line
}
console.log(); // Line break for console output

console.log("----------------------------------");
console.log("Custom Iterator Example");

// Custom Iterator
// An object becomes an iterator when it implements the `next` method.
// `next` should return an object with two properties:
// 1. `value` - The next value
// 2. `done` - A boolean indicating if the iteration is complete

function myNumbers() {
    let n = 0;
    return {
        next: function () {
            n += 10; // Increment by 10
            return {
                value: n,
                done: false, // Always false in this example (infinite iterator)
            };
        },
    };
}

const iterator = myNumbers();

console.log("Using custom iterator:");
console.log("First call:", iterator.next());
console.log("Second call:", iterator.next());
console.log("Third call:", iterator.next());

console.log("----------------------------------");
// Initialize the array
let arr = [1, 2, 3, 4, 5, 6];

// Iterating over the array using forEach
console.log("Using forEach:");
arr.forEach((value, index) => {
    console.log(`Index ${index}:`, value); // Logs each element and its index
});
console.log("----------------------------------");
// Using for...of to iterate over the values in the array
console.log("Using for...of:");
/*
 * The for...of loop iterates over the values of an iterable (like an array).
 * It provides direct access to the elements themselves.
 */
for (let value of arr) {
    console.log("Value:", value); // Log each value in the array
}
console.log("----------------------------------");

// Using for...in to iterate over the indices in the array
console.log("Using for...in:");
/*
 * The for...in loop iterates over the keys (or indices) of an array or object.
 * It is more suited for objects but can also be used with arrays to access indices.
 */
for (let index in arr) {
    console.log(`Index: ${index}, Value: ${arr[index]}`); // Log each index and its corresponding value
}
console.log("----------------------------------");

// Using the map method to transform array elements
console.log("Using map:");
/*
 * The map method creates a new array by applying a function to each element
 * of the original array. It does not modify the original array.
 */
var multi = arr.map((value) => {
    return value * value; // Multiply each element by itself
});
console.log(`The result of the multiplication is: ` + multi.forEach((value) => {
    console.log(value);
})); // Log the resulting array
console.log("----------------------------------");

console.log("Using filter: ");
/*
 * The filter method creates a new array containing only the elements
 * that satisfy a specific condition. The original array remains unchanged.
 */

var filtered = arr.filter((value) => {
    return value > 10;
})

console.log("Original Array:", arr); // Log the original array
console.log("Filtered Array (elements > 10):", filtered); // Log the filtered array
console.log("----------------------------------");

console.log("Using reduce: ");
/*
    Reduce method reduces the array to one value.. it perfoms the operation...
*/
var result = arr.reduce((value,arr) => {
    return value+value;
});

console.log(`The result of the sum of all the array numbers is ${result}`);
console.log("----------------------------------");

console.log("Using the Array.from method to generate array from String: " + Array.from("Maanas"))

console.log("----------------------------------");

console.log("Using every:");
/*
 * The every method tests whether all elements in the array pass the provided
 * test (implemented by a function). It returns a boolean value.
 */
let isAllPositive = arr.every((value) => value > 0);
console.log("Are all elements positive?", isAllPositive);
console.log("----------------------------------");

console.log("Using some:");
/*
 * The some method tests whether at least one element in the array passes the
 * provided test (implemented by a function). It returns a boolean value.
 */
let hasEven = arr.some((value) => value % 2 === 0);
console.log("Does the array have any even numbers?", hasEven);
console.log("----------------------------------");

console.log("Using keys:");
/*
 * The keys method returns a new Array Iterator object that contains the keys
 * (or indices) for each index in the array.
 */
let keysIterator = arr.keys();
for (let key of keysIterator) {
    console.log("Key:", key);
}
console.log("----------------------------------");

console.log("Using values:");
/*
 * The values method returns a new Array Iterator object that contains the
 * values for each index in the array.
 */
let valuesIterator = arr.values();
for (let value of valuesIterator) {
    console.log("Value:", value);
}
console.log("----------------------------------");

console.log("Using entries:");
/*
 * The entries method returns a new Array Iterator object that contains
 * key-value pairs for each index in the array.
 */
let entriesIterator = arr.entries();
for (let [key, value] of entriesIterator) {
    console.log(`Key: ${key}, Value: ${value}`);
}
console.log("----------------------------------");
