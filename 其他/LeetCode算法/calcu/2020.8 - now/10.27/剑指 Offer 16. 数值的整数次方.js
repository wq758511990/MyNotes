/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (x === 0) return 0;
  if (x === 1) return 1;
  let res = 1;
  if (n < 0) x, (n = 1 / x), -n;
  while (n) {
    if (n & 1) res *= x;
    x *= x;
    n >>= 1;
  }
  return res;
};

console.log(myPow(2.0, 10));
