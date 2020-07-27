class Solution:
    def strToInt(self, str: str) -> int:
        flag, res = 0, []
        for c in str :
            if c == ' ' and not flag and not res : continue
            elif c in '+-' and flag == 0 : 
                flag = 1 if c == '+' else -1
            elif c in '0123456789' :
                res.append(c)
            else :
                break
        if not res :
            return 0

        ans = (-1 if flag == -1 else 1) * int(''.join(res))
        return -2 ** 31 if ans < -2 ** 31 else (2 ** 31) - 1 if ans > (2 ** 31) - 1 else ans
solute = Solution()
print(solute.strToInt("2147483648"))