class Solution:
    def generateMatrix(self, n: int) -> list:
        if n == 0 :
            return []
        matrix = [[0 for _ in range(n)] for _ in range(n)]
        curNum = 1
        idxT = 0
        idxL = 0
        idxB = n - 1
        idxR = n - 1
        while True :
            for x in range(idxL, idxR + 1) :
                matrix[idxT][x] = curNum
                curNum += 1
            idxT += 1

            if idxT > idxB :
                break

            for x in range(idxT, idxB + 1) :
                matrix[x][idxR] = curNum
                curNum += 1
            idxR -= 1

            if idxR < idxL :
                break

            for x in range(idxR, idxL - 1, -1) :
                matrix[idxB][x] = curNum
                curNum += 1
            idxB -= 1

            if idxB < idxT :
                break

            for x in range(idxB, idxT - 1, -1) :
                matrix[x][idxL] = curNum
                curNum += 1
            idxL += 1

            if idxL > idxR :
                break
        return matrix


solute = Solution()
print(solute.generateMatrix(10))