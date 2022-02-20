/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var medianSlidingWindow = function (nums, k) {
  const isOdd = k % 2 === 0
  const ans = []
  let right = k
  let left = 0
  while (right <= nums.length) {
    const curArr = nums.slice(left, right).sort((a, b) => a - b)
    const mid = isOdd ? (k / 2) : Math.floor(k / 2)
    const midNum = isOdd ? (curArr[mid] + curArr[mid - 1]) / 2 : curArr[mid]
    ans.push(midNum)
    left++
    right++
  }
  return ans
};


console.log(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))