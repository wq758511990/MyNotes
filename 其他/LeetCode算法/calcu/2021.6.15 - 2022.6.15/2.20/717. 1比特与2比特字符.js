/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  // var count = 0
  // var len = bits.length
  // var index = len - 2
  // while(index >= 0 && bits[index] == 1) {
  //     count += 1
  //     index -= 1
  // }
  // if(count % 2 == 0) {
  //     return true
  // }
  // return false

  var curIndex = 0
  while (curIndex < bits.length - 1) {
    if (bits[curIndex] == 0) {
      curIndex++
    } else {
      curIndex += 2
    }
  }
  return curIndex == bits.length - 1
};