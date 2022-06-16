/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  let n = s.length
  let l = 0; r = n
  let ans = []
  for (let i = 0; i <= n; i++) {
    if (s[i] === 'I') {
      ans.push(l)
      l++
    } else {
      ans.push(r)
      r--
    }
  }
  return ans
};

console.log(diStringMatch('D'))