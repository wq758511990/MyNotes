/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let l = 0,
    r = 1,
    n = nums.length,
    minLength = Infinity,
    ans = nums[0];
  while (l <= r && r <= n) {
    if (ans < s) {
      ans += nums[r];
      r += 1;
    } else {
      minLength = minLength > r - l ? r - l : minLength;
      ans -= nums[l];
      l += 1;
    }
  }
  return minLength === Infinity ? 0 : minLength;
};

console.log(minSubArrayLen(100, [1]));
