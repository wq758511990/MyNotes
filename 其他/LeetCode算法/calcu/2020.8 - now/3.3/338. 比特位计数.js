/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  // let ans = []
  // for (var i = 0; i <= num; i++) {
  //   const bitNum = i.toString(2)
  //   let tmpCount = 0
  //   for (let c of bitNum) {
  //     if (c === '1') {
  //       tmpCount += 1
  //     }
  //   }
  //   ans.push(tmpCount)
  // }
  // return ans
  let ans = [0]
  for (var i = 0; i <= num; i++) {
    if (!(i & 1)) {
      ans[i] = ans[Math.floor(i / 2)]
    } else {
      ans[i] = ans[i - 1] + 1
    }
  }
  return ans
}

console.log(countBits(5))
