from collections import deque


class Solution:
    def numIslands(self, grid: list) -> int:
        rows = len(grid)
        if rows == 0 : return
        colums = len(grid[0])
        directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]
        landsCount = 0

        def handler(i, j) :
            for direction in directions :
                ni = i + direction[0]
                nj = j + direction[1]
                if 0 <= ni < rows and 0 <= nj < colums and \
                    grid[ni][nj] == '1' :
                    grid[ni][nj] = '2'
                    handler(ni, nj)

        for i in range(rows) :
            for j in range(colums) :
                if grid[i][j] == '1' :
                    landsCount += 1
                    grid[i][j] = '2'
                    handler(i, j)

        return landsCount


solute = Solution()
print(solute.numIslands(
    [
        [1, 1, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 1]
    ]))
