/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function (nums, firstLen, secondLen) {
  let n = nums.length;
  let sum = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    sum[i + 1] = sum[i] + nums[i];
  }

  function helper(sum, len1, len2) {
    let leftMax = 0,
      ans = 0,
      rightSum = 0;
    for (let i = len1; i <= n - len2; i++) {
      leftMax = Math.max(leftMax, sum[i] - sum[i - len1]);
      rightSum = sum[i + len2] - sum[i];
      ans = Math.max(ans, leftMax + rightSum);
    }
    return ans;
  }

  return Math.max(
    helper(sum, firstLen, secondLen),
    helper(sum, secondLen, firstLen)
  ); // add firstLen elements and compare with)
};

console.log(maxSumTwoNoOverlap([3, 8, 1, 3, 2, 1, 8, 9, 0], 3, 2));
