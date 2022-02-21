/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let left = 0
  let right = k - 1
  let sum = nums.slice(0, k).reduce((a, b) => a + b)
  let maxAverage = sum / 4
  while (right < nums.length - 1) {
    sum -= nums[left]
    sum += nums[right + 1]
    let tmpMax = sum / k
    maxAverage = maxAverage > tmpMax ? maxAverage : tmpMax
    left++
    right++
  }
  return maxAverage
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4))