import copy
class Solution:
    def subsetsWithDup(self, nums: int) -> int:
        # res = []
        # nums.sort()
        # def handler(nums) :
        #     if len(nums) == 0 :
        #         return [[]]
            
        #     prevList = handler(nums[:-1])
        #     newList = [tmp + [nums[-1]] for tmp in prevList]
            
        #     return prevList + newList
        
        # res = handler(nums)

        # return res

        if not nums: return [[]]
        nums.sort()
        ln = len(nums)
        res = [[]]
        cur = []
        for i in range(ln) :
            if i > 0 and nums[i] == nums[i - 1] :
                cur = [tmp + [nums[i]] for tmp in cur]
            else :
                cur = [tmp + [nums[i]] for tmp in res]

            res += cur
        
        return res

        # res = []
        # n = len(nums)
        # nums.sort()
        # def helper(idx, tmp):
        #     res.append(tmp)
        #     for i in range(idx, n):
        #         if i > idx and nums[i] == nums[i-1]:
        #             continue
        #         helper(i+1, tmp + [nums[i]])
        # helper(0, [])
        # return res


solute = Solution()
print(solute.subsetsWithDup([2, 1, 2]))