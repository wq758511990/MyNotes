/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  const dict = {};
  for (let [value, weight] of items1) {
    dict[value] = (dict[value] || 0) + weight;
  }
  for (let [value, weight] of items2) {
    dict[value] = (dict[value] || 0) + weight;
  }
  return Object.entries(dict);
};

console.log(
  mergeSimilarItems(
    [
      [1, 1],
      [4, 5],
      [3, 8],
    ],
    [
      [3, 1],
      [1, 5],
    ]
  )
);
