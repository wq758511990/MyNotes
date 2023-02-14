/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function (s) {
  const dict = {
    Q: 0,
    W: 0,
    E: 0,
    R: 0,
  };
  for (const c of s) {
    dict[c] += 1;
  }
};

console.log(balancedString("QWER"));
