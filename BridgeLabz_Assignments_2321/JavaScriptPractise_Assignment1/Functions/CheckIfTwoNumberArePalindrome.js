function isPalindrome(number) {
    let str = number.toString();
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}


let num1 = parseInt(prompt("Enter the first number: "));
let num2 = parseInt(prompt("Enter the second number: "));

console.log(`${num1} is ${isPalindrome(num1) ? "" : "not "}a palindrome.`);
console.log(`${num2} is ${isPalindrome(num2) ? "" : "not "}a palindrome.`);
