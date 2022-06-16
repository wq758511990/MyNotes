/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let max = nums[0]
    let pre = 0
    nums.forEach(x => {
        pre = Math.max(pre + x, x)
        max = Math.max(max, pre)
    })
    return max
};

// var maxSubArray = function(nums) {
//     let pre = 0, maxAns = nums[0];
//     nums.forEach((x) => {
//         pre = Math.max(pre + x, x);
//         maxAns = Math.max(maxAns, pre);
//     });
//     return maxAns;
// };


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))