class Solution:
    def minPathSum(self, grid: list) -> int:
        m = len(grid)
        n = len(grid[0])
        mygrid = [[0 for _ in range(n)] for _ in range(m)]

        for i in range(m) :
            for j in range(n) :
                if i == 0 and j == 0 :
                    mygrid[i][j] = grid[i][j]
                elif i == 0 :
                    mygrid[i][j] = grid[i][j] + mygrid[i][j - 1]
                elif j == 0 :
                    mygrid[i][j] = grid[i][j] + mygrid[i - 1][j]
                else :
                    mygrid[i][j] = grid[i][j] + min(mygrid[i - 1][j], mygrid[i][j - 1])

        return mygrid[-1][-1]


solute = Solution()
print(solute.minPathSum([
  [1,3,1],
  [1,5,1],
  [4,2,1]
]))