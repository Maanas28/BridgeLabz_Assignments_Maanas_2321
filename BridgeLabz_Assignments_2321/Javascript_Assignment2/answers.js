// // 1. Print numbers from 1 to 10
// console.log("1. Numbers from 1 to 10:");
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// // 2. Print the odd numbers less than 100
// console.log("\n2. Odd numbers less than 100:");
// for (let i = 1; i < 100; i += 2) {
//     console.log(i);
// }

// // 3. Print the multiplication table with 7
// console.log("\n3. Multiplication table with 7:");
// for (let i = 1; i <= 10; i++) {
//     console.log(`7 x ${i} = ${7 * i}`);
// }

// // 4. Print all multiplication tables from 1 to 10
// console.log("\n4. Multiplication tables from 1 to 10:");
// for (let i = 1; i <= 10; i++) {
//     console.log(`Table of ${i}:`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
// }

// // 5. Calculate the sum of numbers from 1 to 10
// console.log("\n5. Sum of numbers from 1 to 10:");
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum += i;
// }
// console.log(sum);

// // 6. Calculate 10!
// console.log("\n6. Factorial of 10:");
// let factorial = 1;
// for (let i = 1; i <= 10; i++) {
//     factorial *= i;
// }
// console.log(factorial);

// // 7. Sum of even numbers greater than 10 and less than 30
// console.log("\n7. Sum of even numbers > 10 and < 30:");
// sum = 0;
// for (let i = 12; i < 30; i += 2) {
//     sum += i;
// }
// console.log(sum);

// // 8. Convert Celsius to Fahrenheit
// function celsiusToFahrenheit(celsius) {
//     return celsius * 9 / 5 + 32;
// }
// console.log("\n8. Celsius to Fahrenheit: 25°C =", celsiusToFahrenheit(25) + "°F");

// // 9. Convert Fahrenheit to Celsius
// function fahrenheitToCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
// }
// console.log("\n9. Fahrenheit to Celsius: 77°F =", fahrenheitToCelsius(77) + "°C");

// // 10. Sum of numbers in an array
// console.log("\n10. Sum of numbers in an array:");
// let array = [1, 2, 3, 4, 5];
// sum = array.reduce((a, b) => a + b, 0);
// console.log(sum);

// // 11. Average of numbers in an array
// console.log("\n11. Average of numbers in an array:");
// let average = sum / array.length;
// console.log(average);

// // 12. Return only positive numbers from an array
// function getPositiveNumbers(arr) {
//     return arr.filter(num => num > 0);
// }
// console.log("\n12. Positive numbers:", getPositiveNumbers([-10, -5, 0, 5, 10]));

// // 13. Find the maximum number in an array
// console.log("\n13. Maximum number:", Math.max(...array));

// // 14. First 10 Fibonacci numbers without recursion
// console.log("\n14. First 10 Fibonacci numbers:");
// let fib = [0, 1];
// for (let i = 2; i < 10; i++) {
//     fib.push(fib[i - 1] + fib[i - 2]);
// }
// console.log(fib);

// // 15. nth Fibonacci number using recursion
// function fibonacci(n) {
//     if (n <= 1) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log("\n15. 10th Fibonacci number:", fibonacci(10));

// // 16. Check if a number is prime
// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }
// console.log("\n16. Is 7 prime?", isPrime(7));

// // 17. Sum of digits of a positive integer
// console.log("\n17. Sum of digits of 123:");
// num = 123;
// sum = 0;
// while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
// }
// console.log(sum);

// // 18. Print the first 100 prime numbers
// console.log("\n18. First 100 prime numbers:");
// let primes = [];
// num = 2;
// while (primes.length < 100) {
//     isPrime = true;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         primes.push(num);
//     }
//     num++;
// }
// console.log(primes);

// // 19. First 5 primes greater than 10
// console.log("\n19. 5 primes greater than 10:");
// let primesAfterTen = [];
// num = 11;
// while (primesAfterTen.length < 5) {
//     isPrime = true;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         primesAfterTen.push(num);
//     }
//     num++;
// }
// console.log(primesAfterTen);

// // 20. Rotate an array to the left
// console.log("\n20. Array rotated to the left:");
// array = [1, 2, 3, 4, 5];
// let rotatedLeft = array.slice(1).concat(array[0]);
// console.log(rotatedLeft);

// // 21. Rotate an array to the right
// console.log("\n21. Array rotated to the right:");
// let rotatedRight = [array[array.length - 1]].concat(array.slice(0, array.length - 1));
// console.log(rotatedRight);

