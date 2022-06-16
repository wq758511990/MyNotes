/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = nums => {
  const ans = []
  for (let i = 0; i < nums.length; i++) {
    const num = Math.abs(nums[i])
    if (nums[num - 1] > 0) {
      nums[num - 1] *= -1
    } else {
      ans.push(num)
    }
  }
  return ans
}

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]))