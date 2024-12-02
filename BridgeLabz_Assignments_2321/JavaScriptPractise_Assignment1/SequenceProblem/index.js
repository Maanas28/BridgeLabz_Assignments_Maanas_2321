// 1. Single Digit Random Number
console.log(Math.floor(Math.random() * 10));

// 2. Random Dice Number (1-6)
console.log(Math.floor(Math.random() * 6) + 1);

// 3. Sum of Two Dice Numbers
let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;
console.log("Sum:", dice1 + dice2);


// 4. Sum and Average of 5 Random Two-Digit Numbers
let numbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 90) + 10);
let sum = numbers.reduce((a, b) => a + b, 0);
console.log("Sum:", sum, "Average:", sum / numbers.length);

// 5. Unit Conversion
//-------------------------
// i. 42 in to ft
console.log("42 in =", 42 / 12, "ft");

// ii. Plot in meters
let length = 60 * 0.3048, width = 40 * 0.3048;
console.log("Plot in meters:", length * width);

// iii. Area of 25 plots in acres
let area = length * width * 25;
console.log("Area in acres:", area * 0.000247105);

//--------------------