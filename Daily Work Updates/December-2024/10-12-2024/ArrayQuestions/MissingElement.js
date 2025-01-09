function findMissingNumber(arr, n) {
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}


const arr = [1, 2, 4, 5, 6]; 
const n = 6;

const missingNumber = findMissingNumber(arr, n);
console.log(`The missing number is: ${missingNumber}`);