// // 22. Reverse an array
// console.log("\n22. Reversed array:");
// let reversedArray = [];
// for (let i = array.length - 1; i >= 0; i--) {
//     reversedArray.push(array[i]);
// }
// console.log(reversedArray);


// // 23. Reverse a string
// console.log("\n23. Reversed string:");
// let str = "hello";
// let reversedString = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     reversedString += str[i];
// }
// console.log(reversedString);

// // 24. Merge two arrays
// console.log("\n24. Merged arrays:");
// let array1 = [1, 2], array2 = [3, 4];
// let mergedArray = array1.concat(array2);
// console.log(mergedArray);

// // 25. Numbers in either of two arrays but not both
// console.log("\n25. Symmetric difference of arrays:");
// array1 = [1, 2, 3];
// array2 = [3, 4, 5];
// let symmetricDifference = [];
// for (let i = 0; i < array1.length; i++) {
//     if (!array2.includes(array1[i])) symmetricDifference.push(array1[i]);
// }
// for (let i = 0; i < array2.length; i++) {
//     if (!array1.includes(array2[i])) symmetricDifference.push(array2[i]);
// }
// console.log(symmetricDifference);

// // 26. Elements in first array but not in second
// console.log("\n26. Elements in first array but not in second:");
// let arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 6];
// let result = [];
// for (let i = 0; i < arr1.length; i++) {
//     if (!arr2.includes(arr1[i])) {
//         result.push(arr1[i]);
//     }
// }
// console.log(result);

// // 27. New array with distinct elements
// console.log("\n27. New array with distinct elements:");
// let arr = [1, 2, 2, 3, 4, 4, 5];
// let distinct = [];
// for (let i = 0; i < arr.length; i++) {
//     if (!distinct.includes(arr[i])) {
//         distinct.push(arr[i]);
//     }
// }
// console.log(distinct);

// // 28. Sum of first 100 prime numbers
// console.log("\n28. Sum of first 100 prime numbers:");
// let primes = [];
// let num = 2, primeSum = 0;
// while (primes.length < 100) {
//     let isPrime = true;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         primes.push(num);
//         primeSum += num;
//     }
//     num++;
// }
// console.log("Primes:", primes);
// console.log("Sum:", primeSum);

// // 29. Distance between first 100 prime numbers
// console.log("\n29. Distance between first 100 prime numbers:");
// let distances = [];
// for (let i = 1; i < primes.length; i++) {
//     distances.push(primes[i] - primes[i - 1]);
// }
// console.log(distances);

// // 30. Add two positive numbers of indefinite size
// console.log("\n30. Add two large numbers:");
// let str1 = "123456789123456789", str2 = "987654321987654321";
// let sumString = "";
// let i = str1.length - 1, j = str2.length - 1, carry = 0;
// while (i >= 0 || j >= 0 || carry) {
//     let digit1 = i >= 0 ? +str1[i--] : 0;
//     let digit2 = j >= 0 ? +str2[j--] : 0;
//     let sum = digit1 + digit2 + carry;
//     carry = Math.floor(sum / 10);
//     sumString = (sum % 10) + sumString;
// }
// console.log(sumString);


// // 31. The number of words in a text
// console.log("\n31. Number of words in a text:");
// let text = "Hello world, this is a sentence.";
// let arr = text.split(" ");
// console.log(arr.length);

// // 32. Capitalize the first letter of each word
// console.log("\n32. Capitalize each word:");
// let capitalize = arr.map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
// console.log(capitalize);

// // 33. Sum of numbers in a comma delimited string
// console.log("\n33. Sum of numbers in a comma-delimited string:");
// let numbers = "1,2,3,4,5";
// let numberArrays = numbers.split(",").map(Number);
// let sum = numberArrays.reduce((a,b) => a + b, 0);
// console.log(sum);

// // 34. Words inside a text
// console.log("\n34. Words inside a text:");
// console.log(words);

// // 35. CSV to bi-dimensional array
// console.log("\n35. CSV to bi-dimensional array:");
// let csv = "1,2,3\n4,5,6\n7,8,9";
// let csvArray = csv.split("\n").map(row => row.split(","));
// console.log(csvArray);

// // 36. String to array of characters
// console.log("\n36. String to array of characters:");
// let str = "hello";
// let charArray = str.split("");
// console.log(charArray);

// // 37. String to ASCII codes
// console.log("\n37. String to ASCII codes:");
// let asciiCodes = charArray.map(char => char.charCodeAt(0));
// console.log(asciiCodes);

