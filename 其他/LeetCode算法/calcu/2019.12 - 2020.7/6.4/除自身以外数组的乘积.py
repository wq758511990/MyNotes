class Solution:
    def productExceptSelf(self, nums: list) -> list:
        # ln = len(nums)
        # if ln == 0: return []
        # lmultis, rmultis, res = [1] * ln, [1] * ln, [0] * ln
        # for i in range(1, ln) :
        #     lmultis[i] = lmultis[i - 1] * nums[i - 1]
        # for j in range(ln - 2, -1, -1) :
        #     rmultis[j] = rmultis[j + 1] * nums[j + 1]
        # for k in range(ln) :
        #     res[k] = lmultis[k] * rmultis[k] 
        # return res


        length = len(nums)
        answer = [0]*length

        answer[0] = 1
        for i in range(1, length):
            answer[i] = nums[i - 1] * answer[i - 1]

        R = 1
        for i in reversed(range(length)):
            answer[i] = answer[i] * R
            R *= nums[i]
        
        return answer

solute = Solution()
print(solute.productExceptSelf([1,2,3,4]))