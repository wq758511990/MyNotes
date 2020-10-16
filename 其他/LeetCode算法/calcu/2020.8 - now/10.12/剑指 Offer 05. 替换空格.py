class Solution:
    def replaceSpace(self, s: str) -> str:
        return s.replace(' ', '%20')
        # ans = ''
        # for c in s :
        #     ans += c if c != ' ' else '%20'
        # return ans

solute = Solution()
print(solute.replaceSpace('We are happy.'))
