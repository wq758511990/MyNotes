/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    let count = Number.MAX_SAFE_INTEGER
    const dfs = (curSum, curCount, i) => {
        if (curSum === amount) {
            count = Math.min(count, curCount)
        }
        if (curSum > amount) {
            return
        }
        return dfs(curSum + coins[i], curCount + 1, i + 1)
    }
};

console.log(coinChange([1, 2, 5]))