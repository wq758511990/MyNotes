class Solution:
    def findNumberIn2DArray(self, matrix: list, target: int) -> bool:
        lm = len(matrix)
        if lm == 0:
            return False
        lmn = len(matrix[0])

        # for i in range(lm):
        #     l = 0
        #     r = lmn - 1
        #     while l <= r:
        #         mid = (l + r) // 2
        #         if matrix[i][mid] < target:
        #             l += 1
        #         elif matrix[i][mid] > target:
        #             r -= 1
        #         else:
        #             return True
        # return False
        row = 0
        col = lmn - 1
        while row <= lm - 1 and col >= 0 :
            if matrix[row][col] < target :
                row += 1
            elif matrix[row][col] > target :
                col -= 1
            else : return True

        return False


solute = Solution()
print(solute.findNumberIn2DArray([[-5]], -5))
