/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let dict = {};
  function numLoop(num) {
    numStr = num + "";
    let total = 0;
    for (let c of numStr) {
      total += parseInt(c) ** 2;
    }
    if (total === 1) {
      return true;
    }
    if (dict[total]) {
      return false;
    } else {
      dict[total] = 1;
    }
    console.log(dict);
    return numLoop(total);
  }
  return numLoop(n);
};

console.log(isHappy(19));
