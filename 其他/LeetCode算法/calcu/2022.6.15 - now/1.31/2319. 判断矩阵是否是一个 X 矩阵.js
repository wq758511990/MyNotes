/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function (grid) {
  const n = grid.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 左上 -> 右下， 右上 -> 左下
      if (i === j || i + j === 3) {
        if (grid[i][j] === 0) return false;
      } else {
        if (grid[i][j] !== 0) return false;
      }
    }
  }
  return true;
};

console.log(
  checkXMatrix([
    [5, 7, 0],
    [0, 3, 1],
    [0, 5, 0],
  ])
);
