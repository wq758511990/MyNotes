/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const dict = {}
  let ans = ''
  for (let c of s) {
    if (dict[c]) {
      dict[c] += 1
    } else {
      dict[c] = 1
    }
  }
  const tmp = Object.keys(dict).sort((a, b) => dict[b] - dict[a])
  for (let i = 0; i < tmp.length; i++) {
    let key = tmp[i]
    while (dict[key]) {
      ans += key
      dict[key]--
    }
  }
  return ans
};

console.log(frequencySort("tree"))