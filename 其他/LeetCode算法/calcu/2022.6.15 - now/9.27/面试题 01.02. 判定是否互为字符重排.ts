function CheckPermutation(s1: string, s2: string): boolean {
  const s1Map = new Map();
  for (let c of s1) {
    const result = s1Map.get(c);
    if (result) {
      s1Map.set(c, result + 1);
    } else {
      s1Map.set(c, 1);
    }
  }
  for (let c of s2) {
    const result = s1Map.get(c);
    if (!result) return false;
    s1Map.set(c, result - 1);
  }
  const resArr = Array.from(s1Map.values());
  for (let i in resArr) {
    if (resArr[i] !== 0) return false;
  }
  return true;
}

function CheckPermutation1(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false;
  const ans = new Array(128).fill(0);
  for (let c of s1) {
    ans[c.charCodeAt(0)]++;
  }
  for (let c of s2) {
    ans[c.charCodeAt(0)]--;
    if (ans[c.charCodeAt(0)] < 0) return false
  }
  return true
}

console.log(CheckPermutation1("abc", "bca"));
