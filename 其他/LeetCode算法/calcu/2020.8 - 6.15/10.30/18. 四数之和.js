/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let res = [];
  const length = nums.length;
  if (!nums || length <= 3) return res;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < length - 3; i++) {
    const minSum = nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3];
    const maxSum =
      nums[i] + nums[length - 1] + nums[length - 2] + nums[length - 3];
    if (minSum > target) break;
    if (maxSum < target) continue;
    if (nums[i - 1] !== undefined && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let l = j + 1,
        r = length - 1;
      while (l < r) {
        let tmp = nums[i] + nums[j] + nums[l] + nums[r];
        if (tmp === target) {
          res.push([nums[i], nums[j], nums[l], nums[r]]);
          while (l < r && nums[l] === nums[l + 1]) {
            l++;
          }
          while (l < r && nums[r] === nums[r - 1]) {
            r--;
          }
          l++;
          r--;
        } else if (tmp > target) {
          r--;
        } else {
          l++;
        }
      }
    }
  }
  return res;
};

console.log(fourSum([0, 1, 5, 0, 1, 5, 5, -4], 11));
