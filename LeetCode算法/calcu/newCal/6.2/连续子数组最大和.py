class Solution:
    def maxSubArray(self, nums: list) -> int:
        size = len(nums)
        dp = [0] * size
        dp[0], maxSum = nums[0], nums[0]
        for i in range(1, size) :
            dp[i] = nums[i] if dp[i - 1] <= 0 else dp[i - 1] + nums[i]
            maxSum = dp[i] if dp[i] > maxSum else maxSum
        
        return maxSum


solute = Solution()
print(solute.maxSubArray([1, 2]))
