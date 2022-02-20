/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  //   A.sort((a, b) => Math.abs(a) - Math.abs(b));
  //   let B = A.map((item) => {
  //     return item ** 2;
  //   });
  //   return B;
  let l = 0,
    r = A.length - 1,
    ans = [];
  while (l <= r) {
    if (A[l] ** 2 < A[r] ** 2) {
      ans.splice(0, 0, A[r] ** 2);
      r -= 1;
    } else {
      ans.splice(0, 0, A[l] ** 2);
      l += 1;
    }
  }
  return ans;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
