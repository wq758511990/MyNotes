/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    const n = nums.length
    let l = 0, r = n - 1
    while(l <= r) {
        const mid = Math.floor((l + r) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return l
};

console.log(searchInsert([1, 3, 5, 6], 2))