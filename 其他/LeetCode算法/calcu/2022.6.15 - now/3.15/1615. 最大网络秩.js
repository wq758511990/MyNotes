const { max } = require("lodash");

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
  const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0)); // 记录每座城市之间是否有道路连接
  const cnt = new Array(n).fill(0); // 记录每座城市连接的道路，此时不去重
  for (const v of roads) {
    // v[0]和v[1]有道路，故而0, 1、1, 0均记录为true
    matrix[v[0]][v[1]] = true;
    matrix[v[1]][v[0]] = true;
    cnt[v[0]]++;
    cnt[v[1]]++;
  }

  let maxRank = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // 0-n遍历每座城市组合，获取最大rank值
      // 若两座城市之间互相连通，此时需要 -1， 因为计数时没有去重
      let rank = cnt[i] + cnt[j] - (matrix[i][j] ? 1 : 0);
      maxRank = Math.max(maxRank, rank);
    }
  }
  return maxRank;
};

console.log(
  maximalNetworkRank(4, [
    [0, 1],
    [0, 3],
    [1, 2],
    [1, 3],
  ])
);
