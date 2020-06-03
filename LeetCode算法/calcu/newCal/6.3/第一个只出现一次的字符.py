class Solution:
    def firstUniqChar(self, s: str) -> str:
        # 字典记录次数，第二次遍历字典返回次数为1的字符
        # charDic = {}
        # for c in s :
        #     if c in charDic :
        #         charDic[c] += 1
        #     else :
        #         charDic[c] = 1

        # for k, v in charDic.items() :
        #     if v == 1 :
        #         return k
        # return ' '

        # 遍历两次字符串，重复出现的标记为false，可以直接判断，节省代码
        dic = {}

        for c in s :
            dic[c] = not (c in dic)
        for c in s :
            if dic[c]: return c
        return ' '
solute = Solution()
print(solute.firstUniqChar('abaccdeff'))