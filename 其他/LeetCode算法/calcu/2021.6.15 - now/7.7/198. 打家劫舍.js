/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length
    const dp = new Array(n).fill(0)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Math.max((dp[i - 2] || 0) + nums[i], dp[i - 1] || 0)
    }
    return dp[n - 1]
};

console.log(rob([2,7,9,3,1]))