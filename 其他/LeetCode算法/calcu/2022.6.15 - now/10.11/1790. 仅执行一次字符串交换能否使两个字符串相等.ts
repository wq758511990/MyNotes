function areAlmostEqual(s1: string, s2: string): boolean {
  if (s1 === s2) return true;
  const n = s1.length;
  const diffMap = new Map();
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (s1[i] !== s2[i]) {
      if (cnt === 0) {
        diffMap.set(s1[i], s2[i]);
        cnt++;
      } else {
        if (s1[i] !== diffMap.get(s2[i])) {
          return false;
        } else {
          diffMap.delete(s2[i]);
        }
      }
    }ccc 
  }
  return diffMap.size === 0;
}

console.log(areAlmostEqual("kelb", "kelb"));
