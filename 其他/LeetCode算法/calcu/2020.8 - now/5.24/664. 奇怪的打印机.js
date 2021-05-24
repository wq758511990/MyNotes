var strangePrinter = function (s) {
  const len = s.length
  // 创建一个 len * len 的数组
  const dp = new Array(len).fill(0).map(() => new Array(len).fill(0))
  // 对于第一个参数 i, 在后面的判断中会用到 k+1，为了不存在滞后性，所以从大到小进行遍历
  for (let i = len - 1; i >= 0; i--) {
    dp[i][i] = 1
    // 对于参数 j, 由于它可能是 [i,j] 的一个，所以要从小到大来遍历
    for (let j = i + 1; j < len; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i][j - 1]
      } else {
        let min = Infinity
        for (let k = i; k < j; k++) {
          min = Math.min(min, dp[i][k] + dp[k + 1][j])
        }
        dp[i][j] = min
      }
    }
  }
  return dp[0][len - 1]
};