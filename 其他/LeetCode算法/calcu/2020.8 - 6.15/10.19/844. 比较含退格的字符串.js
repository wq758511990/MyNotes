/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  function cmpToPush(S, arr) {
    for (let c of S) {
      if (c !== '#') {
        arr.push(c)
      }
      else if(arr.length > 0) {
        arr.pop()
      }
    }
  }
  let sArr = [], tArr = []
  cmpToPush(S, sArr)
  cmpToPush(T, tArr)
  return sArr.join('') === tArr.join('')
};

console.log(backspaceCompare("y#fo##f",
"y#f#o##f"))