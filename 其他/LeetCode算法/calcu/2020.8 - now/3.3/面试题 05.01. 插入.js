/**
 * @param {number} N
 * @param {number} M
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var insertBits = function (N, M, i, j) {
  const NArr = N.toString(2).split('').reverse()
  const MArr = M.toString(2).split('').reverse()
  for (var t = i; t <= j; t++) {
    NArr[t] = MArr[t - i] ? MArr[t - i] : '0'
  }
  const ansStr = NArr.reverse().join('')
  return parseInt(ansStr, 2)
}

console.log(insertBits(1024, 19, 2, 6))
