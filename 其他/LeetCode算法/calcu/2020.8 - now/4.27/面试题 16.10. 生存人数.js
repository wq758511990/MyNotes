/**
 * @param {number[]} birth
 * @param {number[]} death
 * @return {number}
 */
var maxAliveYear = function (birth, death) {
  let d = []
  for (let i = 1900; i < 2001; i++) {
    d[i] = 0
  }
  for (let i = 0; i < birth.length; i++) {
    d[birth[i]]++
    d[death[i] + 1]--
  }
  let max = 0, idx = 0, pre = 0
  for (let i = 1900; i < 2001; i++) {
    pre += d[i] || 0
    if (pre > max) {
      max = pre
      idx = i
    }
  }
  return idx
};

console.log(maxAliveYear([1900, 1901, 1950], [1948, 1951, 2000]))