/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const transFormStr = (str, cnt) => {
  let ans = 0;
  for (let c of str) {
    ans += Number(c);
  }
  if (cnt) {
    return transFormStr(ans + "", cnt - 1);
  }
  return ans;
};

const getAlphaNum = (c) => {
  return c.charCodeAt() - 96;
};
var getLucky = function (s, k) {
  let str = "";
  for (let c of s) {
    const alphaNum = getAlphaNum(c);
    str += alphaNum;
  }
  return transFormStr(str, k);
};

console.log(getLucky("iiii", 1));
