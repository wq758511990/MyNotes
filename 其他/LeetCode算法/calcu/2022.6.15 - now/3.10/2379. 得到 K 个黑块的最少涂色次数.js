/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  const n = blocks.length;
  let l = 0,
    r = 0,
    minCnt = Number.MAX_SAFE_INTEGER,
    tmpCnt = k === 1 ? (blocks[0] === "W" ? 1 : 0) : 0;
  while (r < k) {
    if (blocks[r] === "W") {
      tmpCnt++;
    }
    r++;
  }
  minCnt = tmpCnt;
  while (r + 1 < n) {
    if (blocks[l] === "W") {
      tmpCnt--;
    }
    if (blocks[r + 1] === "W") {
      tmpCnt++;
    }
    minCnt = Math.min(tmpCnt, minCnt);
    r++;
    l++;
  }
  return minCnt;
};

console.log(minimumRecolors("WWBBBWBBBBBWWBWWWB", 16));
