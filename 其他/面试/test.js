function quickSort (arr) {
  if (arr.length <= 1) {
    return arr;  //递归出口
  }
  var left = [],
    right = [],
    current = arr.splice(0, 1); // 基准值， 随意取一个均可
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < current) {
      left.push(arr[i])  //放在左边
    } else {
      right.push(arr[i]) //放在右边
    }
  }
  return quickSort(left).concat(current, quickSort(right));
}
function propagation (arr) {
  const n = arr.length
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr
}
const arr = [5, 3, 2, 4, 1]
// console.log(quickSort(arr))
console.log(propagation(arr))

// function* gen1 () {
//   yield 1
//   yield (function () { return 2 })()
//   yield 3
// }

// const g = gen1()
// console.log(typeof g)
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())