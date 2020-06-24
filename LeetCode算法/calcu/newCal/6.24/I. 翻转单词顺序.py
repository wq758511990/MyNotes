import re
class Solution:
    def reverseWords(self, s: str) -> str:
        tmp = re.sub(r'\s+', ' ', s).strip()
        res = tmp.split(' ')
        res.reverse()
        return ' '.join(res)


solute = Solution()
print(solute.reverseWords("  hello world!  "))