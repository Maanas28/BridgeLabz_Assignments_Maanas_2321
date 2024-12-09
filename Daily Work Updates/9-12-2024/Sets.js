// JavaScript Sets
// A Set is a collection of unique values. Each value can only occur once in a Set.
// The values can be of any type: primitive values or objects.

console.log("=== Creating Sets ===");

// 1. Creating a Set by passing an array to `new Set()`
const letters = new Set(["a", "b", "c"]);
console.log("Set created by passing an array:", letters);

// 2. Creating an empty Set and adding values using `add()` method
const alphabets = new Set();
alphabets.add("a");
alphabets.add("b");
alphabets.add("c");
console.log("Set created using add() method:", alphabets);

console.log("\n=== Iterating Through Sets ===");

// Listing all the elements of the Set using a `for...of` loop
let text = "";
for (let x of letters) {
    text += x + " ";
}
console.log("Elements in the Set using for...of loop:", text.trim());

// Using `forEach` method
console.log("Elements in the Set using forEach method:");
letters.forEach(function (value) {
    process.stdout.write(value + " ");
});
console.log();

console.log("\n=== Set Methods ===");

// 1. `has()` method - Checks if a value exists in the Set
let answer = letters.has("a");
console.log("Does the Set contain 'a'? ->", answer);

// 2. `values()` method - Returns an iterator object with values in the Set
console.log("Values in the Set using values() method:");
for (const entry of letters.values()) {
    process.stdout.write(entry + " ");
}
console.log();

// 3. `keys()` method - Returns the same as `values()` (Sets have no keys)
console.log("Keys in the Set using keys() method:");
for (const entry of letters.keys()) {
    process.stdout.write(entry + " ");
}
console.log();

// 4. `entries()` method - Returns an iterator with [value, value] pairs
console.log("Entries in the Set using entries() method:");
let text2 = "";
const myIterator = letters.entries();
for (const entry of myIterator) {
    text2 += `[${entry[0]}, ${entry[1]}] `;
}
console.log(text2.trim());

// Checking typeof and instance
console.log("\n=== Additional Information ===");
console.log("Type of letters:", typeof letters); // Returns "object"
console.log("Is letters an instance of Set?", letters instanceof Set); // Returns true
