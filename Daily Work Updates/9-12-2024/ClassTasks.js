// Reverse A String
console.log("=== Reverse A String ===");
//let input = prompt("Enter the string to reverse:");
let input = "helooooooo";
console.log(`Initial string: ${input}`);

// Reverse using split, reverse, join
let reversed = input.split("").reverse().join("");
console.log(`Reversed string: ${reversed}`);

// Optional: Manual reverse (if required)
let manualReversed = "";
for (let i = input.length - 1; i >= 0; i--) {
    manualReversed += input[i];
}
console.log(`Manually reversed string: ${manualReversed}`);
console.log("-----------------------------------------------");

// Printing the duplicate elements of an array
console.log("=== Printing Duplicate Elements ===");
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

// Finding the maximum and minimum elements of an array
console.log("=== Maximum and Minimum Elements ===");
let nums = [2, 13, 44, 5, 66, 7, 3, 24, 65, 77];
let maxElement = Math.max(...nums);
let minElement = Math.min(...nums);
console.log("Array:", nums);
console.log(`Maximum element: ${maxElement}`);
console.log(`Minimum element: ${minElement}`);
console.log("-----------------------------------------------");

// Sum of array elements
console.log("=== Sum of Array Elements ===");
let sum = nums.reduce((acc, num) => acc + num, 0);
console.log("Array:", nums);
console.log(`Sum of elements: ${sum}`);
console.log("-----------------------------------------------");

// seprating the negetive and the postive elements of the array
let array = [1,2,42,-2,-3,10,-24,-54];
let positives = [];
let negatives = [];

for(let num of array){
    if( num >= 0){
        positives.push(num);
    }else{
        negatives.push(num);
    }
}
console.log("Array:", array);
console.log("Positive elements:", positives.toString());
console.log("Negative elements:", negatives.toString());
console.log("-----------------------------------------------");