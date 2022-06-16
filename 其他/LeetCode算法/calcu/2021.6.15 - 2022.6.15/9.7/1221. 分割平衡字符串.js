/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  const stack = [];
  let count = 0;
  const dict = {
    L: "R",
    R: "L",
  };
  for (let c of s) {
    const length = stack.length;
    if (length > 0 && dict[stack[length - 1]] === c) {
      stack.pop();
      if (stack.length === 0) {
        count++;
      }
    } else {
      stack.push(c);
    }
  }
  return count;
};

console.log(balancedStringSplit("RLLLLRRRLR"));
