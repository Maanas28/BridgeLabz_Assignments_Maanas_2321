function maxProductSubarray(arr) {
    let maxProduct = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        let currentProduct = 1;
        for (let j = i; j < arr.length; j++) {
            currentProduct *= arr[j]; 
            maxProduct = Math.max(maxProduct, currentProduct);
        }
    }
    return maxProduct;
}

const array1 = [-1, -3, -10, 0, 60];


console.log("Maximum Product of Subarray :", maxProductSubarray(array1));
