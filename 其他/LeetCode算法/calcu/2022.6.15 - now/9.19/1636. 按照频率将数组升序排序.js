/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const cntMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    cntMap.set(nums[i], (cntMap.get(nums[i]) || 0) + 1);
  }
  const list = [...nums]
  list.sort((a, b) => {
    const cnt1 = cntMap.get(a), cnt2 = cntMap.get(b)
    return cnt1 === cnt2 ? b - a : cnt1 - cnt2
  })
  return list
};

console.log(frequencySort([2, 3, 1, 3, 2]));
