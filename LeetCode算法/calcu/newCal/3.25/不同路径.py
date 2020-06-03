class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        dp = [1 for k in range(m)]
        for i in range(1, n):
            for j in range(1, m):
                dp[j] = dp[j]+dp[j-1]
        return dp[-1]


solute = Solution()
print(solute.uniquePaths(7, 3))