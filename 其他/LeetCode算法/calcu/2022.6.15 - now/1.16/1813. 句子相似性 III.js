/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
  if (sentence1.length < sentence2.length) {
    [sentence1, sentence2] = [sentence2, sentence1];
  }
  const s1Arr = sentence1.split(" ");
  const s2Arr = sentence2.split(" ");
  if (s2Arr.length === 1) {
    return s1Arr[0] === s2Arr[0] || s1Arr[s1Arr.length - 1] === s2Arr[0];
  }
  let l1 = 0,
    l2 = 0,
    r1 = 0,
    r2 = 0;
  while (s1Arr[l1] === s2Arr[l2] && l1 < r1 + 1 && l2 < r2 + 1) {
    l1++;
    l2++;
  }
  while (
    s1Arr[s1Arr.length - 1 - r1] === s2Arr[s2Arr.length - 1 - r2] &&
    r1 < s1Arr.length - l1 &&
    r2 < s2Arr.length - l2
  ) {
    r1++;
    r2++;
  }
  return l2 === r2;
};

console.log(
  areSentencesSimilar("My name is Haley", "My Haley")
);
