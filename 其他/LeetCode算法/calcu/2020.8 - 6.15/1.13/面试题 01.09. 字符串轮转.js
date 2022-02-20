/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function (s1, s2) {
  if (!s1 && !s2) {
    return true
  }
  const s3 = s1 + s1
  return s3.indexOf(s2) > 0
}

console.log(isFlipedString('a', 'a'))
