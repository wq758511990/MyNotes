/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let ans = 0
  if (strs.length === 1) return 0
  for (let i = 0; i < strs[0].length; i++) {
    let isOrdered = true
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] < strs[j - 1][i]) {
        isOrdered = false
        break
      }
    }
    if (!isOrdered) {
      ans += 1
    }
  }
  return ans
};

console.log(minDeletionSize(["rrjk", "furt", "guzm"]))