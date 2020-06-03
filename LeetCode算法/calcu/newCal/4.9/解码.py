class Solution:
    def numDecodings(self, s: str) -> int:
        if not s or s[0] == '0' : return 0
        ls = len(s)
        dp = [0] * (ls + 1)
        dp[0], dp[1] = 1, 1
        for i in range(1, ls) :
            if s[i] == '0' :
                if s[i - 1] == '1' or s[i - 1] == '2' :
                    dp[i + 1] = dp[i - 1]
                else :
                    return 0
            else :
                if s[i - 1] == '1' or (s[i - 1] == '2' and '0' <= s[i] <= '6') :
                    dp[i + 1] = dp[i - 1] + dp[i]
                else :
                    dp[i + 1] = dp[i]

        return dp[-1]


solute = Solution()
print(solute.numDecodings('123'))