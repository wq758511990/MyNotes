/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const length = nums.length;
  let l = 0,
    r = length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) return mid;
    if (nums[l] <= nums[mid]) {
      // 左边有序
      if (nums[l] <= target && target < nums[mid]) {
        // target在有序内
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (nums[r] >= target && target > nums[mid]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return -1;
};

console.log(search([3, 1], 1));
