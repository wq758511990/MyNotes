/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  let dict = {}
  let evenCount = 0
  for (let c of s) {
    if (dict[c]) {
      dict[c] += 1
    } else {
      dict[c] = 1
    }
  }
  let values = Object.values(dict)
  for (let value of values) {
    if (value % 2 !== 0) {
      if (evenCount === 1) return false
      evenCount += 1
    }
  }
  return true
};

console.log(canPermutePalindrome('tactcoa'))