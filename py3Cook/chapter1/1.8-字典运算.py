prices = {'ACME': 45.23, 'AAPL': 612.78, 'IBM': 205.55, 'HPQ': 37.20, 'FB': 10.75
          }

# print(list(prices.values()))
# print(prices.keys())
# zipNum = zip(prices.values(), prices.keys())
# print(list(zipNum))
# print(list(min(zipNum)))
# print(list(max(zipNum)))
# min(zipNum) 之后 zipNum变为[]。。。？

#  需要注意的是 zip() 函数创建的是一个只能访问一次的迭代器。故而有上面的报错  max() arg is an empty sequence


# print(max(zip(prices.values(), prices.keys())))
# print(max(zip(prices.values(), prices.keys())))
# print(sorted(zip(prices.values(), prices.keys())))

minItem = min(prices, key=lambda x: prices[x])
minNum = prices[min(prices, key=lambda x: prices[x])]
print(minItem, minNum)

