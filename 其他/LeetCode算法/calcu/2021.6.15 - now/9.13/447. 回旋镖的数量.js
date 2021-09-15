/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  let ans = 0;
  for (let i = 0; i < points.length; i++) {
    const map = new Map();
    for (let j = 0; j < points.length; j++) {
      const d = dis(points[i], points[j]);
      if (map.has(d)) {
        map.set(d, map.get(d) + 1);
      } else {
        map.set(d, 1);
      }
    }
    map.forEach((val, key) => {
      ans += val * (val - 1);
    });
  }
  return ans;
  function dis(pa, pb) {
    return (pa[0] - pb[0]) ** 2 + (pa[1] - pb[1]) ** 2;
  }
};

console.log(
  numberOfBoomerangs([
    [1, 1],
    [2, 2],
    [3, 3],
  ])
);
