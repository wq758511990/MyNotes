class Solution:
    def findRepeatNumber(self, nums: list) -> int:
      tarDict = {}
      for num in nums :
        if num in tarDict :
          return num
        else :
          tarDict[num] = 1

  
solute = Solution()
print(solute.findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))