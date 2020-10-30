/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  let hashMap = new Map();
  let count = 0;
  for (let a of A) {
    for (let b of B) {
      const sumA_B = a + b;
      const hasSumA_B = hashMap.get(sumA_B);
      if (hasSumA_B) {
        hashMap.set(sumA_B, hasSumA_B + 1);
      } else {
        hashMap.set(sumA_B, 1);
      }
    }
  }
  for (let c of C) {
    for (let d of D) {
      const sumC_D = c + d;
      hashMap.get(-sumC_D) && (count = count + hashMap.get(-sumC_D));
    }
  }
  return count;
};

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]));
