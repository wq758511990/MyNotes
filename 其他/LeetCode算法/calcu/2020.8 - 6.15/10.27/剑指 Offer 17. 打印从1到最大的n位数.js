/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  const MAX = 10 ** n;
  let res = [];
  for (let i = 0; i < MAX - 1; i++) {
    res.push(i + 1);
  }
  return res;
};

console.log(printNumbers(2));
