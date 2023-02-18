/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  let cnt = 0;
  let dict = {};
  for (const num of nums) {
    if (dict[num]) {
      delete dict[num];
      cnt++;
    } else {
      dict[num] = 1;
    }
  }
  return [cnt, Object.keys(dict).length];
};

console.log(numberOfPairs([0]));
