/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function (nums, limit, goal) {
  const sum = nums.reduce((a, b) => a + b);
  let diff = Math.abs(goal - sum);
  return Math.floor(diff / limit) + (diff % limit > 0 ? 1 : 0);
};

console.info(minElements([1, -1, 1], 3, -4));
