/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function (points, queries) {
  const m = queries.length;
  const n = points.length;
  const ans = new Array(m).fill(0);
  for (let i = 0; i < m; i++) {
    const queryCircle = queries[i];
    const cx = queryCircle[0];
    const cy = queryCircle[1];
    const cr = queryCircle[2];
    for (let j = 0; j < n; j++) {
      const px = points[j][0],
        py = points[j][1];
      if ((cx - px) ** 2 + (cy - py) ** 2 <= cr ** 2) {
        ans[i]++;
      }
    }
  }
  return ans;
};

console.log(
  countPoints(
    [
      [1, 3],
      [3, 3],
      [5, 3],
      [2, 2],
    ],
    [
      [2, 3, 1],
      [4, 3, 1],
      [1, 1, 2],
    ]
  )
);
