// JavaScript Maps
// A Map holds key-value pairs where keys can be of any data type.
// Maps maintain the insertion order of their elements.

console.log("=== Creating Maps ===");

// 1. Creating a Map and adding key-value pairs
const myMap = new Map();
myMap.set("name", "Maanas");
myMap.set("age", 25);
myMap.set("location", "India");

console.log("Map after adding key-value pairs:", myMap);

// 2. Creating a Map from an array of key-value pairs
const arrayMap = new Map([
    ["brand", "Apple"],
    ["model", "iPhone 14"],
    ["price", 999],
]);
console.log("Map created from an array of key-value pairs:", arrayMap);

console.log("\n=== Accessing Map Elements ===");

// 1. Using `get()` to access values
console.log("Value of 'name' in myMap:", myMap.get("name"));

// 2. Using `set()` to set the values in the map
myMap.set("name", "Maanas Kanwar");

// 3. Using `delete()` to remove the map element

// 4. Using `clear()` to remove all the elements from the map...

// 5. Using `has()` to check if a key exists in a map...

// 6. Uisng forEach() invokes a callback for eacheach key/value pair in a map
arrayMap.forEach(function(value, key) {
    console.log( ` Key : ${key}, Value : ${value}`);
})

// 7. Using enteries() return a iterator object with [key,values]

// 8. Using keys() returns a iterator object with keys in map.

// 9. Using values() return a iterator obbject with values in a map.

