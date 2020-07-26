class Solution:
    def maxProduct(self, nums: list) -> int:
        # maxF, minF, ans = nums[0], nums[0], nums[0]
        # for i in range(1, len(nums)):
        #     mx = maxF
        #     mn = minF
        #     maxF = max(mx * nums[i], max(nums[i], mn * nums[i]))
        #     minF = min(mn * nums[i], min(nums[i], mx * nums[i]))
        #     ans = max(maxF, ans)
        # return ans
        maxF = [0 for _ in range(len(nums))]
        minF = [0 for _ in range(len(nums))]
        maxF[0] = nums[0]
        minF[0] = nums[0]
        for i in range(1, len(nums)) :
            maxF[i] = max(maxF[i - 1] * nums[i], minF[i - 1] * nums[i], nums[i])
            minF[i] = min(maxF[i - 1] * nums[i], minF[i - 1] * nums[i], nums[i])
        return max(maxF)
        

solute = Solution()
print(solute.maxProduct([-2,3,-4]))
