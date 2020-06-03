class Solution:
    def translateNum(self, num: int) -> int:   
        # 数字转换为字符串
        strNum = str(num)
        # 获取字符串长度
        size = len(strNum)
        # 状态数组
        dp = [0] * (size + 1)
        # 初始化dp[0], dp[1]为1，
        dp[0], dp[1] = 1, 1
        for i in range(2, size + 1):
            # 遍历剩余的字符串，获取当前字符和前一个字符组成的新字符，判断是否有效
            # 有效的话，则dp[i] 为 dp[i - 2] + dp[i - 1]，否则dp[i] = dp[i - 1]
            tmpstr = strNum[i - 2: i]
            dp[i] = dp[i - 2] + dp[i - 1] if int(tmpstr) <= 25 and tmpstr[0] != '0' else dp[i - 1] # 这里要注意新的字符串不能以0开头，否则无效
            
        return dp[-1]


solute = Solution()
print(solute.translateNum(12258))
