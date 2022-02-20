/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let rows = matrix.length
  if (!rows) return []
  let columns = matrix[0].length
  if (!columns) return []

  let seen = JSON.parse(JSON.stringify(Array(rows).fill(Array(columns).fill(false))))
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  let direct = 0, r = 0, c = 0
  let res = []

  let total = rows * columns
  while (total--) {
    res.push(matrix[r][c])
    seen[r][c] = true
    let nr = r + directions[direct][0], nc = c + directions[direct][1]
    if (0 <= nr && nr < rows && 0 <= nc && nc < columns && !seen[nr][nc]) {
      r = nr
      c = nc
    } else {
      direct = (direct + 1) % 4
      r = r + directions[direct][0]
      c = c + directions[direct][1]
    }
  }
  return res
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))