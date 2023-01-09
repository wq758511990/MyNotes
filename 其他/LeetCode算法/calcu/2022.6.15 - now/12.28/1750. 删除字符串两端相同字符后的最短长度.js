/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  let l = 0,
    r = s.length - 1;
  let tmpAlpha = "";
  while ((s[l] === s[r] || s[l] === tmpAlpha || s[r] === tmpAlpha) && l < r) {
    if (s[l] === s[r]) {
      tmpAlpha = s[l];
      l++;
      r--;
    } else if (s[l] === tmpAlpha) {
      l++;
    } else {
      r--;
    }
  }
  return l === r && s[l - 1] === s[l + 1] && s[l - 1] === s[l]
    ? 0
    : Math.max(r + 1 - l, 0);
};

const minimumLength1 = (s) => {
  let l = 0,
    r = s.length - 1;
  while (l < r && s[l] === s[r]) {
    const c = s[l];
    while (l <= r && s[l] === c) {
      l++;
    } 
    while (l <= r && s[r] === c) {
      r--;
    }
  }
  return r + 1 - l;
};

console.log(
  minimumLength1("bbbbbbbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbccbcbcbccbbabbb")
);
