/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // return s.split('').sort().join('') === t.split('').sort().join('')

  //   let sDict = {};
  //   for (let c of s) {
  //     sDict[c] = sDict[c] ? sDict[c] + 1 : 1;
  //   }
  //   for (let c of t) {
  //     if (sDict[c]) {
  //       sDict[c] -= 1;
  //     } else {
  //       return false;
  //     }
  //   }
  // for (let num of Object.values(sDict)) {
  //   if (num !== 0) {
  //     return false;
  //   }
  // }
  // return true;
  if (s.length !== t.length) return false;
  let dict = {};
  for (let i = 0; i < s.length; i++) {
    dict[s[i]] = dict[s[i]] === undefined ? 1 : dict[s[i]] + 1;
    dict[t[i]] = dict[t[i]] === undefined ? -1 : dict[t[i]] - 1;
  }
  for (let num of Object.values(sDict)) {
    if (num !== 0) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
