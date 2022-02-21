/**
 * @param {number} area
 * @return {number[]}
 */
const isInteger = (number) => {
  return number % 1 === 0
}

var constructRectangle = function (area) {
  let maxW = Math.floor(Math.sqrt(area))
  for (let i = maxW; i > 0; i--) {
    const length = area / i
    if (isInteger(length)) {
      return [length, i]
    }
  }
  return [area, 1]
};


console.log(constructRectangle(5))