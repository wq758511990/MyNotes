/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function (first, second) {
  if (Math.abs(first.length - second.length) > 1) {
    return false
  }
  if (first.length < second.length) {
    let tmp = first
    first = second
    second = tmp
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return first.substring(i + 1) === second.substring(i + 1) || first.substring(i + 1) === second.substring(i)
    }
  }
  return true
};

console.log(oneEditAway("mart", "karma"))