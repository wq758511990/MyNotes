/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let oddArr = []
  let evenArr = []
  for (let num of nums) {
    if (num % 2 === 0) evenArr.push(num)
    else oddArr.push(num)
  }
  return oddArr.concat(evenArr)
}
