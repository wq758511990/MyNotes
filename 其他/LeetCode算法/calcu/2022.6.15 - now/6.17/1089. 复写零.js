/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  // for(let i = 0; i < arr.length;i++) {
  //     if (arr[i] === 0) {
  //         arr.splice(i, 0, 0)
  //         arr.pop()
  //         i++
  //     }
  // }
  // console.log('arr', arr)

  const n = arr.length;
  let i = -1,
    top = 0;
  while (top < n) {
    i++;
    if (arr[i] !== 0) top++;
    else top += 2;
  }
  let j = n - 1;
  if (top === n + 1) {
    arr[j] = 0;
    j--;
    i--;
  }
  while (j >= 0) {
    arr[j] = arr[i];
    j--;
    if (arr[i] === 0) {
      arr[j] = arr[i];
      j--;
    }
    i--;
  }
};

console.log(duplicateZeros([1, 2, 3]));
