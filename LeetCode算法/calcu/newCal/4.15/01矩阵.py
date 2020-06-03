from collections import deque
class Solution:
    def updateMatrix(self, matrix: list) -> list:
        # m = len(matrix)
        # if m == 0 : return []
        # n = len(matrix[0])

        # zeroPos = [(i, j) for i in range(m) for j in range(n) if matrix[i][j] == 0]
        # cpmatrix = [[0 for _ in range(n)] for _ in range(m)]

        # for i in range(m) :
        #     for j in range(n) :
        #         if matrix[i][j] == 1 :
        #             tmpPaths = []
        #             for item in zeroPos :
        #                 path = abs(i - item[0]) + abs(j - item[1])
        #                 tmpPaths.append(path)
        #             cpmatrix[i][j] = min(tmpPaths)
        
        # return cpmatrix

        # lm = len(matrix)
        # if lm == 0:
        #     return []
        # lmn = len(matrix[0])
        # cpmatrix = [[0 for _ in range(lmn)] for _ in range(lm)]
        # directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

        # def handler(x, y, tmpPaths, markets, *newXY):
        #     if newXY:
        #         markets[newXY[0]][newXY[1]] = True
        #     else:
        #         markets[x][y] = True
        #     for direction in directions:
        #         newX = x + \
        #             direction[0] if not newXY else newXY[0] + direction[0]
        #         newY = y + \
        #             direction[1] if not newXY else newXY[1] + direction[1]

        #         if 0 <= newX < lm and 0 <= newY < lmn and not markets[newX][newY]:
        #             if matrix[newX][newY] == 0:
        #                 tmpPaths.append(abs(newX - x) + abs(newY - y))
        #             else:
        #                 handler(x, y, tmpPaths, markets, newX, newY)
        #     return tmpPaths

        # for i in range(lm):
        #     for j in range(lmn):
        #         if matrix[i][j] == 0:
        #             cpmatrix[i][j] = 0
        #         else:
        #             cpmatrix[i][j] = min(
        #                 handler(i, j, [], [[False for _ in range(lmn)] for _ in range(lm)]))
        # return cpmatrix

        # sum = 0
        # for i in range(100000000) :
        #     sum += i

        # return sum

        m = len(matrix)
        if m == 0 : return []
        n = len(matrix[0])
        dist = [[0] * n for _ in range(m)]
        zeroPos = [(i, j) for i in range(m) for j in range(n) if matrix[i][j] == 0]
        directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]
        q = deque(zeroPos)
        seen = set(zeroPos)
        while q :
            i, j = q.popleft()
            for direction in directions :
                ni, nj = i + direction[0], j + direction[1]
                if 0 <= ni < m and 0 <= nj < n and (ni, nj) not in seen :
                    dist[ni][nj] = dist[i][j] + 1
                    q.append((ni, nj))
                    seen.add((ni, nj))
        
        return dist


solute = Solution()
print(solute.updateMatrix([
    [0, 0, 1, 0, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 0, 1, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
    [0, 0, 1, 1, 1, 0, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 0]
]))
