class Solution:
    def canJump(self, nums: list) -> bool:
        # if not 0 in nums :
        #     return True
        # if len(nums) == 1 :
        #     return True
        # all_idx = [key for key, value in enumerate(nums) if value == 0]
        # ln = len(nums)
        
        # idx = 0
        # curr_all_idx = 0
        # while idx < ln :
        #     if curr_all_idx == len(all_idx) : return True

        #     if idx == all_idx[curr_all_idx] and idx != ln - 1:
        #         return False
        #     if idx + nums[idx] >= ln - 1 :
        #         return True
        #     if nums[idx] <= all_idx[curr_all_idx] - idx :
        #         idx += 1
        #         continue
        #     else :
        #         leftPos = idx + nums[idx] - all_idx[curr_all_idx]
        #         for i in range(all_idx[curr_all_idx] + 1, all_idx[curr_all_idx] + leftPos + 1) :
        #             if nums[i] == 0 :
        #                 curr_all_idx += 1
        #                 continue
        #             else :
        #                 if nums[i] >= nums[i - 1] - 1 :
        #                     idx = i
        #                     curr_all_idx += 1
        # return True

        lastPos = len(nums) - 1
        for i in range(lastPos, -1, -1) :
            if i + nums[i] >= lastPos : lastPos = i
        
        return lastPos == 0

solute = Solution()
print(solute.canJump([5,4,0,2,0,1,0,1,0]))