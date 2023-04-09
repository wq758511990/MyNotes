/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function (s, distance) {
  const dict = {};
  for (let i = 0; i < s.length; i++) {
    let alpha = s[i];
    if (dict[alpha] != null) {
      dict[alpha] = i - dict[alpha] - 1;
    } else {
      dict[alpha] = i;
    }
  }
  for (let i = 0; i < distance.length; i++) {
    let targetAlpha = String.fromCharCode(i + 97);
    if (dict[targetAlpha] != null) {
      if (dict[targetAlpha] !== distance[i]) return false;
    }
  }
  return true;
};

console.log(
  checkDistances(
    "aa",
    [
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ]
  )
);
