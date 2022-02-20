/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let countDict = {};
  for (let num of arr) {
    if (countDict[num]) {
      countDict[num]++;
    } else {
      countDict[num] = 1;
    }
  }

  const times = new Set();
  const counts = Object.values(countDict);
  for (let count of counts) {
    times.add(count);
  }
  return times.size === counts.length;
  //   let resArr = Object.values(countDict).sort((a, b) => a - b);
  //   for (let i = 1; i < resArr.length; i++) {
  //     if (resArr[i] === resArr[i - 1]) {
  //       return false;
  //     }
  //   }
  //   return true;

  //   const occur = new Map();
  //   for (const x of arr) {
  //     if (occur.has(x)) {
  //       occur.set(x, occur.get(x) + 1);
  //     } else {
  //       occur.set(x, 1);
  //     }
  //   }

  //   const times = new Set();
  //   for (const [key, value] of occur) {
  //     times.add(value);
  //   }
  //   return times.size === occur.size;
};

console.log(
  uniqueOccurrences([
    26,
    2,
    16,
    16,
    5,
    5,
    26,
    2,
    5,
    20,
    20,
    5,
    2,
    20,
    2,
    2,
    20,
    2,
    16,
    20,
    16,
    17,
    16,
    2,
    16,
    20,
    26,
    16,
  ])
);
