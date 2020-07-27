import collections
class Solution:
    def subarraySum(self, nums: list, k: int) -> int:
  
        num_times = collections.defaultdict(int)
        num_times[0] = 1  
        cur_sum = 0 
        res = 0
        for i in range(len(nums)):
            cur_sum += nums[i]  
            if cur_sum - k in num_times: 
                res += num_times[cur_sum - k]

            num_times[cur_sum] += 1
        return res

    

solute = Solution()
print(solute.subarraySum([1, 1, 1], 2))