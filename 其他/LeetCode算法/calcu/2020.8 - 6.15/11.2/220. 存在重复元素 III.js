/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  //   if (nums.length < 2) return false;
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k) return true;
  //     }
  //   }
  //   return false;

  function getId(x, w) {
    return Math.floor(x / w);
  }
  if (t < 0) return false;
  const map = new Map();
  const w = t + 1;
  for (let i = 0; i < nums.length; i++) {
    const m = getId(nums[i], w);
    if (map.has(m)) return true;
    else if (map.has(+m + 1) && Math.abs(map.get(+m + 1) - nums[i]) < w)
      return true;
    else if (map.has(+m - 1) && Math.abs(map.get(+m - 1) - nums[i]) < w)
      return true;
    map.set(m, nums[i]);
    if (i >= k) map.delete(getId(nums[i - k], w));
  }
  return false;
};

console.log(containsNearbyAlmostDuplicate([1, 3, 6, 2], 1, 2));
