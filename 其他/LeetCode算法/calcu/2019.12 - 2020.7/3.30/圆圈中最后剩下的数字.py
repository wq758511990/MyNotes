class Solution:
    def lastRemaining(self, n: int, m: int) -> int:
        # if n == 1 :
        #     return 0
        # curIndex = 0
        # destArr = [i for i in range(n)]

        # for i in range(n) :
        #     curlen = len(destArr)
        #     curIndex = ((curIndex + m) % curlen) - 1
        #     curIndex = curIndex if curIndex >= 0 else curlen - 1
        #     if curlen > 1 :
        #         del(destArr[curIndex])
        # return destArr

        ans = 0
        for i in range(2, n + 1) :
            ans = (ans + m) % i
        return ans


solute = Solution()
print(solute.lastRemaining(10, 17))