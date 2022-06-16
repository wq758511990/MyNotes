/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  let bottom = 0
  let xz = 0
  let xy = 0
  for (let i = 0; i < grid.length; i++) {
    const gridLength = grid[0].length;
    let columnMax = 0
    let rowMax = 0
    for (let j = 0; j < gridLength; j++) {
      if (grid[i][j] !== 0) {
        bottom += 1;
      }
      columnMax = Math.max(columnMax, grid[i][j])
      rowMax = Math.max(rowMax, grid[j][i])
    }
    xy += columnMax
    xz += rowMax
  }
  return bottom + xz + xy;
};

console.log(projectionArea([[1, 2], [3, 4]]))