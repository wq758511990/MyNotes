class Solution:
    def hammingWeight(self, n: int) -> int:
        # return bin(n)[2:].count('1')
        res = 0
        while n :
            res += n & 1
            n >>= 1
        return res

solute = Solution()
print(solute.hammingWeight(9))