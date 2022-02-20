/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const rows = matrix.length
  if (!rows) {
    return []
  }
  const columns = matrix[0].length
  const ans = []
  const dr = [0, 1, 0, -1]
  const dc = [1, 0, -1, 0]
  let di = 0,
    i = 0,
    j = 0
  while (ans.length < rows * columns) {
    ans.push(matrix[i][j])
    matrix[i][j] = null
    const ni = i + dr[di]
    const nj = j + dc[di]
    if (
      0 <= ni &&
      ni < rows &&
      0 <= nj &&
      nj < columns &&
      matrix[ni][nj] !== null
    ) {
      i = ni
      j = nj
    } else {
      di = (di + 1) % 4
      i += dr[di]
      j += dc[di]
    }
  }
  return ans
}

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
)
