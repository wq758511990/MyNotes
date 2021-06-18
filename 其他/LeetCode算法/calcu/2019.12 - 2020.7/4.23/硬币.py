from collections import deque
class Solution:
    # dfs bfs 。 这题不适用
    # dp
    def waysToChange(self, n: int) -> int:
        maxN = 10 ** 9 + 7
        coins = [1, 5, 10, 25]
        dp = [1] + [0] * n
        for coin in coins :
            for i in range(coin, n + 1) :
                dp[i] += dp[i - coin]
        
        return dp[n] % maxN


solute = Solution()
print(solute.waysToChange(13))