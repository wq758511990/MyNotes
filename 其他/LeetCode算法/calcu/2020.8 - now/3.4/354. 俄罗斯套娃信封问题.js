/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  const n = envelopes.length
  if (!n) return 0
  envelopes.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]))
  let heights = []
  for (var i = 0; i < n; i++) {
    heights[i] = envelopes[i][1]
  }
  return getLIS(heights)
}

function getLIS(nums) {
  let dp = new Array(nums.length).fill(1)
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return Math.max(...dp, 0)
}

console.log(
  maxEnvelopes([
    [2, 100],
    [3, 200],
    [4, 300],
    [5, 500],
    [5, 400],
    [5, 250],
    [6, 370],
    [6, 360],
    [7, 380],
  ])
)
