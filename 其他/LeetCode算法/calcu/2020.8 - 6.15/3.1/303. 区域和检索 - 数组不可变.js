// /**
//  * @param {number[]} nums
//  */
// var NumArray = function (nums) {
//   this.nums = nums
//   this.sums = {}
// };

// /** 
//  * @param {number} i 
//  * @param {number} j
//  * @return {number}
//  */
// NumArray.prototype.sumRange = function (i, j) {
//   let sum = 0
//   for (var s = i; s <= j; s++) {
//     sum += this.nums[s]
//   }
//   this.sums[`${i}-${j}`] = sum
//   return sum
// };

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

var NumArray = function (nums) {
  const n = nums.length
  this.sums = new Array(n).fill(0)
  for (var i = 0; i < nums.length; i++) {
    this.sums[i + 1] = this.sums[i] + nums[i]
  }
};

NumArray.prototype.sumRange = function (i, j) {
  return this.sums[j + 1] - this.sums[i]
};

var obj = new NumArray([-2, 0, 3, -5, 2, -1])
console.log(obj.sumRange(0, 5))
console.log(obj.sumRange(2, 5))
console.log(obj.sumRange(3, 5))
console.log(obj.sumRange(4, 5))