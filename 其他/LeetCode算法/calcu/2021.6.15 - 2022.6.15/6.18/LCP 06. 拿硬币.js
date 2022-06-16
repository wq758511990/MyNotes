/**
 * @param {number[]} coins
 * @return {number}
 */
 var minCount = function(coins) {
    let ans = 0
    for (let key in coins) {
        let tmp = coins[key]
        while(tmp > 0) {
            tmp -= 2
            ans += 1
        }
    }
    return ans
};

console.log(minCount([4, 2, 1]))
