/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
  let l = 0, r = numbers.length - 1
  while (l < r) {
    const mid = Math.floor((l + r) / 2)
    if (numbers[mid] < numbers[r]) {
      r = mid
    }
    else if (numbers[mid] > numbers[r]) {
      l = mid + 1
    }else {
      r -= 1
    }
  }
  return numbers[l]
};

console.log(minArray([3,4,5,1,2]))