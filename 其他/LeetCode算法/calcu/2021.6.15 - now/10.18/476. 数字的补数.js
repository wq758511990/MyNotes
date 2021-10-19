/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  // let ans = ''
  // let preAns = num.toString(2)
  // for (let c of preAns) {
  //   if (c === '1') {
  //     ans += '0'
  //   } else {
  //     ans += 1
  //   }
  // }
  // return parseInt(ans, 2)


  let highbit = 0;
  for (let i = 1; i <= 30; ++i) {
    if (num >= 1 << i) {
      highbit = i;
    } else {
      break;
    }
  }
  const mask = highbit == 30 ? 0x7fffffff : (1 << (highbit + 1)) - 1;
  return num ^ mask;
};

console.log(findComplement(5))