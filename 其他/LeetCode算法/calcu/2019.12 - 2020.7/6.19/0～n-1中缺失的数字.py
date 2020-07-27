class Solution:
    def missingNumber(self, nums: list) -> int:
        l, r = 0, len(nums) - 1
        while l <= r:
            mid = (l + r) // 2
            if nums[mid] == mid:
                l = mid + 1
            else:
                r = mid - 1
        return l


solute = Solution()
print(solute.missingNumber([0, 1, 3]))
