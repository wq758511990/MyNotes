/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
  let cnt = 0;
  let lgNum = Math.max(a, b);
  let divideNum = a !== b ? Math.floor(lgNum / 2) : b;
  for (let i = 0; i <= divideNum; i++) {
    if (a % i === 0 && b % i === 0) cnt++;
  }
  return cnt;
};

console.log(commonFactors(885, 885));
