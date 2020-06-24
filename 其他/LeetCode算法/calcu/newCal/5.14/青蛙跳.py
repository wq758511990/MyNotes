class Solution:
    def numWays(self, n: int) -> int:
        if n == 0: return 1
        if n <= 3: return n

        a = 1
        b = 2
        c = 3
        while c <= n :
            res = a + b
            a = b
            b = res
            c += 1
        return res % 1000000007

solute = Solution()
print(solute.numWays(0))