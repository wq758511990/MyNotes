/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // let fibDict = {}
  // function fibLoop(n) {
  //   if (fibDict[n]) {
  //     return fibDict[n]
  //   }
  //   let curRes = n === 0 ? 1 : n === 1 ? 1 : (fibLoop(n - 2) + fibLoop(n - 1)) % 1000000007
  //   fibDict[n] = curRes
  //   return curRes
  // }
  // return fibLoop(n)
  let a = 1, b = 1
  for (let i = 0; i < n; i++) {
    let tmp = a
    a = b
    b = tmp + a
  }
  return a % 1e9 + 7
};

console.log(fib(78))