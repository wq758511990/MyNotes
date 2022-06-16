var outerTrees = function (trees) {
  const n = trees.length;
  if (n < 4) {
    return trees;
  }
  /* 按照 x 大小进行排序，如果 x 相同，则按照 y 的大小进行排序 */
  trees.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  const hull = [];
  const used = new Array(n).fill(0);
  /* hull[0] 需要入栈两次，不进行标记 */
  hull.push(0);
  /* 求出凸包的下半部分 */
  for (let i = 1; i < n; i++) {
    while (hull.length > 1 && cross(trees[hull[hull.length - 2]], trees[hull[hull.length - 1]], trees[i]) < 0) {
      used[hull[hull.length - 1]] = false;
      hull.pop();
    }
    used[i] = true;
    hull.push(i);
  }
  const m = hull.length;
  /* 求出凸包的上半部分 */
  for (let i = n - 2; i >= 0; i--) {
    if (!used[i]) {
      while (hull.length > m && cross(trees[hull[hull.length - 2]], trees[hull[hull.length - 1]], trees[i]) < 0) {
        used[hull[hull.length - 1]] = false;
        hull.pop();
      }
      used[i] = true;
      hull.push(i);
    }
  }
  /* hull[0] 同时参与凸包的上半部分检测，因此需去掉重复的 hull[0] */
  hull.pop();
  const size = hull.length;
  const res = new Array(size).fill(0).map(() => new Array(2).fill(0));
  for (let i = 0; i < size; i++) {
    res[i] = trees[hull[i]];
  }
  return res;
}

const cross = (p, q, r) => {
  return (q[0] - p[0]) * (r[1] - q[1]) - (q[1] - p[1]) * (r[0] - q[0]);
}