/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const sArr = s.split("");
  let l = 0;
  r = sArr.length - 1;
  while (l < r) {
    while (!isParagraph(sArr[l]) && l < r) {
      l++;
    }
    while (!isParagraph(sArr[r]) && l < r) {
      r--;
    }
    if (l <= r) {
      exchangeArr(sArr, l, r);
      l++;
      r--;
    }
  }
  return sArr.join("");
};
const exchangeArr = (arr, l, r) => {
  let tmp = arr[l];
  arr[l] = arr[r];
  arr[r] = tmp;
};
const isParagraph = (c) => {
  const charCodeOfC = c.charCodeAt();
  return (
    (charCodeOfC >= 65 && charCodeOfC <= 90) ||
    (charCodeOfC >= 97 && charCodeOfC <= 122)
  );
};

console.log(reverseOnlyLetters("7_28]"));
