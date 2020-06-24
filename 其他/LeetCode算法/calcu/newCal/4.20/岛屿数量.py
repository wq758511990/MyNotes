from collections import deque
class Solution:
    def numIslands(self, grid: list) -> int:
        rows = len(grid)
        if rows == 0:
            return 0
        columns = len(grid[0])
        totalCount = 0

        # directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]

        # def handler(m, n, i, j):
        #     for direction in directions:
        #         ni = i + direction[0]
        #         nj = j + direction[1]
        #         if 0 <= ni < m and 0 <= nj < n and \
        #                 grid[ni][nj] == '1':
        #             grid[ni][nj] = '2'
        #             handler(m, n, ni, nj)

        # for row in range(rows):
        #     for column in range(columns):
        #         if grid[row][column] ==    '1':
        #             grid[row][column] = '2'
        #             handler(rows, columns, row, column)
        #             totalCount += 1
        # return totalCount
        

        # BFS
        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
        
        for row in range(rows) :
            for column in range(columns) :
                if grid[row][column] == '1' :
                    totalCount += 1
                    grid[row][column] = '2'

                    q = deque()
                    q.append((row, column))
                    while q:
                        tmp = q.popleft()
                        for direction in directions :
                            nr = tmp[0] + direction[0]
                            nc = tmp[1] + direction[1]

                            if 0 <= nr < rows and 0 <= nc < columns and \
                                grid[nr][nc] == '1' :
                                grid[nr][nc] = '2'
                                q.append((nr, nc))

        return totalCount
                        






solute = Solution()
print(solute.numIslands(
    [["1","1","1"],["0","1","0"],["1","1","1"]]))
