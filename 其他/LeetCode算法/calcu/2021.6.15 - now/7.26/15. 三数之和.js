/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
     let res = []
     if (!nums.length || nums.length <= 2) {
         return res
     }
     nums.sort((a, b) => a - b)
     for (let i = 0; i < nums.length; i++) {
         if (nums[i] > 0) {
             return res
         }
         if (nums[i - 1] !== undefined && nums[i] === nums[i - 1]) {
             continue
         }
         let left = i + 1
         let right = nums.length - 1
         while(left < right) {
             let tmp = nums[i] + nums[left] + nums[right]
             if (tmp === 0) {
                res.push([nums[i], nums[left], nums[right]])
                while(left < right && nums[left] === nums[left + 1]) left++
                while(left < right && nums[right] === nums[right - 1]) right--
                left++
                right--
             } else if (tmp > 0) {
                right--
            } else {
                left++
            }
         }
     }
     return res
  };

  console.log(threeSum([-1,0,1,2,-1,-4]))