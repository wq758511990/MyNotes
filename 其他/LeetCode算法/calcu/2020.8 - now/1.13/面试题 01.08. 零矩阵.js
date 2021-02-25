/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rows = matrix.length
  if (!rows) {
    return matrix
  }
  const columns = matrix[0].length
  function clearRowAndCol(row, column) {
    // 清空行
    for (j = 0; j < columns; j++) {
      if (matrix[row][j] !== 0) {
        matrix[row][j] = null
      }
    }
    // 清空列
    for (i = 0; i < rows; i++) {
      if (matrix[i][column] !== 0) {
        matrix[i][column] = null
      }
    }
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] === 0) {
        // 清空该0所在行列
        clearRowAndCol(i, j)
      }
    }
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] === null) {
        matrix[i][j] = 0
      }
    }
  }
  return matrix
}

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
)
