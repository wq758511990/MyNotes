/**
 * @param {number[][]} land
 * @return {number[]}
 */
var pondSizes = function (land) {
  let count
  const rows = land.length
  const columns = land[0].length
  const res = []
  const marks = JSON.parse(JSON.stringify(new Array(rows).fill(new Array(columns).fill(false))))
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (land[i][j] === 0 && !marks[i][j]) {
        marks[i][j] = true
        count = 1
        countZero(i, j)
        res.push(count)
      }
    }
  }

  return res.sort((a, b) => a - b)

  function countZero (i, j) {
    const di = [-1, -1, -1, 0, 1, 1, 1, 0]
    const dc = [-1, 0, 1, 1, 1, 0, -1, -1]

    for (let k = 0; k < 8; k++) {
      let ni = i + di[k]
      let nc = j + dc[k]
      if (0 <= ni && ni < rows && 0 <= nc && nc < columns && land[ni][nc] === 0 && !marks[ni][nc]) {
        count++
        marks[ni][nc] = true
        countZero(ni, nc)
      }
    }
  }
};

console.log(pondSizes([
  [0, 2, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 1],
  [0, 1, 0, 1]
]))