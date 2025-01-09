function FindMajorityElements(arr) {
    let n = arr.length;
    let majorityElement = Number.MAX_SAFE_INTEGER;
    const occurrences = {};
    for (let num of arr) {
        if (occurrences[num]) {
            occurrences[num]++;
            if (occurrences[num] > Math.floor(n / 2)) {
                majorityElement = num;
                break;
            } else {
                occurrences[num] = 1;
            }
        }
    }

    return majorityElement !== Number.MAX_SAFE_INTEGER ? majorityElement : null;
}

const array1 = [3, 3, 4, 2, 4, 4, 2, 4, 4];

console.log("Array:", array1);
console.log("Majority Element:", FindMajorityElements(array1) || "None");
