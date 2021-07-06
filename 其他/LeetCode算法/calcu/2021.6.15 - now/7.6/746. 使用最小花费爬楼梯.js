/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // const n = cost.length
    // const dp = new Array(n + 1)
    // dp[0] = dp[1] = 0
    // for (let i = 2; i <= cost.length; i++) {
    //     dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
    // }
    // return dp[n]
    let prev = 0, cur = 0
    let next
    for (let i = 2; i <= cost.length; i++) {
        next = Math.min(prev + cost[i - 2], cur + cost[i - 1])
        prev = cur
        cur = next
    }
    return next
};

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))