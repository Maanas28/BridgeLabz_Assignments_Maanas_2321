console.log("Implementing HashTable using Object in JS: ")
console.log("------------------------------------");
console.log("------------------------------------");

// Create a new hashtable using an object
let hashtable = {};

// Adding items to the hashtable
hashtable['key1'] = 'value1';
hashtable['key2'] = 'value2';
console.log("Added key1 and key2 to the hashtable.");
console.log("------------------------------------");

// Retrieving an item
console.log(`Value of key1: ${hashtable['key1']}`);
console.log("------------------------------------");

// Checking if a key exists
console.log(`Does key2 exist? ${'key2' in hashtable}`);
console.log("------------------------------------");

// Removing an item
delete hashtable['key2'];
console.log("Removed key2 from the hashtable.");
console.log("------------------------------------");

// Iterating over keys and printing
console.log("Iterating over remaining keys:");
for (let key in hashtable) {
    if (hashtable.hasOwnProperty(key)) { // Ensures the key is not from the prototype
        console.log(`Key: ${key}, Value: ${hashtable[key]}`);
    }
}

console.log("------------------------------------");
console.log("------------------------------------");

console.log("Implementing HashTable using Maps in JS: ")
console.log("------------------------------------");
console.log("------------------------------------");

// Create a new Map
let map = new Map();

// Adding items
map.set('key1', 'value1');
map.set('key2', 'value2');
console.log("Added key1 and key2 to the map.");
console.log("------------------------------------");

// Retrieving an item
console.log(`Value of key1: ${map.get('key1')}`);
console.log("------------------------------------");

// Checking if a key exists
console.log(`Does key2 exist in the map? ${map.has('key2')}`);
console.log("------------------------------------");

// Removing an item
map.delete('key2');
console.log("Removed key2 from the map.");
console.log("------------------------------------");

// Iterating over entries and printing
console.log("Iterating over map entries:");
map.forEach((value, key) => {
    console.log(`Key: ${key}, Value: ${value}`);
});
console.log("------------------------------------");

// Alternatively, using for...of to iterate
console.log("Using for...of to iterate over map entries:");
for (let [key, value] of map) {
    console.log(`Key: ${key}, Value: ${value}`);
}
console.log("------------------------------------");
console.log("------------------------------------");
