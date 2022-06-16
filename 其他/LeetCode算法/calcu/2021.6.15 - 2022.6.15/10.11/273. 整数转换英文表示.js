/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
  const singles = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  const thousands = ["", "Thousand", "Million", "Billion"];

  const recursion = (curr, num) => {
    if (num === 0) {
      return;
    } else if (num < 10) {
      curr.push(singles[num] + " ");
    } else if (num < 20) {
      curr.push(teens[num - 10] + " ");
    } else if (num < 100) {
      curr.push(tens[Math.floor(num / 10)] + " ");
      recursion(curr, num % 10);
    } else {
      curr.push(singles[Math.floor(num / 100)] + " Hundred ");
      recursion(curr, num % 100);
    }
  }

  if (num === 0) {
    return "Zero";
  }
  const sb = [];
  for (let i = 3, unit = 1000000000; i >= 0; i--, unit = Math.floor(unit / 1000)) {
    const curNum = Math.floor(num / unit);
    if (curNum !== 0) {
      num -= curNum * unit;
      const curr = [];
      recursion(curr, curNum);
      curr.push(thousands[i] + " ");
      sb.push(curr.join(''));
    }
  }
  return sb.join('').trim();
}
console.log(numberToWords(123))