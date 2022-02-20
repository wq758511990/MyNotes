/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
// var xorQueries = function (arr, queries) {
//   const res = []
//   for (let i = 0; i < queries.length; i++) {
//     let tmp = 0
//     for (let j = queries[i][0]; j <= queries[i][1]; j++) {
//       tmp ^= arr[j]
//     }
//     res.push(tmp)
//   }
//   return res
// };

var xorQueries = function (arr, queries) {
  const n = arr.length
  const xors = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    xors[i + 1] = xors[i] ^ arr[i]
  }
  const m = queries.length
  const res = new Array(m).fill(0)
  for (let i = 0; i < m; i++) {
    res[i] = xors[queries[i][0]] ^ xors[queries[i][1] + 1]
  }
  return res
};


console.log(xorQueries([4, 8, 2, 10], [[2, 3], [1, 3], [0, 0], [0, 3]]))