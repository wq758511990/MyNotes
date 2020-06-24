import re
class Solution:
    def replaceSpace(self, s: str) -> str:
        res = re.sub(r'\s', '\%20', s)
        return res


solute = Solution()
print(solute.replaceSpace('    '))