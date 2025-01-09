console.log("\n=== Insertions In an Array ===");
console.log("----------------------------------");

let arr = [1,2,3,4,5,6];

// 1. Using push
console.log("Using push:");
arr.push(7, 8);
console.log("After push:", arr);
console.log("----------------------------------");

// 2. Using unshift
console.log("Using unshift:");
arr.unshift(0, -1);
console.log("After unshift:", arr);
console.log("----------------------------------");

// 3. Using splice
console.log("Using splice:");
arr.splice(3, 0, "a", "b");
console.log("After splice:", arr);
console.log("----------------------------------");

// 4. Using spread operator
console.log("Using spread operator:");
let newArr = [...arr.slice(0, 2), "x", "y", ...arr.slice(2)];
console.log("New array:", newArr);
console.log("----------------------------------");

// 5. Using concat
console.log("Using concat:");
let concatenatedArr = arr.concat([9, 10]);
console.log("After concat:", concatenatedArr);
console.log("----------------------------------");

// 6. Using Array.from
console.log("Using Array.from:");
let arrayFromString = Array.from("Hello");
console.log("Array from string:", arrayFromString);
console.log("----------------------------------");

// 7. Using length property
console.log("Using length property:");
arr[arr.length] = 11;
console.log("After setting length:", arr);
console.log("----------------------------------");

// 8. Using fill
console.log("Using fill:");
let filledArray = new Array(5).fill(0);
console.log("Filled array:", filledArray);
console.log("----------------------------------");

// 9. Using direct assignment
console.log("Using direct assignment:");
arr[15] = 20;
console.log("After direct assignment:", arr);
console.log("----------------------------------");
