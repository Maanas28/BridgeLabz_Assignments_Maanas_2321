// 1.  Read a Single Digit Number and Write the Number in Words
let digit = parseInt(prompt("Enter a single digit number (0-9): "));
switch (digit) {
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    case 6:
        console.log("Six");
        break;
    case 7:
        console.log("Seven");
        break;
    case 8:
        console.log("Eight");
        break;
    case 9:
        console.log("Nine");
        break;
    default:
        console.log("Invalid input. Please enter a number between 0 and 9.");
}

// 2. Read a Number and Display the Weekday
let dayNumber = parseInt(prompt("Enter a number (1-7): "));

switch (dayNumber) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid input. Please enter a number between 1 and 7.");
}

// 3.  Read a Number 1, 10, 100, 1000, etc., and Display Unit, Ten, Hundred
let number = parseInt(prompt("Enter a number (1, 10, 100, 1000, etc.): "));

switch (number) {
    case 1:
        console.log("Unit");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Ten Thousand");
        break;
    default:
        console.log("Invalid input. Please enter 1, 10, 100, 1000, etc.");
}

// 4. Unit Conversion of Different Length Units
let option = parseInt(prompt("Choose an option:\n1. Feet to Inch\n2. Feet to Meter\n3. Inch to Feet\n4. Meter to Feet"));

switch (option) {
    case 1: // Feet to Inch
        let feetToInch = parseFloat(prompt("Enter length in feet: "));
        console.log(`${feetToInch} feet is ${feetToInch * 12} inches`);
        break;

    case 2: // Feet to Meter
        let feetToMeter = parseFloat(prompt("Enter length in feet: "));
        console.log(`${feetToMeter} feet is ${feetToMeter * 0.3048} meters`);
        break;

    case 3: // Inch to Feet
        let inchToFeet = parseFloat(prompt("Enter length in inches: "));
        console.log(`${inchToFeet} inches is ${inchToFeet / 12} feet`);
        break;

    case 4: // Meter to Feet
        let meterToFeet = parseFloat(prompt("Enter length in meters: "));
        console.log(`${meterToFeet} meters is ${meterToFeet / 0.3048} feet`);
        break;

    default:
        console.log("Invalid option. Please select a valid option (1-4).");
}
