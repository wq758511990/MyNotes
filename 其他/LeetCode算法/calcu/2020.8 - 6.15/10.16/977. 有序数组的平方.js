/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  // A.sort((a, b) => {return Math.abs(a) - Math.abs(b)})
  // resArr = A.map((item) => {
  //   return item * item
  // })
  // return resArr

  let l = 0, r = A.length - 1, pos = A.length - 1, ans = []
  while (l <= r) {
    if (A[l] ** 2 > A[r] ** 2) {
      ans.splice(0, 0, A[l] ** 2)
      l += 1
    } else {
      ans.splice(0, 0, A[r] ** 2)
      r -= 1
    }
    pos -= 1
  }
  return ans
};

console.log(sortedSquares([-7,-3,2,3,11]))