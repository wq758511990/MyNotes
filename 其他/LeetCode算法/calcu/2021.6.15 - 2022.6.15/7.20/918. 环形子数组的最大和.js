/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let sum = nums.reduce((a, b) => a + b)
    let min = minSubArray(nums)
    let max = maxSubArray(nums)
    return Math.max(max, min === sum ? Number.MIN_SAFE_INTEGER : sum - min)
};

var minSubArray = function(nums) {
    let min = nums[0]
    let pre = 0
    nums.forEach(x => {
        pre = Math.min(pre + x, x)
        min = Math.min(min, pre)
    })
    return min
}

var maxSubArray = function(nums) {
    let max = nums[0]
    let pre = 0
    nums.forEach(x => {
        pre = Math.max(pre + x, x)
        max = Math.max(max, pre)
    })
    return max
};
console.log(maxSubarraySumCircular([5,-3,5]))