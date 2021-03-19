/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function (S) {
  const temp = S.split('')
  const len = temp.length
  const ans = []
  dfs(0)
  return ans
  function dfs (k) {
    if (k === len) {
      ans.push(temp.join(''))
      return
    }
    for (let i = k; i < len; i++) {
      [temp[i], temp[k]] = [temp[k], temp[i]]
      dfs(k + 1);
      [temp[i], temp[k]] = [temp[k], temp[i]]
    }
  }
}

console.log(permutation('qwe'))
