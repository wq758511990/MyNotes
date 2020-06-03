class Solution:
    def canJump(self, nums: list) -> bool:
        if not 0 in nums : return True
        lspos = len(nums) - 1
        for i in range(lspos, -1, -1) :
            if i + nums[i] >= lspos : lspos = i

        return lspos == 0

solute = Solution()
print(solute.canJump([3,2,1,0,4]))