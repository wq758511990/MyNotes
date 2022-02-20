/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let dict = {};
  for (let i in nums) {
    let targetleft = target - nums[i];
    if (dict[targetleft] !== undefined) {
      return [i, dict[targetleft]];
    }
    dict[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
