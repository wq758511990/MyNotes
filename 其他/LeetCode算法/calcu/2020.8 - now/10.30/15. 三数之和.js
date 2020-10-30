/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [];
  if (!nums || nums.length <= 2) return res;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) return res;
    if (nums[i - 1] !== undefined && nums[i] === nums[i - 1]) continue;
    let tmp = nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let tmp = nums[left] + nums[right] + nums[i];
      if (tmp === 0) {
        res.push([nums[left], nums[right], nums[i]]);

        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (tmp > 0) {
        right -= 1;
      } else {
        left += 1;
      }
    }
  }
  return res;
};

console.log(threeSum([1, -1, -1, 0]));
