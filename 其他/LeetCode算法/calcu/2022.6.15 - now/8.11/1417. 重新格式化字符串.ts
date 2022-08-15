function reformat(s: string): string {
  const numGroup: string[] = [];
  const alphaGroup: string[] = [];
  let ans = "";
  for (let c of s) {
    if (c.charCodeAt(0) >= 97) {
      alphaGroup.push(c);
    } else {
      numGroup.push(c);
    }
  }
  if (Math.abs(numGroup.length - alphaGroup.length) > 1) return "";
  const targetGroup =
    numGroup.length >= alphaGroup.length ? numGroup : alphaGroup;
  const leftGroup = targetGroup === numGroup ? alphaGroup : numGroup;
  while(targetGroup.length) {
    ans+=targetGroup.pop()
    ans+=(leftGroup.pop() || "")
  }
  return ans
}

console.log(reformat("aa2b"));
