// JavaScript Destructuring
// Destructuring allows unpacking values from arrays, objects, or strings into distinct variables.

console.log("=== Object Destructuring ===");

// Object Destructuring
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
};

// Destructuring with default values
let { firstName, lastName, country = "US" } = person;
console.log(`First Name: ${firstName}, Last Name: ${lastName}, Country: ${country}`);

console.log("\n=== String Destructuring ===");

// String Destructuring
let name = "W3Schools";
let [a1, a2, a3, a4, a5] = name;
console.log(`Destructured characters from string '${name}': ${a1}, ${a2}, ${a3}, ${a4}, ${a5}`);

console.log("\n=== Array Destructuring ===");

// Array Destructuring
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// Skipping elements and destructuring
let [fruit1, , , fruit2] = fruits;
console.log(`Fruit 1: ${fruit1}, Fruit 2: ${fruit2}`);

// Destructuring specific indices
let { [0]: fruita, [1]: fruitb } = fruits;
console.log(`Element at index 0: ${fruita}, Element at index 1: ${fruitb}`);

console.log("\n=== Rest Property in Destructuring ===");

// Rest Property
const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
let [primary1, primary2, ...restColors] = colors;
console.log(`Primary Colors: ${primary1}, ${primary2}`);
console.log(`Other Colors: ${restColors.join(", ")}`);

console.log("\n=== Destructuring and Maps ===");

// Destructuring Maps
const map = new Map([
    ["name", "Alice"],
    ["age", 30],
    ["country", "UK"],
]);

// Destructuring Map entries
for (const [key, value] of map) {
    console.log(`Key: ${key}, Value: ${value}`);
}

console.log("\n=== Swapping Variables ===");

// Swapping Variables using Destructuring
let x = 5, y = 10;
console.log(`Before Swap: x = ${x}, y = ${y}`);
[x, y] = [y, x];
console.log(`After Swap: x = ${x}, y = ${y}`);
