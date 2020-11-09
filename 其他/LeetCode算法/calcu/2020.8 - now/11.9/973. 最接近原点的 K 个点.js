/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
  let rows = points.length;
  let disDict = {};
  let res = [];
  if (!rows) return [];
  for (let i = 0; i < rows; i++) {
    let dis = 0;
    let point = points[i];
    dis = point[0] ** 2 + point[1] ** 2;
    if (disDict[dis]) {
      disDict[dis] += `_${point}`;
    } else {
      disDict[dis] = `${point}`;
    }
  }
  let sortedKeys = Object.keys(disDict).sort((a, b) => a - b);
  for (key of sortedKeys) {
    let value = disDict[key].split("_");
    for (let val of value) {
      if (res.length < K) res.push(val);
    }
  }
  let newArr = res.map((item) => {
    strItem = item.split(",");
    const intItem = strItem.map((str) => {
      return parseInt(str);
    });
    return intItem;
  });
  return newArr;
};

console.log(
  kClosest(
    [
      [3, 3],
      [-3, 3],
      [5, -1],
      [-2, 4],
    ],
    2
  )
);
