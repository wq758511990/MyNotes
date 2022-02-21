/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function (A, m, B, n) {
  let pa = 0, pb = 0
  let sorted = []
  let cur
  while (pa < m || pb < n) {
    if (pa === m) {
      cur = B[pb++]
    } else if (pb == n) {
      cur = A[pa++];
    } else if (A[pa] < B[pb]) {
      cur = A[pa++];
    } else {
      cur = B[pb++];
    }
    sorted[pa + pb - 1] = cur;
  }
  for (var i = 0; i < sorted.length; i++) {
    A[i] = sorted[i]
  }
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))