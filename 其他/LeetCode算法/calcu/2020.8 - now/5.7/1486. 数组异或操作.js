/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  let arr = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    arr[i] = start + 2 * i
  }
  return arr.reduce((a, b) => a ^ b)
};

console.log(xorOperation(10, 5))