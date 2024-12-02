
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function getPalindrome(num) {
    let str = num.toString();
    return parseInt(str.split('').reverse().join(''));
}


let number = parseInt(prompt("Enter a number: "));


if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
    
    let palindrome = getPalindrome(number);
    if (isPrime(palindrome)) {
        console.log(`The palindrome ${palindrome} is also a prime number.`);
    } else {
        console.log(`The palindrome ${palindrome} is not a prime number.`);
    }
} else {
    console.log(`${number} is not a prime number.`);
}
