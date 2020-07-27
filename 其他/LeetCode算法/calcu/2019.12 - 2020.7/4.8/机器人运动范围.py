def digitsum(n):
    ans = 0
    while n:
        ans += n % 10
        n //= 10
    return ans

class Solution:
    def movingCount(self, m: int, n: int, k: int) -> int:
        vis = set([(0, 0)])
        for i in range(m):
            for j in range(n):
                if ((i - 1, j) in vis or (i, j - 1) in vis) and digitsum(i) + digitsum(j) <= k:
                    vis.add((i, j))
        return len(vis)
    # def __init__(self):
    #     self.directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]
    #     self.totalCount = 1

    # def movingCount(self, m: int, n: int, k: int) -> int:
    #     markets = [[False for _ in range(n)] for _ in range(m)]
    #     self.handler(m, n, 0, 0, k, markets)
    #     return self.totalCount

    # def handler(self, m, n, start_row, start_col, k, markets):
    #     numCount = self.getCount(start_row) + self.getCount(start_col)
    #     if numCount > k:
    #         return False
    #     else:
    #         markets[start_row][start_col] = True
    #     for directon in self.directions:
    #         new_row = start_row + directon[0]
    #         new_col = start_col + directon[1]
    #         if 0 <= new_row < m and 0 <= new_col < n and \
    #             not markets[new_row][new_col] and \
    #                 self.handler(m, n, new_row, new_col, k, markets):
    #                 self.totalCount += 1
    #     return True

    # def getCount(self, n):
    #     res = 0
    #     while n > 0:
    #         res += n % 10
    #         n = n // 10
    #     return res



solute = Solution()
print(solute.movingCount(3, 2, 1))
