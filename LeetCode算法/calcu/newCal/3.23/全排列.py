import itertools
class Solution:
    def permute(self, nums: list) -> list:
        # 库函数
        # return list(itertools.permutations(nums))
        ln = len(nums)
        if ln == 0 :
            return []
        res = []
        def backtrack(nums, tmp) :
            if not nums :
                res.append(tmp)
            for i in range(len(nums)) :
                backtrack(nums[:i] + nums[i+1:], tmp + [nums[i]])
        backtrack(nums, [])
        return res

        
        
        

solute = Solution()
print(solute.permute([1, 2, 3]))