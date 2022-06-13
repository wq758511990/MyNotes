/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let result = 0;
  const comparedHeights = JSON.parse(JSON.stringify(heights));
  heights.sort((a, b) => a - b);
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== comparedHeights[i]) {
      result++;
    }
  }
  return result;
};

// var heightChecker = function(heights) {
//     const m = parseInt(_.max(heights));
//     const cnt = new Array(m + 1).fill(0);
//     for (const h of heights) {
//         ++cnt[h];
//     }

//     let idx = 0, ans = 0;
//     for (let i = 1; i <= m; ++i) {
//         for (let j = 1; j <= cnt[i]; ++j) {
//             if (heights[idx] !== i) {
//                 ++ans;
//             }
//             ++idx;
//         }
//     }
//     return ans;
// };
