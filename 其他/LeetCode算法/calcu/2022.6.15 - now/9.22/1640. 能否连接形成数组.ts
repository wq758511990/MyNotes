function canFormArray(arr: number[], pieces: number[][]): boolean {
  const n = arr.length,
    m = pieces.length;
  const indexMap = new Map();
  for (let i = 0; i < m; i++) {
    indexMap.set(pieces[i][0], i);
  }
  console.log("indexMap", indexMap);
  for (let i = 0; i < n; i++) {
    const targetIdx = indexMap.get(arr[i]);
    console.log("arr[i]", arr[i]);
    console.log("targetIdx", targetIdx);
    if (targetIdx === undefined) return false;
    const targetArr = pieces[targetIdx];
    const tmpI = i;

    for (let j = 0; j < targetArr.length; j++) {
      if (arr[tmpI + j] !== targetArr[j]) return false;
      if (targetArr.length - j > 1) i++;
    }
  }
  return true;
}

console.log(canFormArray([91, 4, 64, 78], [[78], [4, 64], [91]]));
