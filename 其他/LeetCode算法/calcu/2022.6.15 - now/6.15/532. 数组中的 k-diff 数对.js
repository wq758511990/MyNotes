/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  let visited = new Set()
  let resultSet = new Set()
  for (let key in nums) {
    if (visited.has(nums[key] + k)) {
      resultSet.add(nums[key])
    }

    if (visited.has(nums[key] - k)) {
      resultSet.add(nums[key] - k)
    }

    visited.add(nums[key])
  }
  return resultSet.size
};

console.log(findPairs([1, 3, 1, 5, 4], 0));
