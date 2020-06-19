class Solution:
    def isPalindrome(self, s: str) -> bool:
        # resStr = ''
        # for c in s.lower() :
        #     if c.isalnum() :
        #         resStr += c
        # return resStr == resStr[::-1]

        sgood = "".join(ch.lower() for ch in s if ch.isalnum())
        n = len(sgood)
        left, right = 0, n - 1
        
        while left < right:
            if sgood[left] != sgood[right]:
                return False
            left, right = left + 1, right - 1
        return True


solute = Solution()
print(solute.isPalindrome('race a car'))