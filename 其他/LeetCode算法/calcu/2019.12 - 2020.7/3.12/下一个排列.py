class Solution:
    def nextPermutation(self, nums):
        nl = len(nums)
        if nl<2:
            return nums

        for k in range(nl-1, -1, -1):
            for m in range(nl-1, k, -1):
                if nums[k]<nums[m]:
                    nums[k], nums[m] = nums[m], nums[k]
                    nums[k+1::] = nums[nl-1:k:-1]
                    return nums
        nums = nums.reverse()
        return nums


solute = Solution()
print(solute.nextPermutation([3, 1, 4, 2]))