/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  // const n = nums.length
  // const tmp = new Array(n + 1).fill(0)
  // const ans = []
  // for (let i = 0; i < nums.length; i++) {
  //   let num = nums[i]
  //   tmp[num] += 1
  // }
  // for (let i = 1; i < tmp.length; i++) {
  //   if (tmp[i] === 2) {
  //     ans.push(i)
  //   }
  // }
  // for (let i = 1; i < tmp.length; i++) {
  //   if (tmp[i] === 0) {
  //     ans.push(i)
  //   }
  // }
  // return ans
  const n = nums.length
  const dict = {}
  const ans = new Array(2).fill(0)
  for (const num of nums) {
    dict[num] = (dict[num] || 0) + 1
  }
  for (let i = 1; i <= n; i++) {
    if (dict[i] === 2) {
      ans[0] = i
    } else if (!dict[i]) {
      ans[1] = i
    }
  }
  return ans
};

console.log(findErrorNums([1, 2, 2, 4]))