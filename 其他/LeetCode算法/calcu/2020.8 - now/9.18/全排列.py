class Solution:
    def permuteUnique(self, nums: list) -> list:
        ln = len(nums)
        if ln == 0:
            return []
        resArr = []
        def backTrack(nums, tmp):
            if not nums:
                resArr.append(tmp)
            for i in range(len(nums)):
                backTrack(nums[:i] + nums[i + 1:], tmp + [nums[i]])
        backTrack(nums, [])
        return resArr


solute = Solution()
print(solute.permuteUnique([1, 1, 2]))
