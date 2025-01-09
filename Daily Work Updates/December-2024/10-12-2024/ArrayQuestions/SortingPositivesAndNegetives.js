let array = [1,2,42,-2,-3,10,-24,-54];
let positives = [];
let negatives = [];

for(let num of array){
    if( num >= 0){
        positives.push(num);
    }else{
        negatives.push(num);
    }
}
console.log("Array:", array);
console.log("Positive elements:", positives.toString());
console.log("Negative elements:", negatives.toString());
console.log("-----------------------------------------------");