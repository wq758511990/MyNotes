/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  const dict = {};
  const ans = new Set();

  function handleArr(arr) {
    const setedArr = Array.from(new Set(arr))
    for (let num of setedArr) {
      dict[num] = (dict[num] || 0) + 1;
      if (dict[num] >= 2) {
        ans.add(num);
      }
    }
  }

  handleArr(nums1)
  handleArr(nums2)
  handleArr(nums3)
  return Array.from(ans)
};

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3]));
