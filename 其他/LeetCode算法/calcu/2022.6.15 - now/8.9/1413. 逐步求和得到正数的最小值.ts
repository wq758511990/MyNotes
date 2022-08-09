function minStartValue(nums: number[]): number {
  let sum = 0;
  let minNum = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    minNum = Math.min(sum, minNum);
  }
  console.log('minNum', minNum)
  return minNum > 0 ? 1 : Math.abs(minNum) + 1;
}

console.log(minStartValue([2, 3, 5, -5, -1]));
