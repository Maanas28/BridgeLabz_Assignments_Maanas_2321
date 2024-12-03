// Initialize the array
let arr = [1, 2, 3, 4, 5, 6];
console.log("Initial Array:", arr);
console.log("----------------------------------");

// Accessing the values of the array
console.log("Accessing values:");
console.log("arr[0]:", arr[0]); // Access the first element of the array
console.log("arr[2]:", arr[2]); // Access the third element of the array
console.log("----------------------------------");

// Finding the length of the array
console.log("Length of the array:", arr.length); // Returns the total number of elements in the array
console.log("----------------------------------");

// Changing the values of the array
console.log("Changing values:");
arr[3] = 10; // Update the 4th element to 10
console.log("Updated arr[3] = 10, Array:", arr);
arr[0] = 100; // Update the 1st element to 100
console.log("Updated arr[0] = 100, Array:", arr);
console.log("----------------------------------");

// Checking the type of the array
console.log("Type of arr:", typeof arr); // Returns "object" since arrays are objects in JavaScript
console.log("----------------------------------");

// Demonstrating various array methods
console.log("Array Methods:");
console.log("toString():", arr.toString()); // Converts the array to a comma-separated string
console.log("----------------------------------");

console.log("join('-'):", arr.join("-")); // Joins elements with a specified separator ('-')
console.log("----------------------------------");

console.log("pop(): Removed element:", arr.pop(), "Updated Array:", arr); // Removes the last element and modifies the array
console.log("----------------------------------");

console.log("push(9):", "New Array Length:", arr.push(9), "Updated Array:", arr); // Adds an element to the end of the array
console.log("----------------------------------");

console.log("shift(): Removed first element:", arr.shift(), "Updated Array:", arr); // Removes the first element and modifies the array
console.log("----------------------------------");

console.log("unshift(10):", "New Array Length:", arr.unshift(10), "Updated Array:", arr); // Adds an element to the beginning of the array
console.log("----------------------------------");

// Deleting an element from the array
delete arr[1]; // Deletes the second element (sets it to undefined)
console.log("After delete arr[1]:", arr);
console.log("----------------------------------");

// Concatenating two arrays
let arr2 = [1, 2, 3, 4, 5];
console.log("Concatenated with arr2 [1, 2, 3, 4, 5]:", arr.concat(arr2)); // Combines two arrays into one
console.log("----------------------------------");

// Sorting the array
arr.sort(); // Sorts the array in alphabetical order (for numbers, treats them as strings by default)
console.log("Sorted Array:", arr);
console.log("----------------------------------");

// Adding elements at a specific index using splice
arr.splice(2, 2, 12, 34); // Removes 2 elements starting from index 2, and adds 12, 34 at that position
console.log("After splice(2, 2, 12, 34):", arr);
console.log("----------------------------------");

// Extracting a portion of the array using slice
console.log("Slice(2, 4):", arr.slice(2, 4)); // Returns a new array with elements from index 2 to 3
console.log("----------------------------------");

// Reversing the array
arr.reverse(); // Reverses the order of the elements in the array
console.log("Reversed Array:", arr);
console.log("----------------------------------");

// Iterations over the array..
console.log("Iterating over the arrays using loops");


// Iterating over the array using forEach
console.log("Using forEach:");
arr.forEach((value, index) => {
    console.log(`Index ${index}:`, value); // Logs each element and its index
});
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