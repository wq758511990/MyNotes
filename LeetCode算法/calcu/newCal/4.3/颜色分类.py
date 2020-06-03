class Solution:
    def sortColors(self, nums: list) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        # ln = len(nums)
        # idx = 0
        # count2 = nums.count(2)
        # while idx < ln - count2 :

        #     if nums[idx] == 0:
        #         nums.insert(0, nums[idx])
        #         nums.pop(idx + 1)

        #     elif nums[idx] == 2:
        #         nums.append(nums[idx])
        #         nums.pop(idx)
        #         idx -= 1

        #     idx += 1

        # return nums

        start = 0
        end = len(nums) - 1
        cur = 0
        while cur <= end:
            if nums[cur] == 0:
                nums[start], nums[cur] = nums[cur], nums[start]
                start += 1
                cur += 1

            elif nums[cur] == 2:
                nums[end], nums[cur] = nums[cur], nums[end]
                end -= 1

            else:
                cur += 1

        return nums


solute = Solution()
print(solute.sortColors([2, 0, 1, 2]))
