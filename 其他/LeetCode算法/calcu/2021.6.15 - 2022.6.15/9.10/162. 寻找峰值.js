/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  // nums.push(Number.MIN_SAFE_INTEGER);
  // for (let i = 1; i < nums.length - 1; i++) {
  //   if (isTop(i)) {
  //     return i;
  //   }
  // }
  // return 0;
  // function isTop(cur) {
  //   return nums[cur] > nums[cur - 1] && nums[cur] > nums[cur + 1];
  // }
  // 二分
  const length = nums.length;
  let l = 0,
    r = length - 1;
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] > nums[mid + 1]) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
};

console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
