class Solution:
    def rotate(self, matrix: list) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        # lm = len(matrix)
        # for i in range((lm // 2) + (lm % 2)):
        #     for j in range((lm // 2)):
        #         temp = []
        #         row = i
        #         col = j
        #         for k in range(4):
        #             temp.append(matrix[row][col])
        #             row, col = col, lm - row - 1
        #         for y in range(4):
        #             matrix[row][col] = temp[(y + 3) % 4]
        #             row, col = col, lm - row - 1
        # return matrix

        # matrix[::] = zip(*matrix[::-1])
        # return matrix

        # 复制一个新的matrix，站空间
        # n = len(matrix)
        # matrix_new = [[0] * n for _ in range(n)]

        # for i in range(n) :
        #     for j in range(n) :
        #         matrix_new[j][n - i - 1] = matrix[i][j]

        # matrix[::] = matrix_new
        # return matrix

        # 先水平，后对角
        # 水平可以得到 i, j = n - i - 1, j
        # 对角可以得到 i, j = j, n - i - 1 这样就与上述公式一样
        n = len(matrix)
        for i in range((n + 1) // 2):
            for j in range(n):
                matrix[i][j], matrix[n - i -
                                     1][j] = matrix[n - i - 1][j], matrix[i][j]

        for x in range(n):
            for y in range(x):
                matrix[x][y], matrix[y][x] = matrix[y][x], matrix[x][y]

        return matrix


solute = Solution()
print(solute.rotate(
    [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]))
