class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        i, j = 0, 0
        n, m = len(s), len(t)
        while i < n and j < m :
            if s[i] == t[j] :
                i += 1
            j += 1
        return True if i == n else False

solute = Solution()
print(solute.isSubsequence("abc",
                           "ahbgdc"))
