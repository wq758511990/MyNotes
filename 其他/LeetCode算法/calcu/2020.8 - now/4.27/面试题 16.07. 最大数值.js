/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var maximum = function (a, b) {
  return a - b > 0 ? a : b
};

console.log(maximum(1, 2))