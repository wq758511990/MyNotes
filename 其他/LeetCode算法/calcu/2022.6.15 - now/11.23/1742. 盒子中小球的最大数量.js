/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  let max = 0;
  let boxMap = new Map();
  for (let i = lowLimit; i <= highLimit; i++) {
    const sum = getSum(i);
    const targetValue = boxMap.get(sum);
    const setedValue = targetValue + 1 || 1
    boxMap.set(sum, setedValue);
    max = Math.max(setedValue, max);
  }
  return max;
  function getSum(number) {
    let sum = 0;
    while (number) {
      const leftNum = number % 10;
      sum += leftNum;
      number = Math.floor(number / 10);
    }
    return sum;
  }
};

console.info(countBalls(1, 10));
