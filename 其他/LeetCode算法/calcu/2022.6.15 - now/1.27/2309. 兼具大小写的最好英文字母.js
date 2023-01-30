/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
  let ans = "";
  const dict = {};
  for (let c of s) {
    if (dict[c]) {
      let tmp = c.toUpperCase();
      if (!ans) {
        ans = tmp;
      } else {
        ans = tmp > ans ? tmp : ans;
      }
      continue;
    }
    if (isUpper(c)) {
      dict[c.toLowerCase()] = 1;
    } else {
      dict[c.toUpperCase()] = 1;
    }
  }

  return ans;

  /**
   *
   * @param {string} s
   * @returns {boolean}
   */
  function isUpper(s) {
    return s.toUpperCase() === s;
  }
};

console.log(greatestLetter("AbCdEfGhIjK"));
