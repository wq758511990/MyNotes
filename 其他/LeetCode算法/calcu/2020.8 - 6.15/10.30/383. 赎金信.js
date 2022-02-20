/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let dict = {};
  for (let i = 0; i < magazine.length; i++) {
    dict[magazine[i]] =
      dict[magazine[i]] === undefined ? 1 : dict[magazine[i]] + 1;
  }
  for (let j = 0; j < ransomNote.length; j++) {
    if (dict[ransomNote[j]]) {
      dict[ransomNote[j]]--;
    } else {
      return false;
    }
  }
  for (let num of Object.values(dict)) {
    if (num < 0) {
      return false;
    }
  }
  return true;
};

console.log(canConstruct("aab", "baadfg"));
