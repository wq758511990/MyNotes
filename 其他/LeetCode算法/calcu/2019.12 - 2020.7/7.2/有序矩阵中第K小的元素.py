from typing import List
import heapq

class Solution:
    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
        # n = len(matrix)
        # pq = [(matrix[i][0], i, 0) for i in range(n)]
        # heapq.heapify(pq)

        # ret = 0
        # for i in range(k - 1):
        #     num, x, y = heapq.heappop(pq)
        #     if y != n - 1:
        #         heapq.heappush(pq, (matrix[x][y + 1], x, y + 1))
        
        # return heapq.heappop(pq)[0]
        n = len(matrix)

        def check(mid) :
            num = 0
            i, j = n - 1, 0
            while i >= 0 and j < n :
                if matrix[i][j] <= mid :
                    num += i + 1
                    j += 1
                else :
                    i -= 1
            return num >= k
        l, r = matrix[0][0], matrix[-1][-1]
        while l < r :
            mid = (l + r) // 2
            if check(mid) :
                r = mid
            else :
                l = mid + 1
        return l
            

solute = Solution()
print(solute.kthSmallest([
    [1,  5,  9],
    [10, 11, 13],
    [12, 13, 15]
], 8))
