/**
 * @param {string[]} array
 * @return {string[]}
 */
var findLongestSubarray = function (array) {
  const subMap = new Map();
  let maxLenth = 0;
  let startIndex = -1;
  subMap.set(0, -1);
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (isLetter(array[i])) {
      sum++;
    } else {
      sum--;
    }
    if (subMap.has(sum)) {
      const firstIndex = subMap.get(sum);
      if (i - firstIndex > maxLenth) {
        maxLenth = i - firstIndex;
        // 这里无需更新subMap的前缀和值，否则无法拿到最大值
        startIndex = firstIndex + 1;
      }
    } else {
      subMap.set(sum, i);
    }
  }
  if (maxLenth === 0) return [];
  return array.slice(startIndex, startIndex + maxLenth);
};

const isLetter = (ch) => {
  return ("a" <= ch && ch <= "z") || ("A" <= ch && ch <= "Z");
};

console.log(
  findLongestSubarray([
    "A",
    "1",
    "B",
    "C",
    "D",
    "2",
    "3",
    "4",
    "E",
    "5",
    "F",
    "G",
    "6",
    "7",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
  ])
);
