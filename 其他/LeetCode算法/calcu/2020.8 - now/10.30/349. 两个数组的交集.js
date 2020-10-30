/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let resSet = new Set();
  let dict = {};
  for (let num of nums1) {
    dict[num] = dict[num] === undefined ? 1 : dict[num] + 1;
  }
  console.log(dict);
  for (let num of nums2) {
    if (dict[num]) resSet.add(num);
  }
  return Array.from(resSet);
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
