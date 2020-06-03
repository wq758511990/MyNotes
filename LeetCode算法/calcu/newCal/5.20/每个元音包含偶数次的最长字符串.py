class Solution:
    def findTheLongestSubstring(self, s: str) -> int:
        dp = [-float('inf')]*32
        dp[0] = -1
        pattern = 0
        res = 0
        for i in range(len(s)):
            if s[i] == 'a':
                pattern ^= (1 << 0)
            elif s[i] == 'e':
                pattern ^= (1 << 1)
            elif s[i] == 'i':
                pattern ^= (1 << 2)
            elif s[i] == 'o':
                pattern ^= (1 << 3)
            elif s[i] == 'u':
                pattern ^= (1 << 4)
            if dp[pattern] != -float('inf'):
                cur_len = i-dp[pattern]
                res = max(res, cur_len)
            else:
                    dp[pattern] = i
        return res


solute = Solution()
print(solute.findTheLongestSubstring('eleetminicoworoep'))
