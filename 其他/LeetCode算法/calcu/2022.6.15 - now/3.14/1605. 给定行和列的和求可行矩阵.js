/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
  const n = rowSum.length,
    m = colSum.length;
  const matrix = new Array(n).fill(0).map(() => new Array(m).fill(0));
  let i = 0,
    j = 0;
  while (i < n && j < m) {
    const v = Math.min(rowSum[i], colSum[j]);
    matrix[i][j] = v;
    rowSum[i] -= v;
    colSum[j] -= v;
    if (rowSum[i] === 0) {
      ++i;
    }
    if (colSum[j] === 0) {
      ++j;
    }
  }
  return matrix;
};

console.log(restoreMatrix([3, 8], [4, 7]));
