/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function (S, length) {
  let ans = ''
  let NS = S.substring(0, length)
  for (let c of NS) {
    if (c === ' ') {
      ans += '%20'
    } else {
      ans += c
    }
  }
  return ans
};

console.log(replaceSpaces('Mr John Smith    ', 13))