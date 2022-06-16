/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const length = nums.length;
  let l = 0,
    r = length - 1;
  let cur = 0;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] > target) {
      r = mid - 1;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      cur = mid;
      l = r + 1;
    }
  }
  if (nums[cur] !== target) {
    return [-1, -1];
  }
  let start = cur,
    end = cur;
  while (nums[start] === target) {
    start--;
  }
  while (nums[end] === target) {
    end++;
  }
  return [start + 1, end - 1];
};

console.log(searchRange([5, 5, 6, 6, 6, 6, 7, 8, 8, 9], 6));
