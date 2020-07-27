class Solution:
    def searchRange(self, nums, target):
        ln = len(nums)
        left = 0
        right = ln - 1
        findFlag = False
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                findFlag = True
                left = mid - 1
                right = mid + 1
                while left >= 0 and nums[left] == nums[mid] :
                    left -= 1
                while right < ln and nums[right] == nums[mid] :
                    right += 1
                break
            if target > nums[mid]:
                left = mid + 1
            else:
                right = mid - 1
        return [left + 1, right - 1] if findFlag else [-1, -1]


solute = Solution()
print(solute.searchRange([1], 1))
