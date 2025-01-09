
function KthSmallest(arr, N, k) {
    console.log("Original Array:", arr.toString());


    arr.sort((a, b) => a - b);
    console.log("Sorted Array (Ascending):", arr.toString());

    return arr[k - 1];
}


function KthGreatest(arr, N, k) {
    console.log("Original Array:", arr.toString());


    arr.sort((a, b) => b - a);
    console.log("Sorted Array (Descending):", arr.toString());


    return arr[k - 1];
}


let arr = [12, 3, 5, 7, 19];
let N = arr.length, K = 2;

// Finding and printing results
console.log("Array:", arr.toString());
console.log(`K: ${K}, N: ${N}`);
console.log("-----------------------------------------------");

console.log(`K'th smallest element is: ${KthSmallest([...arr], N, K)}`);
console.log("-----------------------------------------------");
console.log(`K'th greatest element is: ${KthGreatest([...arr], N, K)}`);
console.log("-----------------------------------------------");
