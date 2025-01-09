console.log("===Ways to Delete Elements from an Array===");
console.log("----------------------------------");

let arr = [1,2,3,4,5,6];

// 1. Using pop
console.log("Using pop:");
arr.pop();
console.log("After pop:", arr);
console.log("----------------------------------");

// 2. Using shift
console.log("Using shift:");
arr.shift();
console.log("After shift:", arr);
console.log("----------------------------------");

// 3. Using splice
console.log("Using splice:");
arr.splice(2, 2); // Removes 2 elements starting from index 2
console.log("After splice:", arr);
console.log("----------------------------------");

// 4. Using filter
console.log("Using filter:");
let filteredArr = arr.filter(value => value % 2 === 0); // Keeps only even values
console.log("Filtered array:", filteredArr);
console.log("----------------------------------");

// 5. Using delete
console.log("Using delete:");
delete arr[1]; // Deletes the element but leaves an empty slot
console.log("After delete:", arr);
console.log("----------------------------------");

// 6. Using length property
console.log("Using length property:");
arr.length = 3; // Truncates the array to 3 elements
console.log("After setting length:", arr);
console.log("----------------------------------");

// 7. Using slice
console.log("Using slice:");
let slicedArr = arr.slice(1); // Creates a new array excluding the first element
console.log("Sliced array:", slicedArr);
console.log("----------------------------------");
