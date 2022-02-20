var tictactoe = function (board) {
  let isPending = false
  let len = board.length
  let pattern = /^([XO])\1*$/
  let crossL = ''
  let crossR = ''
  for (let i = 0; i < len; i++) {
    // 生成行
    let row = board[i]
    if (!isPending && / /.test(row)) isPending = true
    // 匹配行
    if (row.match(pattern)) { return row.match(pattern)[1] }

    let col = ''
    for (let j = 0; j < len; j++) {
      // 生成列
      col += board[j][i]
      // 生成右上到左下交叉线
      if (i + j === len - 1) crossR += row[j]
    }
    // 匹配列
    if (col.match(pattern)) { return col.match(pattern)[1] }

    // 生成左上到右下交叉线
    crossL += row[i]
  }
  // 匹配右上到左下交叉线
  if (crossR.match(pattern)) { return crossR.match(pattern)[1] }
  // 匹配左上到右下交叉线
  if (crossL.match(pattern)) { return crossL.match(pattern)[1] }

  return isPending ? "Pending" : "Draw"
}