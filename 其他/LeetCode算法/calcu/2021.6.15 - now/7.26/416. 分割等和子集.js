/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canPartition = function(nums) {
     let sum = 0
     for (let num of nums) {
         sum += num
     }
     if (sum % 2 !== 0) return false
     const memo = new Map()
     const target = sum / 2
     const dfs = (curSum, i) => {
         if (i === nums.length || curSum > target) {
             return false
         }
         if (curSum === target) {
             return true
         }
         const key = curSum + '&' + i
         if (memo.has(key)) {
             return memo.get(key)
         }

         const res = dfs(curSum + nums[i], i + 1) || dfs(curSum, i + 1)
         memo.set(key, res)
         return res
     }
     return dfs(0, 0)
};


console.log(canPartition([1, 1, 2, 2]))