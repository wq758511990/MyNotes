/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  // let arr = []
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] % 2 === 0) {
  //     arr.unshift(nums[i])
  //   } else {
  //     arr.push(nums[i])
  //   }
  // }
  // return arr

  const n = nums.length
  let l = 0, r = n - 1
  while (l < r) {
    while (nums[l] % 2 === 0 && l < r) {
      l++
    }
    while (nums[r] % 2 === 1 && l < r) {
      r--
    }
    [nums[l], nums[r]] = [nums[r], nums[l]]
    l++
    r--
  }
  return nums
};


console.log(sortArrayByParity([3, 1, 2, 4]))