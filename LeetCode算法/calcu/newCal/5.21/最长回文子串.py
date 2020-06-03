class Solution:
    def longestPalindrome(self, s: str) -> str:
        # start_index = 0
        # max_len = 1
        # m = len(s)
        # if m < 2 :
        #     return s
        # dp = [[False for _ in range(m)] for _ in range(m)]
        # for j in range(1, m) :
        #     for i in range(0, j) :
        #         if s[i] == s[j] :
        #             if j - i < 3 :
        #                 dp[i][j] = True
        #             else :
        #                 dp[i][j] = dp[i + 1][j - 1]
        #         else :
        #             dp[i][j] = False
        #         if dp[i][j] :
        #             cur_len = j - i + 1
        #             if cur_len > max_len :
        #                 max_len = cur_len
        #                 start_index = i
        # return s[start_index:start_index + max_len]

        n = len(s)
        # 记录每个可能的状态，下标表示起始和终止位置
        dp = [[False] * n for _ in range(n)]
        res = ''
        # l + 1 表示长度
        for l in range(n) :
            for i in range(n) :
                # j表示下标终止位置
                j = i + l
                # 当下标大于等于长度的时候退出循环
                if j >= n: break
                # 长度为1的时候，是回文串，即当i == j的时候
                if l == 0 :
                    dp[i][j] = True
                # 长度为2的时候，判断两个字符是否相等，
                elif l == 1 :
                    dp[i][j] = s[i] == s[j]
                # 长度大于2的时候，则根据dp[i + 1][j - 1]是否是True 且s[i]是否等于s[j]判断当前是否是回文串
                else :
                    dp[i][j] = dp[i + 1][j - 1] and s[i] == s[j]
                # 如果是回文并且长度大于res的长度，则更新res
                if dp[i][j] and l + 1 > len(res) :
                    res = s[i: j + 1]
        return res


solute = Solution()
print(solute.longestPalindrome('babad'))
