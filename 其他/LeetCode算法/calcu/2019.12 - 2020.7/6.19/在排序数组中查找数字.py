class Solution:
    def search(self, nums: [int], target: int) -> int:
        # i, j = 0, len(nums) - 1
        # while i <= j :
        #     m = (i + j) // 2
        #     if nums[m] <= target : i = m + 1
        #     else: j = m - 1
        # right = i

        # if j >= 0 and nums[j] != target: return 0

        # i = 0
        # while i <= j :
        #     m = (i + j) // 2
        #     if nums[m] < target : i = m + 1
        #     else: j = m - 1
        # left = j

        # return right - left - 1


        def helper(tar):
            i, j = 0, len(nums) - 1
            while i <= j:
                m = (i + j) // 2
                if nums[m] <= tar: i = m + 1
                else: j = m - 1
            return i
        return helper(target) - helper(target - 1)

solute = Solution()
print(solute.search([5, 6, 6, 8, 8, 10], 8))
