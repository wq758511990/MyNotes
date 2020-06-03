class Solution:
    def maxValue(self, grid: list) -> int:
        rows = len(grid)
        columns = len(grid[0])
        dp = [[0] * columns for _ in range(rows)]
        for row in range(rows) :
            for column in range(columns) :
                dp[row][column] = max(dp[row - 1][column], dp[row][column - 1]) + grid[row][column]
        return dp[-1][-1]


solute = Solution()
print(solute.maxValue([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]))
