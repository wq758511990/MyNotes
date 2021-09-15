/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const length = height.length;
  let max = 0;
  let l = 0,
    r = length - 1;
  while (l <= r) {
    max = Math.max(max, (r - l) * Math.min(height[l], height[r]));
    if (height[l] <= height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
