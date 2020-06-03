class Solution:
    def permuteUnique(self, nums: list) -> list:
        # set 去重转换 很慢
        # ln = len(nums)
        # if ln == 0 :
        #     return []
        # res = set()
        # def backtrack(nums, tmp) :
        #     if not nums :
        #         res.add(tuple(tmp))
        #     for i in range(len(nums)) :
        #         # if len(nums) > 1 and nums[i] == nums[i - 1] :
        #         #     break 
        #         backtrack(nums[:i] + nums[i + 1:], tmp + [nums[i]])
        # backtrack(nums, [])
        # return [list(item) for item in res]

        ln = len(nums)
        if ln == 0 :
            return []
        res = []
        def backtrack(nums, tmp) :
            if not nums :
                res.append(tmp)
            for i in range(len(nums)) :
                if i > 0 and nums[i] == nums[i - 1] :
                    continue
                backtrack(nums[:i] + nums[i + 1:], tmp + [nums[i]])
        backtrack(nums, [])
        return res


solute = Solution()
print(solute.permuteUnique([1, 1, 2]))