/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function (scores, ages) {
  const n = scores.length;
  const people = new Array(n).fill(0).map(() => new Array(2).fill(0));
  for (let i = 0; i < n; i++) {
    people[i] = [scores[i], ages[i]];
  }
  people.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
  const dp = new Array(n).fill(0);
  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (people[j][1] <= people[i][1]) {
        dp[i] = Math.max(dp[i], dp[j]);
      }
    }
    dp[i] += people[i][0];
    res = Math.max(res, dp[i]);
  }
  return res;
};
console.log(bestTeamScore([4, 5, 6, 5], [2, 1, 2, 1]));
