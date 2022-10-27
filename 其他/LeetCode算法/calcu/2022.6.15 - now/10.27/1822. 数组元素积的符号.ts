function arraySign(nums: number[]): number {
  //   const ans = nums.reduce((a, b) => a * b);
  //   return ans > 0 ? 1 : ans < 0 ? -1 : 0;
  let minusCnt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      minusCnt++;
    }
    if (nums[i] === 0) return 0;
  }
  return minusCnt % 2 === 1 ? -1 : 1;
}
