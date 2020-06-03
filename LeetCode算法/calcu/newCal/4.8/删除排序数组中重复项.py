class Solution:
    def removeDuplicates(self, nums: int) -> int:
        # idx = 0
        # ln = len(nums)
        # if ln <= 2 :
        #     return ln
        # while idx < ln :
        #     if idx >= 2 and nums[idx] == nums[idx - 2]:
        #         nums.pop(idx)
        #         ln -= 1
        #     else :
        #         idx += 1
        # print(nums)
        # return ln

        i = 0
        for e in nums:
            if i < 2 or e != nums[i - 2]:
                nums[i] = e
                i += 1

        return i


solute = Solution()
print(solute.removeDuplicates([0,0,1,1,1,1,2,3,3]))