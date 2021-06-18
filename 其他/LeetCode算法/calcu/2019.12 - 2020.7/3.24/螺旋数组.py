class Solution:
    def spiralOrder(self, matrix: list) -> list:
        # if not matrix:
        #     return []
        # res = []
        # if len(matrix[0]) == 1:
        #     for item in matrix:
        #         res.append(item[0])
        #     return res
        # if len(matrix) == 1:
        #     for item in matrix[0]:
        #         res.append(item)
        #     return res
        # totalLen = len(matrix) * len(matrix[0])
        # idxT = 0
        # idxL = 0
        # idxB = len(matrix) - 1
        # idxR = len(matrix[0]) - 1
        # while idxT <= idxB and idxL <= idxR:
        #     for i in range(idxL, idxR + 1):
        #         if len(res) == totalLen :
        #             return res
        #         res.append(matrix[idxT][i])
        #     else:
        #         idxT += 1

        #     for j in range(idxT, idxB + 1):
        #         if len(res) == totalLen :
        #             return res
        #         res.append(matrix[j][idxR])
        #     else:
        #         idxR -= 1

        #     for y in range(idxR, idxL - 1, -1):
        #         if len(res) == totalLen :
        #             return res
        #         res.append(matrix[idxB][y])
        #     else:
        #         idxB -= 1

        #     for k in range(idxB, idxT - 1, -1):
        #         if len(res) == totalLen :
        #             return res
        #         res.append(matrix[k][idxL])
        #     else:
        #         idxL += 1
        # return res


        # if not matrix:
        #     return []
        # res = []

        # idxT = 0
        # idxL = 0
        # idxB = len(matrix) - 1
        # idxR = len(matrix[0]) - 1

        # while True:
        #     for i in range(idxL, idxR + 1):
        #         res.append(matrix[idxT][i])
        #     else:
        #         idxT += 1
        #         if idxT > idxB : break

        #     for j in range(idxT, idxB + 1):
        #         res.append(matrix[j][idxR])
        #     else:
        #         idxR -= 1
        #         if idxR < idxL : break

        #     for y in range(idxR, idxL - 1, -1):
        #         res.append(matrix[idxB][y])
        #     else:
        #         idxB -= 1
        #         if idxB < idxT : break

        #     for k in range(idxB, idxT - 1, -1):
        #         res.append(matrix[k][idxL])
        #     else:
        #         idxL += 1
        #         if idxL > idxR : break
        # return res

        if not matrix: return []
        R, C = len(matrix), len(matrix[0])
        seen = [[False] * C for _ in matrix]
        ans = []
        dr = [0, 1, 0, -1]
        dc = [1, 0, -1, 0]
        r = c = di = 0
        for _ in range(R * C):
            ans.append(matrix[r][c])
            seen[r][c] = True
            cr, cc = r + dr[di], c + dc[di]
            if 0 <= cr < R and 0 <= cc < C and not seen[cr][cc]:
                r, c = cr, cc
            else:
                di = (di + 1) % 4
                r, c = r + dr[di], c + dc[di]
        return ans


solute = Solution()
print(solute.spiralOrder([
    [1, 2, 3, 4], 
    [5, 6, 7, 8], 
    [9, 10, 11, 12]
]))
