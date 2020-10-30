/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function (candies) {
  const SISTER_MAX = candies.length / 2;
  //   let candyDict = {};
  //   for (let candy of candies) {
  //     candyDict[candy] = candyDict[candy] ? candyDict[candy] + 1 : 1;
  //   }
  //   const curMax = Object.keys(candyDict).length;
  //   return curMax > SISTER_MAX ? SISTER_MAX : curMax;
  let candySet = new Set();
  for (let candy of candies) {
    candySet.add(candy);
  }
  return candySet.size > SISTER_MAX ? SISTER_MAX : candySet.size;
};

console.log(distributeCandies([1, 1, 2, 2, 3, 3]));
