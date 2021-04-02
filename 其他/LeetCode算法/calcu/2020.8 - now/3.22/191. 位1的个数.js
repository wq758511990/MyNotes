/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  // const str = n.toString(2)
  // const count = 0
  // for (let s of str) {
  //   if (s === '1') {
  //     count += 1
  //   }
  // }
  // return count
  let ans = 0
  while (n) {
    ans += n & 1
    n >>= 1
  }
  return ans
};

console.log(hammingWeight(11))