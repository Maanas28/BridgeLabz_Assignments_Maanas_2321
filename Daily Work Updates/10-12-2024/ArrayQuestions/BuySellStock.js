function BuySellStock(prices, n, idx, buyStatus, profit) {
    if (idx === n) {
        return profit; // Base case: return the accumulated profit
    }

    if (buyStatus === 0) {
        return Math.max(
            BuySellStock(prices, n, idx + 1, 0, profit), // Skip buying
            BuySellStock(prices, n, idx + 1, 1, profit - prices[idx]) // Buy stock
        );
    } else {
        return Math.max(
            BuySellStock(prices, n, idx + 1, 1, profit), // Skip selling
            BuySellStock(prices, n, idx + 1, 0, profit + prices[idx]) // Sell stock
        );
    }
}

let prices = [100, 180, 260, 310, 40, 535, 695];
let n = prices.length;
let totalProfitCal = BuySellStock(prices, n, 0, 0, 0);
console.log("Maximum Profit:", totalProfitCal);
