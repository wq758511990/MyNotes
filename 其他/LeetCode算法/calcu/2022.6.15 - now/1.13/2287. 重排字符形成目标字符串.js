/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
  const dict = new Map();
  const totalDict = new Map();
  let ans = Infinity;
  for (let c of target) {
    dict.set(c, (dict.get(c) || 0) + 1);
  }
  for (let c of s) {
    totalDict.set(c, (totalDict.get(c) || 0) + 1);
  }


  for (const [c, count] of dict.entries()) {
    const total = totalDict.get(c) || 0;
    ans = Math.min(Math.floor(total / count), ans);
  }

  return ans;
};

console.log(rearrangeCharacters("ilovecodingonleetcode", "code"));
