function maximumSwap(num: number): number {
  const strArr = [...("" + num)];
  const n = strArr.length;
  let maxIdx = n - 1;
  let idx1 = -1,
    idx2 = -1;
  for (let i = maxIdx; i >= 0; i--) {
    if (strArr[i] > strArr[maxIdx]) {
      maxIdx = i;
    } else if (strArr[i] < strArr[maxIdx]) {
      idx1 = i;
      idx2 = maxIdx;
    }
  }
  if (idx1 >= 0) {
    swapArray(strArr, idx1, idx2);
    return parseInt(strArr.join(""));
  } else {
    return num;
  }
}

const swapArray = (source: string[], idx1: number, idx2: number) => {
  const tmp = source[idx1];
  source[idx1] = source[idx2];
  source[idx2] = tmp;
};

console.log(maximumSwap(2736));
