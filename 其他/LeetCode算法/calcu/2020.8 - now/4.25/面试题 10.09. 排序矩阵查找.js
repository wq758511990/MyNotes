/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const rows = matrix.length
  if (!rows) {
    return false
  }
  const columns = matrix[0].length
  let r = 0, c = columns - 1
  while (0 <= r && r < rows && (0 <= c && c < columns)) {
    if (target > matrix[r][c]) {
      r += 1
    } else if (target < matrix[r][c]) {
      c -= 1
    } else {
      return true
    }
  }
  return false
};

console.log(searchMatrix([[-1, 3]], 3))