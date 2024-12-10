
function findIntersection(arr1, arr2) {
    const intersection = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                // Check if the element is not already in the intersection array
                let alreadyExists = false;
                for (let k = 0; k < intersection.length; k++) {
                    if (intersection[k] === arr1[i]) {
                        alreadyExists = true;
                        break;
                    }
                }
                if (!alreadyExists) {
                    intersection.push(arr1[i]);
                }
            }
        }
    }
    return intersection;
}


function findUnion(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    const union = new Set([...set1, ...set2]);
    return [...union];
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log("Array 1:", array1);
console.log("Array 2:", array2);


const intersection = findIntersection(array1, array2);
console.log("Intersection:", intersection);

const union = findUnion(array1, array2);
console.log("Union:", union);

console.log("-----------------------------------------------");
