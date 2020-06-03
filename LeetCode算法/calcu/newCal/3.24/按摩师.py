class Solution:
    def massage(self, nums: list) -> int:
        if not nums :
            return 0
        
        dp0, dp1 = 0, 0
        ln = len(nums)
        for i in range(ln) :
            tdp0 = max(dp0, dp1)
            tdp1 = dp0 + nums[i]
            
            dp0 = tdp0
            dp1 = tdp1
        
        return max(dp0, dp1)

        # last, now = 0, 0
        # for num in nums :
        #     last, now = now, max(last + num, now)
        # return now

solute = Solution()
print(solute.massage([2,1,4,5,3,1,1,3]))