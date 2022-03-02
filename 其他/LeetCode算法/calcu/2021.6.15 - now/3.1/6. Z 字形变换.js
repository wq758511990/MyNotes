/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function (s, numRows) {
    if (numRows <= 1) {
  return s;
}
let sArr = JSON.parse(JSON.stringify(new Array(numRows).fill([])));
let l = 0,
  r = 0;
let direction = 1;
let res = "";
for (let i = 0; i < s.length; i++) {
  let c = s[i];
  sArr[l][r] = c;
  if (l === numRows - 1) {
    direction = 0;
  }
  if (l === 0) {
    direction = 1;
  }
  if (direction && l < numRows - 1) {
    l++;
  } else {
    l--;
    r++;
  }
}
for (let i = 0; i < sArr.length; i++) {
  for (let j = 0; j < sArr[i].length; j++) {
    let c = sArr[i][j];
    if (c) {
      res += c;
    }
  }
}
return res;
};