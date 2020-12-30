/**
 * @param {number} n
 * @return {number}
 */
// const isPrime = (x) => {
//   for (let i = 2; i ** 2 <= x; i++) {
//     if (x % i === 0) {
//       return false
//     }
//   }
//   return true
// }

// var countPrimes = function (n) {
//   let ans = 0
//   for (let i = 2; i < n; i++) {
//     if (isPrime(i)) {
//       ans += 1
//     }
//   }
//   return ans
// };

var countPrimes = function (n) {
  const isPrime = Array(n).fill(1)
  let ans = 0
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      ans += 1
      for (let j = i ** 2; j < n; j += i) {
        isPrime[j] = 0
      }
    }
  }
  return ans
}

console.log(countPrimes(10))