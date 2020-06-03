def longestPalindrome(s) :
    # m = len(s)
    # max_len = 1
    # start_index = 0
    # if m < 2:
    #     return s
    # dp = [[False for _ in range(m)] for _ in range(m)]
    # for j in range(1,m):
    #     for i in range(0,j):
    #         if s[i]  == s[j]:
    #             if j-i < 3:
    #                 dp[i][j] = True
    #             else:
    #                 dp[i][j] = dp[i+1][j-1]
    #         else:
    #             dp[i][j] = False
    #         if dp[i][j]:
    #             cur_len = j-i+1
    #             if cur_len > max_len:
    #                 max_len = cur_len
    #                 start_index = i
    # return s[start_index:start_index+max_len]

    # if len(s) <= 1 :
    #     return s
    # res = ''
    # temp = ''
    # lenS = len(s) + 1
    # for i in range(0, lenS) :
    #     for j in range(i + 1, lenS) :
    #         temp = s[i:j]
    #         if temp == temp[::-1] :
    #             res = res if len(res) > len(temp) else temp
    # return res

    start_index = 0
    max_len = 1
    m = len(s)
    if m < 2 :
        return s
    dp = [[False for _ in range(m)] for _ in range(m)]
    for j in range(1, m) :
        for i in range(0, j) :
            if s[i] == s[j] :
                if j - i < 3 :
                    dp[i][j] = True
                else :
                    dp[i][j] = dp[i + 1][j - 1]
            else :
                dp[i][j] = False
            if dp[i][j] :
                cur_len = j - i + 1
                if cur_len > max_len :
                    max_len = cur_len
                    start_index = i
    return s[start_index:start_index + max_len]


print(longestPalindrome('baab'))