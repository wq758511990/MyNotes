/**
 * @param {number} n
 * @return {number}
 */

let fibDict = {
  0: 0,
  1: 1
}

var fib = function (n) {
  if (n < 2) {
    return fibDict[n]
  }
  if (n in fibDict) {
    return fibDict[n]
  } else {
    const res = fib(n - 1) + fib(n - 2)
    fibDict[n] = res
    return res
  }
};

console.log(fib(3))