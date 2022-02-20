/**
* @param {number[][]} matrix
* @return {boolean}
*/
var isToeplitzMatrix = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  let flag = true
  for (let i = 0; i < m - 1; i++) {
    let curArr = matrix[i].slice(0, n - 1)
    let nextArr = matrix[i + 1].slice(1, n)
    if (curArr.toString() !== nextArr.toString()) {
      flag = false
      break
    }
  }
  return flag
};

console.log(isToeplitzMatrix([[1, 2], [2, 2]]))