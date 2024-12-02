// 1. Table of Powers of 2 (till 2^n or 256)
let n = parseInt(prompt("Enter the value of n: "));
let i = 0;
while (i <= n && Math.pow(2, i) <= 256) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
    i++;
}


// 2. Find the magic number
let low = 1;
let high = 100;

alert("Think of a number between 1 and 100.");
while (low < high) {
    let mid = Math.floor((low + high) / 2);
    let answer = prompt(`Is your number less than ${mid}? (yes/no): `).toLowerCase();

    if (answer === "yes") {
        high = mid;
    } else {
        low = mid + 1;
    }
}
alert(`Your magic number is: ${low}`);

// 3. Flip Coin till Heads or Tails Wins 11 Times
let heads = 0;
let tails = 0;
while (heads < 11 && tails < 11) {
    let flip = Math.random() < 0.5 ? "Heads" : "Tails";
    if (flip === "Heads") {
        heads++;
    } else {
        tails++;
    }
    console.log(`Heads: ${heads}, Tails: ${tails}`);
}
console.log(`Heads: ${heads}, Tails: ${tails}`);
console.log(`${heads === 11 ? "Heads" : "Tails"} wins!`);

// 4. Gambler Game
let bankAmount = 100;
let bets = 0;
let wins = 0;
while( bankAmount < 200 || bankAmount > 0){
    bets++;
    if( Math.random() < 0.5){
        wins++;
        bankAmount++;
    } else{
        bankAmount--;
    }
}

console.log(`Total Bets: ${bets}`);
console.log(`Total Wins: ${wins}`);
console.log(`Final Money: Rs ${bankAmount}`);

// 5. 