from typing import List
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        size = len(prices)
        if not size: return 0
        maxProfit = 0
        minNum = prices[0]
        for x in prices:
            maxProfit = maxProfit if maxProfit > x - minNum else x - minNum
            minNum = minNum if minNum < x else x
        return maxProfit

solute = Solution()
print(solute.maxProfit([7,1,5,3,6,4]))