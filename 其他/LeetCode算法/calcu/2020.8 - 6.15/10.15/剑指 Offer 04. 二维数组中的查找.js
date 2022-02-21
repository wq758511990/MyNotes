/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  let rows = matrix.length
  if (!rows) {
    return false
  }
  let columns = matrix[0].length
  if (!columns) {
    return false
  }
  for (let i in matrix) {
    // 如果当前数组第一位大于目标值，则没找到
    if (matrix[i][0] > target) {
      return false
    }
    let left = 0
    let right = matrix[i].length - 1
    while (left < right) {
      let mid = Math.floor((left + right) / 2)
      if (matrix[i][mid] > target) {
        right = mid
      } else if (matrix[i][mid] < target) {
        left = mid + 1
      } else {
        return true
      }
    }
    if (matrix[i][left] === target) {
      return true
    }
  }
  return false
};

console.log(findNumberIn2DArray([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]],
  5))