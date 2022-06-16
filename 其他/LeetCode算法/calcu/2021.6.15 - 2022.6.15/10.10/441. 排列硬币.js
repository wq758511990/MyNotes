/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let count = 1
  let level = 0
  while (n - count >= 0) {
    n -= count
    level++
    count++
  }
  return level
};

var arrangeCoins = function (n) {
  let left = 1, right = n;
  while (left < right) {
    const mid = Math.floor((right - left + 1) / 2) + left;
    if (mid * (mid + 1) <= 2 * n) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

console.log(arrangeCoins(1))