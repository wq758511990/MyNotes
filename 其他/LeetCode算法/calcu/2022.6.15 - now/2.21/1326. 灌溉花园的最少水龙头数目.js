/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function (n, ranges) {
  // 小于0部分以及大于n部分不用管，花园范围仅0-n
  const intervals = new Array(n).fill(new Array());
  for (let i = 0; i <= n; i++) {
    // 获取每个水龙头可以灌溉到的范围，去除小于0以及大于n的部分
    let start = Math.max(0, i - ranges[i]);
    let end = Math.min(n, i + ranges[i]);
    intervals[i] = [start, end];
  }
  // 给灌溉范围排序，
  intervals.sort((a, b) => a[0] - b[0]);
  // dp[0]为初始节点，dp[n]截止节点，此处长度为n+1
  const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  // 设置dp[0]为0
  dp[0] = 0;
  for (const interval of intervals) {
    let [start, end] = interval;
    // 如果dp[start]为我们设置的最大值，说明当前节点i无法通过前面的原因
    if (dp[start] === Number.MAX_SAFE_INTEGER) {
      return -1;
    }
    // 遍历当前灌溉范围的start和end，
    for (let j = start; j <= end; j++) {
      // 当前节点最小所需水龙头数量为 dp[start]节点需要的水龙头数量+1与当前节点dp[j]的最小值
      dp[j] = Math.min(dp[j], dp[start] + 1);
    }
  }
  return dp[n];
};

var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  // 倒推法
  // dp[11] = Math.min(dp[11 - 1] + 1, dp[11]) 遍历coins
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i]);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

// console.log(minTaps(7, [1, 2, 1, 0, 2, 1, 0, 1]));
console.log(coinChange([2], 3));
