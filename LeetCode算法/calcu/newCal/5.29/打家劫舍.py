class Solution:
    def rob(self, nums: list) -> int:
        if not nums : return 0

        size = len(nums)
        dp = [0] * size
        dp[0] = nums[0]
        dp[1] = max(dp[0], nums[1])
        for i in range(2, size) :
            dp[i] = max(dp[i - 2] + nums[i], dp[i - 1])
        print(dp)

solute = Solution()
print(solute.rob([2,7,9,3,1]))