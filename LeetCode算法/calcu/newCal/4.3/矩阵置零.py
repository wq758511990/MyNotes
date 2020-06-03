class Solution:
    def setZeroes(self, matrix: list) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        rows = len(matrix)
        cols = len(matrix[0])
        # 拷贝数组
        # cpMatrix = [[i for i in matrix[item]] for item in range(rows)]

        # for row in range(rows):
        #     for col in range(cols):

        #         if cpMatrix[row][col] == 0:
        #             # 每一行
        #             for j in range(cols):
        #                 matrix[row][j] = 0
        #             # 每一列
        #             for i in range(rows):
        #                 matrix[i][col] = 0

        # return matrix

        for row in range(rows):
            for col in range(cols):

                if matrix[row][col] == 0:
                    # 每一行
                    for j in range(cols):
                        matrix[row][j] = None if matrix[row][j] != 0 else 0 
                    # 每一列
                    for i in range(rows):
                        matrix[i][col] = None if matrix[i][col] != 0 else 0 

        for i in range(rows) :
            for j in range(cols) :
                matrix[i][j] = matrix[i][j] if matrix[i][j] != None else 0
        
        print(matrix)



solute = Solution()
print(solute.setZeroes([[1,1,1],[1,0,1],[1,1,1]]))
