/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  const n = grid.length;
  const ans = [];
  for (let i = 1; i < n - 1; i++) {
    const tmp = [];
    for (let j = 1; j < n - 1; j++) {
      const max = getMax(i, j);
      tmp.push(max);
    }
    ans.push(tmp);
  }

  function getMax(x, y) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        max = Math.max(max, grid[i][j]);
      }
    }
    return max;
  }

  return ans;
};

console.log(
  largestLocal([
    [9, 9, 8, 1],
    [5, 6, 2, 6],
    [8, 2, 6, 4],
    [6, 2, 2, 2],
  ])
);
