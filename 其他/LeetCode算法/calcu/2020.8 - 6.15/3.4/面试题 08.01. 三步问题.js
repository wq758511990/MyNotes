/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function (n) {
  if (n <= 1) return 1
  let dp = [1, 1, 2, 4]
  for (var i = 4; i <= n; i++) {
    dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1]
  }
  return dp[n]
}

console.log(waysToStep(5))
