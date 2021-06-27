var snakesAndLadders = function (board) {
  const n = board.length, _board = []
  let i = n - 1, toRight = true
  while (i >= 0) {
    if (toRight) {
      let j = 0
      while (j < n) {
        _board.push(board[i][j++])
      }
    } else {
      let j = n - 1
      while (j >= 0) {
        _board.push(board[i][j--])
      }
    }
    toRight = !toRight
    i--
  }
  const set = new Set(), len = n * n - 1
  const q = [new Data(0, 0)]
  while (q.length) {
    const cur = q.shift()
    // console.log(cur)
    for (let i = 1; i <= 6; i++) {
      let p = cur.i + i
      if (_board[p] !== -1) p = _board[p] - 1
      if (p > len) break
      if (p === len) return cur.step + 1
      if (set.has(p)) continue
      set.add(p)
      q.push(new Data(p, cur.step + 1))
    }
  }
  return -1
};

class Data {
  constructor(i, step) {
    this.i = i
    this.step = step
  }
}