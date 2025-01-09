// Initialize a string
let str = "Hello, JavaScript!";
console.log("Initial String:", str);
console.log("----------------------------------");

// Accessing characters in a string
console.log("Accessing Characters:");
console.log("str[0]:", str[0]); // Access the first character
console.log("str.charAt(1):", str.charAt(1)); // Access the second character using charAt
console.log("----------------------------------");

// Finding the length of the string
console.log("Length of the string:", str.length); // Returns the number of characters in the string
console.log("----------------------------------");

// Converting the case of a string
console.log("Case Conversion:");
console.log("toUpperCase():", str.toUpperCase()); // Converts the string to uppercase
console.log("toLowerCase():", str.toLowerCase()); // Converts the string to lowercase
console.log("----------------------------------");

// Searching within a string
console.log("Searching within the string:");
console.log("indexOf('JavaScript'):", str.indexOf("JavaScript")); // Finds the position of 'JavaScript'
console.log("includes('Hello'):", str.includes("Hello")); // Checks if 'Hello' is in the string
console.log("----------------------------------");

// Extracting parts of a string
console.log("Extracting Parts of the String:");
console.log("slice(7, 17):", str.slice(7, 17)); // Extracts 'JavaScript' (start to end index - 1)
console.log("substring(7, 17):", str.substring(7, 17)); // Similar to slice
console.log("----------------------------------");

// Replacing parts of a string
console.log("Replacing Parts of the String:");
console.log("replace('JavaScript', 'World'):", str.replace("JavaScript", "World")); // Replaces 'JavaScript' with 'World'
console.log("replaceAll('JavaScript', 'World'):", str.replaceAll("JavaScript", "World")); // Replaces  all the occurances of 'JavaScript' with 'World'
console.log("----------------------------------");

// Splitting the string into an array
console.log("Splitting the String:");
console.log("split(', '):", str.split(", ")); // Splits the string into an array at ', '
console.log("----------------------------------");

// Trimming whitespace from a string
let strWithSpaces = "   Hello, World!   ";
console.log("String with extra spaces:", `"${strWithSpaces}"`);
console.log("trim():", `"${strWithSpaces.trim()}"`); // Removes leading and trailing spaces
console.log("----------------------------------");

// Concatenating strings
let str2 = "How are you?";
console.log("Concatenating Strings:");
console.log("str.concat(' ', str2):", str.concat(" ", str2)); // Joins two strings with a space in between
console.log("----------------------------------");

// Repeating a string
console.log("Repeating a String:");
console.log("repeat(3):", str.repeat(3)); // Repeats the string 3 times
console.log("----------------------------------");

// Accessing the code of the specific character in string
console.log("Accessing the code of the specific character in string:");
console.log("str.charCodeAt(4):", str.charCodeAt(4));
console.log("----------------------------------");

// Padding the strings
let stringToPad = "5";
console.log("Padding the elements of the string: ");
console.log("str.padStart(4):", stringToPad.padStart(4, "0"));
console.log("str.padEnd(4):", stringToPad.padEnd(4, "0"));
console.log("----------------------------------");

// Splitting a string into characters using spread operator
console.log("Converting String to Characters:");
console.log("Using [...str]:", [...str]); // Converts the string into an array of characters
console.log("----------------------------------");

// Iterating through each character of the string using for...of
console.log("Iterating Through Characters Using for...of:");
for (let char of str) {
    console.log("Character:", char);
}
console.log("----------------------------------");
