/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  let resArr = []
  const n = nums.length
  for (let i = 0; i < n; i++) {
    let cnt = 0
    for (let j = 0; j < n; j++) {
      if (nums[i] > nums[j]){
        cnt ++
      }
    }
    resArr.push(cnt)
  }
  return resArr
};


console.log(smallerNumbersThanCurrent([8,1,2,2,3]))