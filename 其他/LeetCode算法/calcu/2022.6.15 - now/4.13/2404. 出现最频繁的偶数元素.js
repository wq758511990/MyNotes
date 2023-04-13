/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  var map = {}; // key: even number, value: count
  //   for (const num of nums) {
  //     if (num % 2 === 0) {
  //       map[num] = (map[num] || 0) + 1; // if key already exists, add 1, otherwise set to 1.  This way we
  //     }
  //   }
  //   const sortedEntries = Object.entries(map).sort((a, b) =>
  //     b[1] === a[1] ? Number(a[0]) - Number(b[0]) : b[1] - a[1]
  //   );

  let maxCnt = 0;
  let number = -1;

  for (const num of nums) {
    if (num % 2 === 0) {
      map[num] = (map[num] || 0) + 1; // if key already exists, add 1, otherwise set to 1.  This way we
      if (map[num] > maxCnt) {
        // find the highest count and the number with that count.  This way we can return both.
        maxCnt = map[num]; // and then return both.  This way we can return both.  This way we can return both
        number = num; // and then return both.  This way we can return both.  This way we can return both.  This way
      } else if (map[num] === maxCnt) {
        number = Number(num) < number ? Number(num) : number;
      }
    }
  }
  return number; // return the number with the most even occurrences.  This way we can return both.  This way we can return both.  This
};

console.log(mostFrequentEven([0, 1, 4, 4, 2, 2, 1]));
