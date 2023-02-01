/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  let fromCode = 97;
  const dict = {};
  let i = 0;
  const n = key.length;
  let ans = "";
  while (fromCode <= 122 && i < n) {
    if (!dict[key[i]] && key[i] !== " ") {
      dict[key[i]] = String.fromCharCode(fromCode);
      fromCode++;
    }
    i++;
  }
  for (let c of message) {
    ans += dict[c] || " ";
  }
  return ans;
};

console.log(
  decodeMessage(
    "eljuxhpwnyrdgtqkviszcfmabo",
    "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
  )
);
