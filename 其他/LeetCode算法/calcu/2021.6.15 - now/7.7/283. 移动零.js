/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    const n = nums.length
    let l = 0, r = 0
    while(r < n) {
        if(nums[r]) {
            [nums[l], nums[r]] = [nums[r], nums[l]]
            l++
        }
        r++
    }
    return nums
};

console.log(moveZeroes([0,1,0,3,12]))