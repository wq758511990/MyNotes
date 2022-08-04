function minSubsequence(nums: number[]): number[] {
  const sum = nums.reduce((a, b) => a + b);
  let curSum = 0;
  const mtHalf = Math.floor(sum / 2);
  nums.sort((a, b) => b - a);
  const ans: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    curSum += nums[i];
    ans.push(nums[i]);
    if (curSum > mtHalf) {
      return ans;
    }
  }
  return ans;
}

console.log(minSubsequence([]))