/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    let sum = 1
    for (let j = i; j < nums.length; j++) {
      sum *= nums[j]
      if (sum < k) {
        ans += 1
      } else {
        break
      }
    }
  }
  return ans
};


console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100))