/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  //   const n = l.length;
  //   const result = new Array(n).fill(0);
  //   for (let i = 0; i < n; i++) {
  //     const sourceNums = nums.slice(l[i], r[i] + 1);
  //     result[i] = isArithmeticSequence(sourceNums.sort((a, b) => a - b));
  //   }

  //   return result;

  //   function isArithmeticSequence(arr) {
  //     if (arr.length <= 2) return true;
  //     const diff = arr[1] - arr[0];
  //     for (let i = 2; i < arr.length; i++) {
  //       if (arr[i] - arr[i - 1] !== diff) {
  //         return false;
  //       }
  //     }
  //     return true;
  //   }
  const n = l.length;
  const ans = [];
  for (let i = 0; i < n; i++) {
    let left = l[i],
      right = r[i];
    let minV = nums[left],
      maxV = nums[left];
    for (let i = left; i <= right; ++i) {
      minV = Math.min(minV, nums[i]);
      maxV = Math.max(maxV, nums[i]);
    }
    if (minV === maxV) {
      ans.push(true);
      continue;
    }
    if ((maxV - minV) % (right - left) !== 0) {
      ans.push(false);
      continue;
    }

    const d = (maxV - minV) / (right - left);

    let flag = true;
    const seen = new Array(right - left + 1).fill(false);

    for (let i = left; i <= right; ++i) {
      if ((nums[i] - minV) % d !== 0) {
        flag = false;
        break;
      }
      const t = Math.floor((nums[i] - minV) / d);
      if (seen[t]) {
        flag = false;
        break;
      }
      seen[t] = true;
    }
    ans.push(flag);
  }
  return ans;
};

console.log(
  checkArithmeticSubarrays(
    [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10],
    [0, 1, 6, 4, 8, 7],
    [4, 4, 9, 7, 9, 10]
  )
);
