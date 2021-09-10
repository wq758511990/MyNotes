/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  const length = columnTitle.length;
  let count = 0;
  let idx = 0;
  for (let i = length - 1; i >= 0; i--) {
    let c = columnTitle[i];
    let num = c.charCodeAt() - 64;
    count += 26 ** idx * num;
    idx++;
  }
  return count;
};

console.log(titleToNumber("FXSHRXW"));
