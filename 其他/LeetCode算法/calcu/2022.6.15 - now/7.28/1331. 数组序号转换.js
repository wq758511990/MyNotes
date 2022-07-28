function arrayRankTransform(arr) {
  const copiedArr = JSON.parse(JSON.stringify(arr));
  copiedArr.sort((a, b) => a - b);
  const ans = [];
  const dict = {};
  let repeatedNum = 0;
  for (let i = 0; i < copiedArr.length; i++) {
    if (dict[copiedArr[i]]) {
      repeatedNum++;
      continue;
    }
    dict[copiedArr[i]] = i + 1 - repeatedNum;
  }
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    ans.push(dict[cur]);
  }
  return ans;
}

console.log(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12]));
