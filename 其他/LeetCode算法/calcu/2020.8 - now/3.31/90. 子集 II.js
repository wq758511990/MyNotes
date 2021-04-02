/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b)
  let t = []
  const ans = []
  const n = nums.length
  const dfs = (preChoose, cur) => {
    if (cur === n) {
      ans.push(t.slice())
      return
    }
    dfs(false, cur + 1)
    if (!preChoose && cur > 0 && nums[cur] === nums[cur - 1]) {
      return
    }
    t.push(nums[cur])
    dfs(true, cur + 1)
    t = t.slice(0, t.length - 1)
  }
  dfs(false, 0)
  return ans

  // nums.sort((a, b) => a - b)
  // let t = [],
  //   ans = []
  // const dfs = (choosePre, cur, nums) => {
  //   if (cur === nums.length) {
  //     ans.push(t.slice())
  //     return
  //   }
  //   dfs(false, cur + 1, nums)
  //   if (!choosePre && cur > 0 && nums[cur - 1] === nums[cur]) {
  //     return
  //   }
  //   t.push(nums[cur])
  //   dfs(true, cur + 1, nums)
  //   t = t.slice(0, t.length - 1)
  // }
  // dfs(false, 0, nums)
  // return ans

  // 子集1
  // const tmp = []
  // const ans = []
  // const n = nums.length
  // const dfs = (cur) => {
  //   if (cur === n) {
  //     ans.push(tmp.slice())
  //     return
  //   }
  //   tmp.push(nums[cur])
  //   dfs(cur + 1)
  //   tmp.pop()
  //   dfs(cur + 1)
  // }
  // dfs(0)
  // return ans
}

console.log(subsetsWithDup([1, 2, 2]))
