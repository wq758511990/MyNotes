/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  let res = [first]
  for (let i = 0; i < encoded.length; i++) {
    let tmp = encoded[i] ^ res[i]
    res.push(tmp)
  }
  return res
};

console.log(decode([1, 2, 3], 1))