/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
  const n = grid.length;
  const m = grid?.[0]?.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) continue;
      grid[i][j] =
        Math.max(grid?.[i - 1]?.[j] || 0, grid?.[i]?.[j - 1] || 0) + grid[i][j];
    }
  }
  return grid[n - 1][m - 1];
};

console.log(
  maxValue([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
