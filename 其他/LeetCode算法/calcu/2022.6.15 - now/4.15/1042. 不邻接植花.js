/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function (n, paths) {
  const adj = new Array(n).fill(null).map(() => []);
  for (let path of paths) {
    adj[path[0] - 1].push(path[1] - 1);
    adj[path[1] - 1].push(path[0] - 1);
  }
  let ans = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let colored = new Array(5).fill(false); // 找出关联的花园
    for (let vertax of adj[i]) {
        // vertax 为对应的花园 ， ans[vertax] 为对应的花园的颜色， 这里指的是对应的花园已经有颜色
      colored[ans[vertax]] = true;
    }
    for (let j = 1; j <= 4; j++) {
        // 遍历1-4，
      if (!colored[j]) {
        ans[i] = j;
        break;
      }
    }
  }
  return ans;
};

console.log(
  gardenNoAdj(4, [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 1],
    [1, 3],
    [2, 4],
  ])
);
