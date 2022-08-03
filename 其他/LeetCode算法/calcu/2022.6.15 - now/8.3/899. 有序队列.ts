const orderlyQueue = (s: string, k: number) => {
  const n = s.length;
  if (k === 1) {
    let ans = s;
    for (let i = 0; i < s.length - 1; i++) {
      s = s.substring(1, n) + s[0];
      ans = ans < s ? ans : s;
    }
    return ans;
  }
  return [...s].sort().join("");
};

console.log(orderlyQueue("cba", 1));
