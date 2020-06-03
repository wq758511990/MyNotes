class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: list) -> int:
        # res = [1 for _ in range(m)]
        # for i in range(1, n):
        #     for j in range(1, m):
        #         res[j] = res[j] + res[j - 1]
        # return res
        if not obstacleGrid:
            return 0
        n = len(obstacleGrid)
        m = len(obstacleGrid[0])
             

        grid = [[0 for _ in range(m)] for _ in range(n)]

        for y in range(n) :
            if obstacleGrid[y][0] == 0 :
                grid[y][0] = 1
            else :
                break

        for i in range(n) :
            for j in range(m) :
                if i == 0 :
                    if obstacleGrid[i][j] == 1 :
                        break
                    else :
                        grid[i][j] = 1
                else :
                    grid[i][j] = grid[i - 1][j] + grid[i][j - 1] if obstacleGrid[i][j] != 1 else 0
        
        return grid[-1][-1]


solute = Solution()
print(solute.uniquePathsWithObstacles([[0], [0]]))
