/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  let number = 1;
  const res = []
  for (let i = 0; i < n; i++) {
    res.push(number);
    if (number * 10 <= n) {
      number *= 10
    } else {
      while (number % 10 === 9 || number + 1 > n) {
        number = Math.floor(number / 10)
      }
      number++
    }
  }
  return res
};

console.log(lexicalOrder(13))