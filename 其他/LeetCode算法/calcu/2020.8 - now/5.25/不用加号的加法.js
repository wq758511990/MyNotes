/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
  let sum = 0, carry = 0
  while (b !== 0) {
    sum = a ^ b // 异或计算未进位的部分
    carry = (a & b) << 1 // 进位部分
    a = sum // 保存未进位部分，再次计算
    b = carry // 保存进位部分，再次计算
  }
  return a
};