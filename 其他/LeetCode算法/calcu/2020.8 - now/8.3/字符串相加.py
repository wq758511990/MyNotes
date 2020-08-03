class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        i, j, add = len(num1) - 1, len(num2) - 1, 0
        ans = ''
        while i >= 0 or j >= 0 :
            x = int(num1[i]) if i >= 0 else 0
            y = int(num2[j]) if j >= 0 else 0
            tmp = x + y + add
            left = tmp % 10
            add = tmp // 10
            ans = str(left) + ans
            i -= 1
            j -= 1
        return '1' + ans if add else ans

solute = Solution()
print(solute.addStrings('180', '123'))