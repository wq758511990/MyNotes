/**
 * @param {number} num
 * @return {string}
 */
var printBin = function (num) {
  if (num <= 0 || num >= 1) return 'ERROR'
  let t = 0
  let numArr = []
  let ans = ''
  while (t <= 32) {
    num *= 2
    let prevNum = parseInt(num)
    num -= prevNum
    numArr.push(prevNum)
    t += 1
    if (num === 0) {
      ans = '0.' + numArr.join('')
      return ans
    }
  }
  return 'ERROR'
}

console.log(printBin(0.1))
