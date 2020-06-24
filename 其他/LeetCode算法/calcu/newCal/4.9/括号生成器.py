class Solution:
    def generateParenthesis(self, n: int) -> str:
        res = []

        def handler(res, l, r, tstr, n) :
            if l > n or r > n or r > l: # 用最后这个 r > l 控制不会出现 )( 的情况，左括号必须先出现，才能有右括号
                return
            if l == n and r == n :
                res.append(tstr)
                return
            
            handler(res, l + 1, r, tstr + '(', n)
            handler(res, l, r + 1, tstr + ')', n)

        handler(res, 0, 0, '', n)
        return res

                


solute = Solution()
print(solute.generateParenthesis(2))