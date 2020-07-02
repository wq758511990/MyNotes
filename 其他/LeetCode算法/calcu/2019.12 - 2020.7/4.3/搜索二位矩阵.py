class Solution:
    def searchMatrix(self, matrix: list, target: int) -> bool:
        rows = len(matrix)
        cols = len(matrix[0]) if rows > 0 else 0

        if not rows or not cols :
            return False

        for row in range(rows):
            # 判断要遍历哪一行
            if matrix[row][cols - 1] < target :
                row += 1
                continue
            for col in range(cols):
                left = 0
                right = cols - 1
                while left < right :
                    mid = ((left + right) // 2) + 1
                    if matrix[row][mid] < target :
                        left += 1   
                    elif matrix[row][mid] > target :
                        right -= 1
                    else :
                        return True
                
                return matrix[row][left] == target
        return False


solute = Solution()
print(solute.searchMatrix([[1]], 2))
