  /**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  newStr = s.replace(/\s/g, '%20')
  return newStr
  let ans = ''
  for (var c of s) {
    if (c === ' ') {
      ans += '%20'
    } else {
      ans += c
    }
  }
  return ans
};

console.log(replaceSpace('We are happy.'))