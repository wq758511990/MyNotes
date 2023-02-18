/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function (customfunction, z) {
  let l = 1,
    r = 1000;
  const ans = [];
  while (l <= r) {
    while (r >= 1 && customfunction.f(l, r) > z) {
      r--;
    }
    while (r >= 1 && customfunction.f(l, r) === z) {
      ans.push([l, r]);
    }
    l++;
  }
  return ans;
};

console.log(findSolution());
