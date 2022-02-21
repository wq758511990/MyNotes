/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const n = nums.length;
  let l = 0;
  let r = n;
  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] < target) l = mid + 1;
    else if (nums[mid] > target) r = mid;
    else return mid;
  }
  return l;
};

console.log(searchInsert([1, 3, 5, 6], 4));
