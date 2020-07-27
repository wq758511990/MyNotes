class Solution:
    def search(self, nums: int, target: int) -> bool:
        ln = len(nums)
        l = 0
        r = ln - 1
        while l < r:
            mid = (l + r) // 2
            if nums[mid] == target:
                return True
            if nums[mid] == nums[l] == nums[r]:
                l += 1
                r -= 1
            elif nums[mid] >= nums[l]:
                if nums[l] <= target < nums[mid]:
                    r = mid - 1
                else:
                    l = mid + 1
            else:
                if nums[mid] < target <= nums[r]:
                    l = mid + 1
                else:
                    r = mid - 1
        return False


solute = Solution()
print(solute.search([2, 5, 6, 0, 0, 1, 2],
                    3))
