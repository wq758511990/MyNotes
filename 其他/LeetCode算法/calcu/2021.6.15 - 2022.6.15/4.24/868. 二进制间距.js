/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  // let dis = 0
  // let pre = 0
  // const binaryStr = n.toString(2)
  // for (let i = 1; i < binaryStr.length; i++) {
  //   if (binaryStr[i] === '1') {
  //     dis = Math.max(dis, i - pre)
  //     pre = i
  //   }
  // }
  // return dis

  let last = -1, ans = 0;
  for (let i = 0; n != 0; ++i) {
    if ((n & 1) === 1) {
      if (last !== -1) {
        ans = Math.max(ans, i - last);
      }
      last = i;
    }
    n >>= 1;
  }
  return ans;
};

console.log(binaryGap(8))