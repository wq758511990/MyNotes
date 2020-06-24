class Solution:
    def decodeString(self, s: str) -> str:
        stack, res, multi = [], '', 0
        for c in s :
            if c == '[' :
                stack.append((multi, res))
                multi, res = 0, ''
            elif c == ']' :
                cur_multi, last_res = stack.pop()
                res = last_res + cur_multi * res
            elif '0' <= c <= '9' :
                multi = multi * 10 + int(c)
            else :
                res += c
        
        return res




solute = Solution()
print(solute.decodeString('3[a]2[bc]'))