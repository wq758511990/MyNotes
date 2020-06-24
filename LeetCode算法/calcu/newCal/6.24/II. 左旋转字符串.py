class Solution:
    def reverseLeftWords(self, s: str, n: int) -> str:
        return s[n:] + s[:n]

solute = Solution()
print(solute.reverseLeftWords('abcdefg', 2))