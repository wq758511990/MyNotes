class Solution:
    def maximalSquare(self, matrix: list) -> int:
        # def handler(i, j):
        #     matrix[i][j] = 2
        #     for direction in directions :
        #         ni = i + direction[0]
        #         nj = j + direction[1]

        #         if 0 <= ni < rows and 0 <= nj < columns and \
        #             matrix[ni][nj] == 1 :
        #             handler(ni, nj)

        # directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]
        # rows = len(matrix)
        # if rows == 0:
        #     return 0
        # columns = len(matrix[0])
        # for row in range(rows) :
        #     for column in range(columns) :
        #         if matrix[row][column] == 1 :
        #             handler(row, column)

        # return matrix
        


        # dp
        rows = len(matrix)
        if rows == 0: return 0
        columns = len(matrix[0])
        maxSide = 0
        dp = [[0 for _ in range(columns)] for _ in range(rows)]
        for row in range(rows) :
            for column in range(columns) :
                if matrix[row][column] == 1 :
                    if row == 0 or column == 0 :
                        dp[row][column] = 1
                    else :
                        dp[row][column] = min(dp[row - 1][column], dp[row][column - 1], dp[row - 1][column - 1]) + 1
                        maxSide = max(maxSide, dp[row][column])
        print(dp)
        return maxSide ** 2



solute = Solution()
print(solute.maximalSquare(
    [
        [1, 0, 1, 0, 0],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0]
    ]))
