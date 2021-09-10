/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  const length = nums.length;
  let l = 0,
    r = length - 1;
  let min = Number.MAX_SAFE_INTEGER;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[l] <= nums[mid]) {
      // 左边有序
      min = nums[l] <= min ? nums[l] : min;
      l = mid + 1;
    } else {
      // 右边有序
      min = nums[mid] <= min ? nums[mid] : min;
      r = mid - 1;
    }
  }
  return min;
};

console.log(findMin([3, 4, 5, 0, 1, 2]));
