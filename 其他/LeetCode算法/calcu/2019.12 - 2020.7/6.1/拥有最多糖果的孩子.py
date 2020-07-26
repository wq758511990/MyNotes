class Solution:
    def kidsWithCandies(self, candies: list, extraCandies: int) -> list:
        res = []
        maxNum = max(candies)
        for candy in candies :
            if candy + extraCandies >= maxNum :
                res.append(True)
            else:
                res.append(False)
        return res

solute = Solution()
print(solute.kidsWithCandies([4,2,1,1,2], 1))