// // 38. ASCII codes to string
// console.log("\n38. ASCII codes to string:");
// let finalString = asciiCodes.map(code => String.fromCharCode(code)).join("");
// console.log(finalString);

// // 39. Caesar cipher
// console.log("\n39. Caesar cipher:");
// let shift = 3;
// let cipherText = charArray.map(code => String.fromCharCode(code.charCodeAt(0) - 97 + shift))

// // 40. Bubble sort
// console.log("\n40. Bubble sort:");
// arr = [5, 3, 8, 6, 2];
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }
// console.log(arr);

// // 41. Distance between two points
// let x1 = 1, y1 = 2, x2 = 4, y2 = 6;
// let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
// console.log(distance);

// // 42. Intersection of two circles
// console.log("\n42. Intersection of two circles:");
// let cx1 = 0, cy1 = 0, r1 = 5;
// let cx2 = 6, cy2 = 0, r2 = 5;
// let centerDistance = Math.sqrt((cx2 - cx1) ** 2 + (cy2 - cy1) ** 2);
// console.log(centerDistance <= r1 + r2);

// // 43. Extract a column from a bi-dimensional array
// console.log("\n43. Extract column:");
// let columnIndex = 1;
// let column = csvArray.map(row => row[columnIndex]);
// console.log(column);

// // 44. Binary to number
// console.log("\n44. Binary to number:");
// let binary = "1010";
// let number = Number.parseInt(binary,2);
// console.log(number);

// // 45. Sum of numbers in a jagged array
// console.log("\n45. Sum of jagged array:");
// let jaggedArray = [1, [2, 3], [4, [5, 6]]];
// function sumJaggedArray(arr){
//     return arr.reduce((sum,val) => sum + (Array.isArray(val) ? sumJaggedArray(val) : val), 0);
// }
// console.log(sumJaggedArray(jaggedArray));

// // 46. Maximum in a jagged array
// console.log("\n46. Maximum in jagged array:");
// function maxJagged(arr) {
//     return arr.reduce((max,val) =>Math.max(max, Array.isArray(val) ? maxJagged(val) : val), -Infinity);
// }
// console.log(maxJagged(jaggedArray));

// // 47. Deep copy of jagged array
// console.log("\n47. Deep copy of jagged array:");
// function deepCopy(arr) {
//     return arr.map(val => (Array.isArray(val) ? deepCopy(val) : val));
// }
// let jaggedCopy = deepCopy(jaggedArray);
// console.log(jaggedCopy);

// // 48. Longest word in a string
// console.log("\n48. Longest word in a string:");
// let longestWord = text.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
// console.log(longestWord);

// // 49. Shuffle an array
// console.log("\n49. Shuffle an array:");
// arr = [1, 2, 3, 4, 5];
// for (let i = arr.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     let temp = arr[i]; 
//     arr[i] = arr[j];  
//     arr[j] = temp;
// }
// console.log(arr);


// // 50. Unique random numbers
// console.log("\n50. Unique random numbers:");
// let n = 10; 
// let randomNumbers = [];
// for (let i = 1; i <= n; i++) {
//     randomNumbers.push(i);
// }
// for (let i = randomNumbers.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1)); 
//     let temp = randomNumbers[i]; 
//     randomNumbers[i] = randomNumbers[j];
//     randomNumbers[j] = temp;
// }
// console.log(randomNumbers);

// // 51. Frequency of letters
// console.log("\n51. Frequency of letters:");
// let str = "hello world";
// let letterFrequency = {}; 
// for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase(); 
//     if (char >= 'a' && char <= 'z') {
//         if (letterFrequency[char]) {
//             letterFrequency[char]++;
//         } else {
//             letterFrequency[char] = 1;
//         }
//     }
// }
// let result = [];
// for (let key in letterFrequency) {
//     result.push([key, letterFrequency[key]]);
// }
// console.log(result); 


// // 52. Fibonacci(500) with high precision
// console.log("\n52. Fibonacci(500):");
// let fib500 = ["0", "1"];
// for (let i = 2; i <= 500; i++) {
//     let a = BigInt(fib500[i - 1]);
//     let b = BigInt(fib500[i - 2]);
//     fib500.push((a + b).toString());
// }
// console.log(fib500[500]);

// // 53. 70! with high precision
// console.log("\n53. 70! with high precision:");
// let factorial70 = BigInt(1);
// for (let i = 1; i <= 70; i++) {
//     factorial70 *= BigInt(i);
// }
// console.log(factorial70.toString());