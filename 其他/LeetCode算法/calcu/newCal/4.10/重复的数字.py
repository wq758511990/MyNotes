class Solution:
    def findRepeatNumber(self, nums: list) -> int:
        
        map1 = {}
        for x in nums :
            if x not in map1 :
                map1[x] = 1
            else :
                return x


solute = Solution()
print(solute.findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))