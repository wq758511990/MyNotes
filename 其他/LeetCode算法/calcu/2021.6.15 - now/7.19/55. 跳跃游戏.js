/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    const n = nums.length
    let rightMost = 0
    for (let i = 0; i < nums.length; i++) {
        if (i <= rightMost) {
            rightMost = Math.max(rightMost, i + nums[i])
           if (rightMost >= n - 1) {
               return true
           }
        }
    }
    return false
};

console.log(canJump([2,3,1,1,4]))