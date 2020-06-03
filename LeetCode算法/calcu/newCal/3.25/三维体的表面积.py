class Solution:
    def surfaceArea(self, grid: list) -> int:
        totalArea = 0
        lg = len(grid)
        for i in range(0, lg) :
            for j in range(0, len(grid[i])) :
                currArea = self.countArea(grid[i][j])
                if j < len(grid[i]) - 1:
                    currArea -= (min(grid[i][j], grid[i][j + 1]) * 2)
                if i < lg - 1 :
                    currArea -= (min(grid[i][j], grid[i + 1][j]) * 2)

                totalArea += currArea
        return totalArea


    def countArea(self, n) :
        if n == 0 : return 0
        elif n == 1 : return 6
        elif n == 2 : return 10
        else :
            return (n - 2) * 4 + 10

solute = Solution()
print(solute.surfaceArea([[2]]))