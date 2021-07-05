/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const n = nums.length
    let l = 0, r = n - 1
    while(l < r) {
        const mid = Math.floor((l + r) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return nums[l] === target ? l : -1
};

console.log(search([-1,0,3,5,9,12], 2))