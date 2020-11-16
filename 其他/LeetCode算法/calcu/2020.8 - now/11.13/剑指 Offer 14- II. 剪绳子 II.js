/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  const MAX = 1e9 + 7
  if (n <= 3) return n - 1
  let a = Math.floor(n / 3),
    b = n % 3
  if (b === 0) return 3 ** a % MAX
  else if (b === 1) return (3 ** (a - 1) * 4) % MAX
  else if (b == 2) return (3 ** a * 2) % MAX
}

console.log(cuttingRope(10))
