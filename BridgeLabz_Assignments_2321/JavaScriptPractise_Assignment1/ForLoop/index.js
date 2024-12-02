// 1. Table of Powers of 2
let n = parseInt(prompt("Enter the value of n: "));
for (let i = 0; i <= n; i++) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
}


// 2. nth Harmonic Number
let number = parseInt(prompt("Enter the value of n: "));
let harmonic = 0;
for (let i = 1; i <= number; i++) {
    harmonic += 1 / i;
}
console.log(`The ${number}th Harmonic Number is: ${harmonic}`);


// 3. Prime Number Check
var num = parseInt(prompt("Enter a number: "));
let isPrime = num > 1;
for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(`${num} is ${isPrime ? "a Prime Number" : "not a Prime Number"}`);


// 4. Prime Numbers in a Range
let start = parseInt(prompt("Enter the start of the range: "));
let end = parseInt(prompt("Enter the end of the range: "));
console.log(`Prime numbers between ${start} and ${end} are:`);

for (let i = start; i <= end; i++) {
    let isPrime = i > 1;
    for (let i = 2; i <= Math.sqrt(i); i++) {
        if (i % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(i);
}

// 5. Factorial of a Number
var num = parseInt(prompt("Enter a number: "));
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log(`Factorial of ${num} is: ${factorial}`);


// 6. Printing all prime factors
let N = parseInt(prompt("Enter a number: "));
console.log(`Prime factors of ${N} are:`);
for (let i = 2; i * i <= N; i++) {
    while (N % i === 0) {
        console.log(i);
        N /= i;
    }
}
if (N > 1) {
    console.log(N);
}
