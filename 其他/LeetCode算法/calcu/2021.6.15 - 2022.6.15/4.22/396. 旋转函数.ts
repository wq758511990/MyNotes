function maxRotateFunction(nums: number[]): number {
  const k = nums.length
  let ans = Number.MIN_SAFE_INTEGER
  let pre = 0
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    ans = pre += i * nums[i]
  }
  for (let i = 1; i < nums.length; i++) {
    pre = pre - sum + nums[i] * k
    ans = Math.max(ans, pre)
  }
  return ans
}
