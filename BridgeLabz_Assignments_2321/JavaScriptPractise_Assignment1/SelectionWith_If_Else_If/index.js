// 1. Number in Words
let num = Number.parseInt(prompt("Enter the single digit number :")); // Example
if (num === 0) console.log("Zero");
else if (num === 1) console.log("One");
else if (num === 2) console.log("Two");
else if (num === 3) console.log("Three");
else if (num === 4) console.log("Four");
else if (num === 5) console.log("Five");
else if (num === 6) console.log("Six");
else if (num === 7) console.log("Seven");
else if (num === 8) console.log("Eight");
else if (num === 9) console.log("Nine");
else alert("The number you entered is not a single digit number");


// 2. Week Day
let dayOfWeek = Number.parseInt(prompt("Enter the number corresponding to the day of the week: ")); // Example
if (dayOfWeek === 1) console.log("Monday");
else if (dayOfWeek === 2) console.log("Tuesday");
else if (dayOfWeek === 3) console.log("Wednesday");
else if (dayOfWeek === 4) console.log("Thursday");
else if (dayOfWeek === 5) console.log("Friday");
else if (dayOfWeek === 6) console.log("Saturday");
else if (dayOfWeek === 7) console.log("Sunday");
else alert("Please enter a valid day number");


// 3. Read a Number 1, 10, 100, 1000, etc., and display unit, ten, hundred,…
let number = parseInt(prompt("Enter a number (1, 10, 100, 1000, etc): "));

if (number === 1) {
    console.log("Unit");
} else if (number === 10) {
    console.log("Ten");
} else if (number === 100) {
    console.log("Hundred");
} else if (number === 1000) {
    console.log("Thousand");
} else if (number === 10000) {
    console.log("Ten Thousand");
} else {
    console.log("Invalid input. Please enter 1, 10, 100, 1000, etc.");
} 

// 4. Unit Conversion of Length
let option = parseInt(prompt("Choose an option:\n1. Feet to Inch\n2. Feet to Meter\n3. Inch to Feet\n4. Meter to Feet"));


if (option === 1) { // Feet to Inch
    let feetToInch = parseFloat(prompt("Enter length in feet: "));
    console.log(`${feetToInch} feet is ${feetToInch * 12} inches`);
} else if (option === 2) { // Feet to Meter
    let feetToMeter = parseFloat(prompt("Enter length in feet: "));
    console.log(`${feetToMeter} feet is ${feetToMeter * 0.3048} meters`);
} else if (option === 3) { // Inch to Feet
    let inchToFeet = parseFloat(prompt("Enter length in inches: "));
    console.log(`${inchToFeet} inches is ${inchToFeet / 12} feet`);
} else if (option === 4) { // Meter to Feet
    let meterToFeet = parseFloat(prompt("Enter length in meters: "));
    console.log(`${meterToFeet} meters is ${meterToFeet / 0.3048} feet`);
} else {
    console.log("Invalid option. Please choose a valid option.");
}
