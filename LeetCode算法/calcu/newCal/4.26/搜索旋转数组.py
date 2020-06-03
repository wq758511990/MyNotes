class Solution:
    def search(self, nums: list, target: int) -> int:
        # n = len(nums)
        # if n == 0:
        #     return -1
        # l = 0
        # r = n - 1
        # while l < r:
        #     mid = (l + r) // 2
        #     if nums[l] == target:
        #         return l
        #     if nums[mid] == target:
        #         return mid
        #     if nums[r] == target:
        #         return r

        #     # 左边有序
        #     if nums[l] < nums[mid]:
        #         if nums[l] < target < nums[mid]:
        #             r = mid
        #         else:
        #             l = mid + 1

        #     # 右边有序
        #     else:
        #         if nums[r] > target > nums[mid]:
        #             l = mid + 1
        #         else:
        #             r = mid

        # return -1

        n = len(nums)
        if n == 0:
            return -1
        l = 0
        r = n - 1
        while l <= r:
            mid = (l + r) // 2
            if nums[mid] == target: return mid
            # 左边有序
            if nums[l] <= nums[mid]:
                # 若target在左边有序段中，直接二分即可
                if nums[l] <= target < nums[mid]: r = mid - 1
                # target不在有序段，让l= mid + 1
                else: l = mid + 1

            # 非左边有序
            else:
                # target 在右边有序段中
                if nums[r] >= target > nums[mid]: l = mid + 1
                # target 不在右边
                else: r = mid - 1

        return -1

solute = Solution()
print(solute.search([1, 3],
                    1))
