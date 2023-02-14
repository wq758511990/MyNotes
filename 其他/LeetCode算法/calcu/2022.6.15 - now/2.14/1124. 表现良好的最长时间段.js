/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  const n = hours.length;
  const map = new Map();
  let s = 0,
    res = 0;
  for (let i = 0; i < n; i++) {
    s += hours[i] > 8 ? 1 : -1;
    if (s > 0) {
      res = Math.max(res, i + 1);
    } else {
      if (map.has(s - 1)) {
        res = Math.max(res, i - map.get(s - 1));
      }
    }
    if (!map.has(s)) {
      map.set(s, i);
    }
  }
  return res;
};
console.log(longestWPI([9, 9, 6, 0, 6, 6, 9]));
