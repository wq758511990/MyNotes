/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  const rows = matrix.length
  const columns = matrix[0].length
  this.sums = JSON.parse(JSON.stringify(new Array(rows).fill(new Array(columns).fill(0))))
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < columns; j++) {
      this.sums[i][j] = 0
      if (i - 1 >= 0) {
        this.sums[i][j] += this.sums[i - 1][j]
      }
      if (j - 1 >= 0) {
        this.sums[i][j] += this.sums[i][j - 1]
      }
      if (i > 0 && j > 0) {
        this.sums[i][j] -= this.sums[i - 1][j - 1]
      }
      this.sums[i][j] += matrix[i][j]
    }
  }
  console.log(this.sums)
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let result = this.sums[row2][col2]
  if (row1) {
    result -= this.sums[row1 - 1][col2]
  }
  if (col1) {
    result -= this.sums[row2][col1 - 1]
  }
  if (row1 && col1) {
    result += this.sums[row1 - 1][col1 - 1]
  }
  return result
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  const rows = matrix.length
  if (!rows) {
    return matrix
  }
  const columns = matrix[0].length
  this.sums = JSON.parse(JSON.stringify(new Array(rows + 1).fill(new Array(columns + 1).fill(0))))
  for (var i = 1; i < rows + 1; i++) {
    for (var j = 1; j < columns + 1; j++) {
      this.sums[i][j] = this.sums[i - 1][j] + this.sums[i][j - 1] - this.sums[i - 1][j - 1] + matrix[i - 1][j - 1]
    }
  }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return this.sums[row2 + 1][col2 + 1] - this.sums[row2 + 1][col1] - this.sums[row1][col2 + 1] + this.sums[row1][col1]
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

var obj = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
])
console.log(obj.sumRegion(2, 1, 4, 3))
console.log(obj.sumRegion(1, 1, 2, 2))
console.log(obj.sumRegion(1, 2, 2, 4))
console.log(obj.sumRegion(0, 0, 0, 0))