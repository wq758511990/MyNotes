/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
var smallestDifference = function (a, b) {
  // let minNum = Infinity
  // for (let i = 0; i < a.length; i++) {
  //   for (let j = 0; j < b.length; j++) {
  //     minNum = Math.abs(b[j] - a[i]) < minNum ? Math.abs(b[j] - a[i]) : minNum
  //   }
  // }
  // return minNum

  a = a.sort((a, b) => a - b)
  b = b.sort((a, b) => a - b)
  let ans = Infinity
  let i = 0, j = 0
  while (i < a.length && j < b.length) {
    let tmp = Math.abs(a[i] - b[j])
    ans = ans < tmp ? ans : tmp
    if (a[i] > b[j]) j++
    else i++
  }
  return ans
};

console.log(smallestDifference([1, 3, 15, 11, 2], [23, 127, 235, 19, 8]))