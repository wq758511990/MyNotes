/**
 * @param {number[]} nums
 * @return {number}
 */

 var rob = function(nums) {
    const n = nums.length
    if (n === 1) {
        return nums[0]
    } else if (n === 2) {
        return Math.max(nums[0], nums[1])
    } else {
        return Math.max(robRange(nums, 0, n - 1), robRange(nums, 1, n))
    }
};
 var robRange = function(nums, start, end) {
    const dp = new Array(end).fill(0)
    for (let i = start; i < end; i++) {
        dp[i] = Math.max((dp[i - 2] || 0) + nums[i], dp[i - 1] || 0)
    }
    return dp[end - 1]
};
console.log(rob([1,2,3,1]))