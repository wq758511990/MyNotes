/**
 * @param {number} n
 * @return {string}
 */
const getAns = (s) => {
  let count = 1
  let ans = ''
  const n = s.length
  for (let i = 0; i < s.length; i++) {
    if (i + 1 < n && s[i] === s[i + 1]) {
      count++
    } else {
      ans += `${count}${s[i]}`
      count = 1
    }
  }
  return ans
}

var countAndSay = function (n) {
  const res = ['1']
  for (let i = 1; i < n + 1; i++) {
    const preAns = res[i - 1]
    res.push(getAns(String(preAns)))
  }
  return res[n - 1]
};

console.log(countAndSay(4))