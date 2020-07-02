from typing import List


class Solution:
    def isStraight(self, nums: List[int]) -> bool:
        # zeroCount = nums.count(0)
        # nums.sort()
        # sliceNums = list(set(nums[zeroCount:]))
        # sliceNums.sort()
        # if sliceNums[-1] - sliceNums[0] >= 5 :
        #     return False
        # if len(sliceNums) + zeroCount != 5 :
        #     return False
        # for i in range(1, len(sliceNums)):
        #     if sliceNums[i] != sliceNums[i - 1] + 1:
        #         if zeroCount:
        #             zeroCount -= 1
        #             continue
        #         else:
        #             return False
        # return True
        repeat = set()
        ma, mi = 0, 14
        for num in nums :
            if num == 0: continue
            if num in repeat: return False
            repeat.add(num)
            ma = max(ma, num)
            mi = min(mi, num)
        return ma - mi < 5


solute = Solution()
print(solute.isStraight([10,11,0,12,6]))
