/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const ans = []
  for (let i = 1; i < n + 1; i++) {
    let target
    if ((i % 3 === 0) && (i % 5 === 0)) {
      target = 'FizzBuzz'
    }
    else if (i % 3 === 0) {
      target = 'Fizz'
    }
    else if (i % 5 === 0) {
      target = 'Buzz'
    }
    else {
      target = i.toString()
    }
    ans.push(target)
  }
  return ans
};

console.log(fizzBuzz(0))