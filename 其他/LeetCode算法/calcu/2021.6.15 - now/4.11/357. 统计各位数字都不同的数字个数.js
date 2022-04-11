/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  if (n === 0) {
    return 1
  }
  if (n === 1) {
    return 10
  }
  let res = 10, ans = 9
  for (let i = 0; i < n - 1; i++) {
    ans *= 9 - i
    res += ans
  }
  return res
};