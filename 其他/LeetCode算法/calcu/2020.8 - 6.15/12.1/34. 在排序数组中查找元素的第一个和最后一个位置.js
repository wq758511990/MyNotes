/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // let length = nums.length
  // if (!length) return [-1, -1]
  // if (nums[0] > target) return [-1, -1]
  // let startIdx = -1
  // let count = 0
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === target) {
  //     count++
  //     if (startIdx === -1) {
  //       startIdx = i
  //     }
  //   }
  // }
  // return count ? [startIdx, startIdx + count - 1] : [-1, -1]

  const length = nums.length
  let l = 0
  let r = length
  let idx = -1
  while (l < r) {
    let mid = Math.floor((l + r) / 2)
    if (nums[mid] < target) {
      l = mid + 1
    } else if (nums[mid] > target) {
      r = mid
    } else {
      idx = mid
      break
    }
  }
  if (idx === -1) {
    return [-1, -1]
  }
  let left = idx, right = idx
  while (nums[left] === target) {
    left -= 1
  }
  while (nums[right] === target) {
    right += 1
  }
  return [left + 1, right - 1]
};

console.log(searchRange([5, 7, 7, 8, 10], 8))