/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const MAX = n ** 2;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let res = JSON.parse(JSON.stringify(Array(n).fill(Array(n).fill([]))));
  const marks = JSON.parse(JSON.stringify(Array(n).fill(Array(n).fill(false))));
  let i = 0,
    j = 0,
    step = 0,
    direct = 0;
  while (step < MAX) {
    if (i >= 0 && i < n && j >= 0 && j < n && !marks[i][j]) {
      step++;
      res[i][j] = step;
      marks[i][j] = true;
      i += directions[direct][0];
      j += directions[direct][1];
    } else {
      i -= directions[direct][0];
      j -= directions[direct][1];
      direct = (direct + 1) % 4;
      i += directions[direct][0];
      j += directions[direct][1];
    }
  }
  return res;
};

console.log(generateMatrix(3));
