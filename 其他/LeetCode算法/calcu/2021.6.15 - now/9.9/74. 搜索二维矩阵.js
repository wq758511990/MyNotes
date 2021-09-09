/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const row = matrix.length;
  const col = matrix[0].length;
  let i = 0,
    j = col - 1;
  while (isValidIndex(i, row) && isValidIndex(j, col)) {
    if (matrix[i][j] === target) {
      return true;
    } else if (matrix[i][j] > target) {
      j--;
    } else {
      i++;
    }
  }
  return false;

  function isValidIndex(index, total) {
    return index >= 0 && index < total;
  }
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    30
  )
);
