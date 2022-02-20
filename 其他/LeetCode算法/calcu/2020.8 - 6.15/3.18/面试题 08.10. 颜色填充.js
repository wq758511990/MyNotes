/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const rows = image.length
  if (!rows) {
    return []
  }
  const columns = image[0].length
  const marks = new Array(rows).fill(0).map(() => new Array(columns).fill(false))
  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
  const preColor = image[sr][sc]
  dfs(sr, sc, preColor)
  function dfs (r, s, preColor) {
    image[r][s] = newColor
    marks[r][s] = true
    for (var direction of directions) {
      const nr = r + direction[0]
      const ns = s + direction[1]
      if (0 <= nr && nr < rows && 0 <= ns && ns < columns && image[nr][ns] === preColor && !marks[nr][ns]) {
        dfs(nr, ns, preColor)
      }
    }
  }
  return image
};

console.log(floodFill([[0, 0, 0], [0, 0, 0]],
  0,
  0,
  2))