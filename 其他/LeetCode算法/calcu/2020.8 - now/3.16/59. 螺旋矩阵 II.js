/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  if (n === 0) {
    return []
  }
  const visited = new Array(n).fill(0).map(() => new Array(n).fill(false))
  const ans = new Array(n).fill(0).map(() => new Array(n).fill(0))
  const dr = [0, 1, 0, -1]
  const dc = [1, 0, -1, 0]
  let di = 0
  let num = 1
  let i = 0; j = 0
  while (num <= n ** 2) {
    ans[i][j] = num
    visited[i][j] = true
    num += 1
    const ni = i + dr[di]
    const nj = j + dc[di]
    if (0 <= ni && ni < n && 0 <= nj && nj < n && !visited[ni][nj]) {
      i = ni
      j = nj
    } else {
      di = (di + 1) % 4
      i += dr[di]
      j += dc[di]
    }
  }
  return ans
};

console.log(generateMatrix(1))