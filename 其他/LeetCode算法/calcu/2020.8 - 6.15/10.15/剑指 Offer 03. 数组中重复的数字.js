/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  let numDict = {}
  for (let num of nums) {
    if (numDict[num]) {
      return num
    } else {
      numDict[num] = 1
    }
  }
};

console.log(findRepeatNumber([1, 2, 2, 3, 4]))