class Solution:
    def getRow(self, rowIndex: int) -> list:
        resArr = [1]
        for i in range(1, rowIndex + 1) :
            resArr.insert(0, 0)
            for j in range(i) :
                resArr[j] = resArr[j] + resArr[j + 1]
        
        return resArr


solute = Solution()
print(solute.getRow(5))