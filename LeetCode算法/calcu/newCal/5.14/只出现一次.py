class Solution:
    def singleNumber(self, nums: list) -> int:
        res = 0
        for num in nums :
            res ^= num
        return res

solute = Solution()
print(solute.singleNumber([2, 2, 1, 1, 0]))