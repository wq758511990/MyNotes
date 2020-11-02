/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let dict = {};
  for (let i in nums) {
    if (dict[nums[i]] !== undefined && i - dict[nums[i]] <= k) return true;
    dict[nums[i]] = i;
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
