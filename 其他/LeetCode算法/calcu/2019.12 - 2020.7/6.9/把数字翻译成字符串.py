class Solution:
    def translateNum(self, num: int) -> int:
        strNum = str(num)
        size = len(strNum)
        dp = [1] * (size + 1)
        for i in range(2, size + 1) :
            tmpStr = strNum[i - 2: i]
            if 10 <= int(tmpStr) <= 25 :
                dp[i] = dp[i - 2] + dp[i - 1]
            else :
                dp[i] = dp[i - 1]
        return dp

solute = Solution()
print(solute.translateNum(12258))