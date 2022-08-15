function maxScore(s: string): number {
  let max = 0;
  const n = s.length;
  if (s[0] === "0") {
    max++;
  }
  for (let i = 1; i < n; i++) {
    if (s[i] === "1") {
      max++;
    }
  }
  let ans = max;
  for (let i = 1; i < n - 1; i++) {
    if (s[i] === "0") {
      max++;
    } else {
      max--;
    }
    ans = Math.max(ans, max)
  }
  return ans
}

console.log(maxScore("00111"));
