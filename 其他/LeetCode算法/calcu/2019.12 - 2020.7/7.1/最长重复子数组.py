from typing import List
class Solution:
    # dp
    def findLength(self, A: List[int], B: List[int]) -> int:
        n, m = len(A), len(B)
        dp = [[0] * (m + 1) for _ in range(n + 1)]
        ans = 0
        for i in range(n - 1, -1, -1):
            for j in range(m - 1, -1, -1):
                dp[i][j] = dp[i + 1][j + 1] + 1 if A[i] == B[j] else 0
                ans = max(ans, dp[i][j])
        return ans
    # 滑动窗口
    # def findLength(self, A: List[int], B: List[int]) -> int:
    #     def maxLength(addA: int, addB: int, length: int) -> int:
    #         ret = k = 0
    #         for i in range(length):
    #             if A[addA + i] == B[addB + i]:
    #                 k += 1
    #                 ret = max(ret, k)
    #             else:
    #                 k = 0
    #         return ret

    #     n, m = len(A), len(B)
    #     ret = 0
    #     for i in range(n):
    #         length = min(m, n - i)
    #         ret = max(ret, maxLength(i, 0, length))
    #     for i in range(m):
    #         length = min(n, m - i)
    #         ret = max(ret, maxLength(0, i, length))
    #     return ret

solute = Solution()
print(solute.findLength([1,2,3,2,1], [3, 2, 1, 4, 7]))