function findMissingAndDuplicate(arr) {
    const n = arr.length;
    const visited = new Array(n + 1).fill(false);
    let duplicate, missing;

    for (let num of arr) {
        if (visited[num]) {
            duplicate = num;
        } else {
            visited[num] = true;
        }
    }

    
    for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
            missing = i;
            break;
        }
    }

    return { missing, duplicate };
}


const arr = [4, 3, 6, 2, 1, 1];
const result = findMissingAndDuplicate(arr);
console.log("Missing Number:", result.missing);
console.log("Duplicate Number:", result.duplicate);
