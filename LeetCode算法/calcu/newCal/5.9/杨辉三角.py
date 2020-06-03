class Solution:
    def generate(self, numRows: int) -> list:
        res = [[] for _ in range(numRows)]
        for row in range(numRows) :
            for column in range(row + 1) :
                if column == 0 or column == row :
                    res[row].append(1)
                else :
                    res[row].append(res[row - 1][column - 1] + res[row - 1][column])
        
        return res

solute = Solution()
print(solute.generate(5))

