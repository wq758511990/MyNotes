/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  //   return s.reverse();
  const length = s.length;
  const mid = length % 2 === 0 ? length / 2 - 1 : Math.floor(length / 2);
  for (let i = 0; i <= mid; i++) {
    let tmp = s[i];
    s[i] = s[length - i - 1];
    s[length - i - 1] = tmp;
  }
  return s;
};

console.log(reverseString(["h", "w"]));
