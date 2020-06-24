class Solution:
    def search(self, nums, target):
        ln = len(nums)
        left = 0
        right = ln - 1
        while left <= right :
            mid = (left + right) // 2
            if nums[mid] == target : return mid
            if nums[left] == target : return left
            if nums[right] == target : return right

            if nums[mid] < nums[right] :
                if nums[mid] < target and nums[right] >= target : left = mid + 1
                else : right = mid - 1
            else :
                if nums[left] <= target and nums[mid] > target : right = mid - 1
                else : left = mid + 1

            # if nums[left] < nums[mid] :
            #     if nums[left] <= target < nums[mid] :
            #         right = mid - 1
            #     else :
            #         left = mid + 1
            
            # else :
            #     if nums[mid] < target <= nums[right] :
            #         left = mid + 1
            #     else :
            #         right = mid - 1

        return -1



solute = Solution()
print(solute.search([4,5,6,7,0,1,2], 2))