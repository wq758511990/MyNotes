/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let tmp = (x ^ y).toString(2)
  let res = 0
  for (let c of tmp) {
    if (c === '1') {
      res += 1
    }
  }
  return res
};

console.log(hammingDistance(4, 1))