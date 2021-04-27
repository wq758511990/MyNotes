/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let count = 0
  while (n) {
    count += Math.floor(n / 5)
    n = Math.floor(n / 5)
  }
  return count
};

console.log(trailingZeroes(30))