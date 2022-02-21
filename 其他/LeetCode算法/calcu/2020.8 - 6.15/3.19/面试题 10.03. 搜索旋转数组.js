/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var search = function (arr, target) {
  function binarySearch (left, right) {
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (arr[mid] < target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    return arr[left] === target ? left : -1
  }
  let midPoint = 0
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= arr[i + 1]) {
      midPoint++
    } else {
      break
    }
  }
  const leftResult = binarySearch(0, midPoint)
  if (leftResult !== -1) {
    return leftResult
  } else {
    return binarySearch(midPoint + 1, arr.length - 1)
  }
};

console.log(search([10, 9, 8, 7, 6, 1, 2, 3, 4, 5], 4))