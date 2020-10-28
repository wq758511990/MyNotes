/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  //   for (let i in nums) {
  //     if (nums[i] === val) {
  //       nums.splice(i, 1);
  //     }
  //   }
  //   return nums;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i -= 1;
    }
  }
  return nums;

  // 双指针覆盖
  // let i = 0
  // for (let j = 0; j < nums.length; j++) {
  //     if (nums[j] !== val) {
  //         nums[i] = nums[j]
  //         i ++
  //     }
  // }
  // return i
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
