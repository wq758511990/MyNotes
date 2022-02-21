/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
  return sortString(s1) === sortString(s2)
};

function sortString (str) {
  return str.split('').sort((a, b) => a.localeCompare(b)).join('')
}

console.log(CheckPermutation('abc', 'cab'))