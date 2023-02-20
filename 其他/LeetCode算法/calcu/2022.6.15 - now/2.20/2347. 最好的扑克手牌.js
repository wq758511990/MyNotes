/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
  const numDict = {};
  const suitDict = {};
  for (const suit of suits) {
    suitDict[suit] ? (suitDict[suit] += 1) : (suitDict[suit] = 1);
  }
  for (const num of ranks) {
    numDict[num] ? (numDict[num] += 1) : (numDict[num] = 1);
  }
  const suitLen = Object.keys(suitDict).length;
  const numLen = Object.keys(numDict).length;
  const numValues = Object.values(numDict);
  if (suitLen === 1) {
    return "Flush";
  } else if (numLen <= 3 && numValues.some((value) => value >= 3)) {
    return "Three of a Kind";
  } else if (numLen <= 4) {
    return "Pair";
  } else {
    return "High Card";
  }
};

console.log(bestHand([4, 4, 2, 4, 4], ["d", "a", "a", "b", "c"]));
