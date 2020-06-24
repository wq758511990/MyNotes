class Solution:
    def twoSum(self, nums: list, target: int) -> list:
        l, r = 0, len(nums) - 1
        while l <= r :
            s = nums[l] + nums[r]
            if s < target :
                l += 1
            elif s > target :
                r -= 1
            else :
                break
        return [nums[l], nums[r]]

solute = Solution()
print(solute.twoSum([10,26,30,31,47,60], 40))