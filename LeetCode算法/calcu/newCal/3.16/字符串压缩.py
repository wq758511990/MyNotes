class Solution:
    def compressString(self, S):
        res = ''
        # idx = 0
        # while idx < len(S):
        #     res += S[idx]
        #     tempCount = 1
        #     while idx < len(S) - 1 and S[idx] == S[idx + 1] :
        #         tempCount += 1
        #         idx += 1
        #     idx += 1
        #     res += str(tempCount)
        # return res if len(res) < len(S) else S

        # for版本
        ls = len(S)
        cnt = 1
        for i in range(ls) :
            if i < ls - 1 and S[i] == S[i + 1] :
                cnt += 1
            else :
                res += S[i] 
                res += str(cnt)
                cnt = 1
        return res if len(res) < ls else S

                    



solute = Solution()
print(solute.compressString('aabcccccaaad'))