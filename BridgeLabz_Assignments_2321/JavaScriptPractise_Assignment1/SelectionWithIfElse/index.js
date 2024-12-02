// 1. Min and Max of 5 Random Three-Digit Numbers
let min = Infinity, max = -Infinity;
for (let i = 0; i < 5; i++) {
    let number = Math.floor(Math.random() * 900) + 100;
    if (number < min) min = number;
    if (number > max) max = number;
}
console.log("Min:", min, "Max:", max);

//2. Check Day and Month Between March 20 and June 20
let day = parseInt(prompt("Enter day: "));
let month = parseInt(prompt("Enter month: "));

let isInRange = (month === 3 && day >= 20) || 
                (month > 3 && month < 6) || 
                (month === 6 && day <= 20);

alert(isInRange);

// 3. Leap Year Check
let year = parseInt(prompt("Enter the year: "))
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}

// 4. Coin Flip
let result = Math.random() < 0.5 ? "Heads" : "Tails";
console.log(result);
