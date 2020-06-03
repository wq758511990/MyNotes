class Solution:
    def myAtoi(self, str: str) -> int:
        flag, ans = 0, []
        for c in str :
            if c == ' ' and not flag and not ans :
                continue
            elif c in '+-' and not flag and not ans :
                flag = 1 if c == '+' else -1
            elif c in '0123456789' :
                ans.append(c)
            else :
                break

        if not ans :
            return 0

        res = (-1 if flag == -1 else 1) * int(''.join(ans))
        return (-2 ** 31 if res < -2 ** 31 else (2 ** 31) - 1 if res > (2 ** 31) - 1 else res)


solute = Solution()
print(solute.myAtoi("  -2"))