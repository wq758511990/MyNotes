// 超时
// var hammingDistance = function (x, y) {
//   let tmp = (x ^ y).toString(2)
//   let res = 0
//   for (let c of tmp) {
//     if (c === '1') {
//       res += 1
//     }
//   }
//   return res
// };

// var totalHammingDistance = function (nums) {
//   let tmp = 0
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       tmp += hammingDistance(nums[i], nums[j])
//     }
//   }
//   return tmp
// };

var totalHammingDistance = function (nums) {
  let ans = 0, n = nums.length;
  for (let i = 0; i < 30; ++i) {
    let c = 0;
    for (const val of nums) {
      c += (val >> i) & 1;
    }
    ans += c * (n - c);
  }
  return ans;
};

console.log(totalHammingDistance([4, 14, 2]))