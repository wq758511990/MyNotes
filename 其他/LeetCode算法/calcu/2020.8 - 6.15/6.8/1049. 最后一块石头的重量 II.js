/**
 * @param {number[]} stones
 * @return {number}
 */

var lastStoneWeightII = function (stones) {
  let sum = 0;
  for (const weight of stones) {
    sum += weight;
  }
  const n = stones.length, m = Math.floor(sum / 2);
  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(false));
  dp[0][0] = true;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j <= m; ++j) {
      if (j < stones[i]) {
        dp[i + 1][j] = dp[i][j];
      } else {
        dp[i + 1][j] = dp[i][j] || dp[i][j - stones[i]];
      }
    }
  }
  for (let j = m; ; --j) {
    if (dp[n][j]) {
      return sum - 2 * j;
    }
  }
};

var lastStoneWeightII = function (stones) {
  let sum = 0
  for (const weight of stones) {
    sum += weight
  }
  const n = stones.length, m = Math.floor(sum / 2)
  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(false))
  dp[0][0] = true
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j <= m; ++j) {
      if (j < stones[i]) {
        dp[i + 1][j] = dp[i][j]
      } else {
        dp[i + 1][j] = dp[i][j] || dp[i][j - stones[i]]
      }
    }
  }
  for (let j = m; ; --j) {
    if (dp[n][j]) {
      return sum - 2 * j
    }
  }
}


console.log(lastStoneWeightII([2, 7, 4, 1, 8, 1]))