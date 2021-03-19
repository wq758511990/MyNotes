/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var multiply = function (A, B) {
  // if (B === 0) return 0
  // return A + multiply(A, B - 1)
  if (B === 0) return 0
  if (B === 1) return A
  // 是奇数
  if (B & 1) {
    return multiply(A << 1, B >> 1) + A // 奇数右移一位相当于除以2并且向下取整，所以需要加上A
  } else {
    return multiply(A << 1, B >> 1)
  }
}
console.log(multiply(3, 5))
