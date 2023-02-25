/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function (s1, s2) {
  let xy = 0,
    yx = 0;
  const n = s1.length;
  for (let i = 0; i < n; i++) {
    if (s1[i] === "x" && s2[i] === "y") {
      xy++;
    }
    if (s1[i] === "y" && s2[i] === "x") {
      yx++;
    }
  }

  if ((xy + yx) % 2 === 1) {
    return -1;
  }
  return Math.floor(xy / 2) + Math.floor(yx / 2) + (xy % 2) + (yx % 2);
};
