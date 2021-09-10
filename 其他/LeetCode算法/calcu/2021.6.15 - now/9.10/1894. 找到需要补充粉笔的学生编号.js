/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
  const sum = chalk.reduce((a, b) => a + b);
  k %= sum;
  let i = 0;
  while (k - chalk[i] >= 0) {
    k -= chalk[i];
    i = (i + 1) % chalk.length;
  }
  return i;
};

console.log(chalkReplacer([1], 10000000));
