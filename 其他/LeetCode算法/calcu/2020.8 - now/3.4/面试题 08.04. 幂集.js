/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const ans = [[]]
  const n = nums.length
  if (!n) {
    return []
  }
  for (var num of nums) {
    let curLength = ans.length
    for (var i = 0; i < curLength; i++) {
      const arr = ans[i]
      const nArr = arr.concat([num])
      ans.push(nArr)
    }
  }
  return ans
}

console.log(subsets([1, 2, 3]))
