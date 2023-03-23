/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  const n = nums.length,
    m = queries.length;
  nums.sort((a, b) => a - b);
  const sumArr = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    sumArr[i] = (sumArr?.[i - 1] || 0) + nums[i];
  }
  const answer = new Array(m).fill(0);
  for (let i = 0; i < m; i++) {
    answer[i] = binarySearch(sumArr, queries[i]);
  }
  return answer;
};

function binarySearch(arr, target) {
  let l = 0,
    r = arr.length;
  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);
    if (arr[mid] <= target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return l;
}

// const binarySearch = (f, target) => {
//   let low = 1,
//     high = f.length;
//   while (low < high) {
//     const mid = low + Math.floor((high - low) / 2);
//     if (f[mid] > target) {
//       high = mid;
//     } else {
//       low = mid + 1;
//     }
//   }
//   return low;
// };

console.log(answerQueries([2, 3, 4, 5], [1]));
