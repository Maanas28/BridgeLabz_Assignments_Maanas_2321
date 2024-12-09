// Iterators in JavaScript
// Iterators allow us to loop over a sequence of elements.
// Examples include iterating over strings, arrays, and custom objects.

console.log("=== Iterating Over a String ===");

// 1. Iterating Over a String
const Name = "Maanas";
let text = "";
for (let x of Name) {
    text += x; // Concatenate each character to text
}
console.log("Iterating over string:", text);

console.log("\n=== Iterating Over an Array ===");

// 2. Iterating Over an Array
const alphabets = ["a", "b", "c"];
process.stdout.write("Iterating over array: ");
for (let x of alphabets) {
    process.stdout.write(x + " "); // Write each element in a single line
}
console.log(); // Line break for console output

console.log("\n=== Custom Iterator Example ===");

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
