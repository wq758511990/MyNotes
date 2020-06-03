class Solution:
    def rotate(self, matrix: list) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        # res = [[0 for j in i] for i in matrix]
        # lm = len(matrix)
        # maxIdx = lm - 1
        # for i in range(lm) :
        #     for j in range(lm) :
        #         res[maxIdx - j][maxIdx - i] = matrix[i][j]
        # res.reverse()
        # return res

        lm = len(matrix)
        for i in range((lm // 2) + (lm % 2)):
            for j in range((lm // 2)):
                temp = []
                row = i
                col = j
                for k in range(4):
                    temp.append(matrix[row][col])
                    x = row
                    row = col
                    col = lm - x - 1
                for y in range(4):
                    matrix[row][col] = temp[(y + 3) % 4]
                    x = row
                    row = col
                    col = lm - x - 1
        return matrix


solute = Solution()
print(solute.rotate([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]))
