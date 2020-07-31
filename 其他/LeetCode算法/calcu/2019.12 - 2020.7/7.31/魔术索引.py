from typing import List
class Solution:
    def findMagicIndex(self, nums: List[int]) -> int:
        for i, v in enumerate(nums) :
            if v == i: return i
        return -1

solute = Solution()
print(solute.findMagicIndex([0, 2, 3, 4, 5]))