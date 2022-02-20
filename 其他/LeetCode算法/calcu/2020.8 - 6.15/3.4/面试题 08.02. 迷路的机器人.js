/**
 * @param {number[][]} obstacleGrid
 * @return {number[][]}
 */
var pathWithObstacles = function (obstacleGrid) {
  const r = obstacleGrid.length
  if (!r) {
    return []
  }
  const c = obstacleGrid[0].length
  let ans = []
  let flag = false
  findPath(0, 0, [])
  return flag ? ans[0] : []
  function findPath(i, j, tmpArr) {
    if (i >= r || j >= c || flag || obstacleGrid[i][j] === 1) {
      return
    }
    tmpArr.push([i, j])
    if (i === r - 1 && j === c - 1) {
      flag = true
      ans.push(tmpArr)
      return
    }
    obstacleGrid[i][j] = 1
    findPath(i, j + 1, tmpArr.slice())
    findPath(i + 1, j, tmpArr.slice())
  }
}

console.log(
  pathWithObstacles([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0],
  ])
)
