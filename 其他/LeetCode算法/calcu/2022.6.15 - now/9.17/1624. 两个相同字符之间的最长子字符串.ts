function maxLengthBetweenEqualCharacters(s: string): number {
  let ans = -1;
  const idxMap: Record<string, number> = {};
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (idxMap[c] !== undefined) {
      ans = Math.max(ans, i - idxMap[c] - 1);
    } else {
      idxMap[c] = i;
    }
  }
  return ans;
}

console.log(maxLengthBetweenEqualCharacters("cabbac"));
