class Solution:
    def findNumberIn2DArray(self, matrix: list, target: int) -> bool:
        # 二分
        # for row in matrix:
        #     if not row :
        #       return False
        #     length = len(row)
        #     l = 0
        #     r = length - 1
        #     while l < r:
        #         mid = (l + r) // 2
        #         if row[mid] < target:
        #             l = mid + 1
        #         else:
        #             r = mid
        #     if row[l] == target :
        #       return True
        # return False

        # 右上开始找(往左变小，往下变大)
        rows = len(matrix)
        if not rows :
          return False
        cols = len(matrix[0])
        # 特判
        if not cols :
            return False
        x, y = 0, cols - 1
        while x < rows and y >= 0:
            if matrix[x][y] < target:
                x += 1
            elif matrix[x][y] > target:
                y -= 1
            else:
                return True
        return False


solute = Solution()
print(solute.findNumberIn2DArray([[1, 1]],
                                 2))
