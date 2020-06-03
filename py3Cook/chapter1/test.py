# data = [ 'ACME', 50, 91.1, (2012, 12, 21) ]
# name, age, goods, (year, month, day) = data
# # print(name, goods, year, month, day)

# # 这种解压赋值可以用在任何可迭代对象上面，而不仅仅是列表或者元组。包括字符串，文件对象，迭代器和生成器。

# # _, shares, price, _ = data # 可以用_, 来占位，筛选掉不需要的值
# # print(shares, price)
# # 可以用*变量，来存储某一段的值
# _, *shares, _ = data # shares 是list类型

# record = ('ACME', 50, 123.45, (12, 18, 2012))
# name, *_, (*_, year) = record
# print(name, year)

# # print(shares)

# from collections import deque
# q = deque()
# # deque() 
# # 1、append()
# # 2、appenddleft()
# # 3、pop()
# # 4、popleft()
# q.appendleft(3)
# q.appendleft(2)
# q.append(1)
# print(q)
