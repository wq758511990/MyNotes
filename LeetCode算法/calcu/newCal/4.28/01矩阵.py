from collections import deque
class Solution:
    def updateMatrix(self, matrix: list) -> list:
        m = len(matrix)
        if m == 0: return []
        n = len(matrix[0])
        dist = [[0] * n for _ in range(m)]
        zeroPoints = [(i, j) for i in range(m) for j in range(n) if matrix[i][j] == 0]
        directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]
        q = deque(zeroPoints)
        seen = set(zeroPoints)
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
print(solute.updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]]))
