from functools import reduce
class Solution:
    def singleNumbers(self, nums: list) -> list:
        # nums.sort()
        # n = len(nums)
        # idx = 0
        # while idx < n - 1:
        #     if nums[idx] == nums[idx + 1]:
        #         nums = nums[:idx] + nums[idx + 2:]
        #         n -= 2
        #     else :
        #         idx += 1
        
        # return nums

        ret = reduce(lambda x, y: x ^ y, nums)
        div = 1
        while div & ret == 0 :
            div <<= 1
        
        a, b = 0, 0
        for num in nums :
            if num & div :
                a ^= num
            else :
                b ^= num
        
        return [a, b]

solute = Solution()
print(solute.singleNumbers([1, 2, 5, 2]))
