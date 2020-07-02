class Solution:
    def longestPalindrome(self, s) :
        setCount = set()
        count = 0
        for x in s :
            if x in setCount :
                count += 2
                setCount.remove(x)
            else :
                setCount.add(x)

        return count + 1 if count < len(s) else count


solute = Solution()
print(solute.longestPalindrome('abccccdd'))