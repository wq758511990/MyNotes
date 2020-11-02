/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let sArr = s.split("");
  const length = s.length;
  const left = k % 2;
  for (let i = 0; i < length; i += k * 2) {
    const mid = left === 0 ? k / 2 - 1 : Math.floor(k / 2);
    for (let j = i; j <= i + mid; j++) {
      let tmp = sArr[j];
      sArr[j] = sArr[i * 2 + k - j - 1];
      sArr[i * 2 + k - j - 1] = tmp;
    }
  }
  return sArr.join("");
};

console.log(reverseStr("abcd", 4));
