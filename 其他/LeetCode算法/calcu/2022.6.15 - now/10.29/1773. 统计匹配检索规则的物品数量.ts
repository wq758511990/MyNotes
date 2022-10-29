function countMatches(
  items: string[][],
  ruleKey: string,
  ruleValue: string
): number {
  const ruleDict = {
    type: 0,
    color: 1,
    name: 2,
  };
  // @ts-ignore
  const targetIdx = ruleDict[ruleKey];
  let ans = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i][targetIdx] === ruleValue) {
      ans++;
    }
  }
  return ans;
}

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver"
  )
);
