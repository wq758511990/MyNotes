/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  let m = mat.length;
  n = mat[0].length;
  const direction = [
    [-1, 1],
    [1, -1],
  ];
  const ans = [];
  let changeTime = 0;
  let i = 0,
    j = 0;
  while (i < m || j < n) {                
    ans.push(mat[i][j]);
    if (i === m - 1 && j === n - 1) {
      return ans;
    }
    let curDirection = changeTime % 2;
    i += direction[curDirection][0];
    j += direction[curDirection][1];
    if (i < 0 && j > n - 1) {
      i = 1;
      j = n - 1;
      changeTime++;
    } else if (i > m - 1 && j < 0) {
      i = m - 1;
      j = 1;
      changeTime++;
    } else if (i < 0) {
      i = 0;
      changeTime++;
    } else if (i > m - 1) {
      i = m - 1;
      j += 2;
      changeTime++;
    } else if (j < 0) {
      j = 0;
      changeTime++;
    } else if (j > n - 1) {
      j = n - 1;
      i += 2;
      changeTime++;
    }
  }
};

console.log(
  findDiagonalOrder([
    [1],
  ])
);
