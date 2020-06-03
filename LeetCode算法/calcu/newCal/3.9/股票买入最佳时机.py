def maxProfit(prices) :
    # 动态规划 min记录今天之前 最小买入价格 
    # max记录 今天之前最小买入的价格在今天卖出的利润
    minNum = prices[0]
    maxProf = 0
    for x in prices :
        maxProf = maxProf if maxProf > x - minNum else x - minNum
        minNum = minNum if minNum < x else x
    return maxProf


print(maxProfit([7,1,5,3,6,4]))