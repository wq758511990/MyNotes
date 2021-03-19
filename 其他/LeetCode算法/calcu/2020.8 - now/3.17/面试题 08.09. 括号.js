/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const ans = []
  function dfs (lLeft, rLeft, str) {
    if (str.length === n * 2) {
      ans.push(str)
    }
    if (lLeft > 0) {
      dfs(lLeft - 1, rLeft, str + '(')
    }
    if (lLeft < rLeft) {
      dfs(lLeft, rLeft - 1, str + ')')
    }
  }
  dfs(n, n, '')
  return ans
};

console.log(generateParenthesis(3))