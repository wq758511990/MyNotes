function minimumAbsDifference(arr: number[]): number[][] {
  let min = Number.MAX_SAFE_INTEGER;
  let ans: number[][] = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    const absRes = Math.abs(arr[i] - arr[i + 1]);
    if (absRes < min) {
      min = absRes;
      ans = [[arr[i], arr[i + 1]]];
    } else if (absRes === min) {
      ans.push([arr[i], arr[i + 1]]);
    }
  }
  return ans;
}

console.log(minimumAbsDifference([1, 2]));
