/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  const rows = grid.length;
  const columns = grid[0].length;
  let length = 0;
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      if (grid[row][column] === 1) {
        length += 4;

        if (row && grid[row - 1][column] === 1) {
          length -= 2;
        }

        if (column && grid[row][column - 1] === 1) {
          length -= 2;
        }
      }
    }
  }
  return length;
};

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);
