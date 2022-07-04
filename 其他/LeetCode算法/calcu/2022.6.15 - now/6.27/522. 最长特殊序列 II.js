var findLUSlength = function (strs) {
  let ans = -1;
  const n = strs.length;
  for (let i = 0; i < n; i++) {
    let result = true;
    for (let j = 0; j < n; j++) {
      if (i !== j && isSubStr(strs[i], strs[j])) {
        result = false;
      }
    }
    if (result) {
      ans = Math.max(ans, strs[i].length);
    }
  }
  return ans;
};

const isSubStr = (s, t) => {
  let l = 0,
    r = 0;
  while (l < s.length && r < t.length) {
    if (s[l] === t[r]) {
      l++;
    }
    r++;
  }
  return l === s.length;
};

console.log(findLUSlength(["aaa", "aaa", "aa"]));
