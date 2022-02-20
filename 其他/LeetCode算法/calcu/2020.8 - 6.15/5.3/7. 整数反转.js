/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const MAX = (2 ** 31) - 1
  const MIN = -(2 ** 31)
  let tmp = []
  let preStr = ''
  let tmpstr = x.toString()
  for (let i = 0; i < tmpstr.length; i++) {
    if (tmpstr[i] !== '+' && tmpstr[i] !== '-') {
      tmp.unshift(tmpstr[i])
    } else {
      preStr += tmpstr[i]
    }
  }
  const res = parseInt(preStr + tmp.join(''))
  return res >= MIN && res <= MAX ? res : 0
};

console.log(reverse(123))