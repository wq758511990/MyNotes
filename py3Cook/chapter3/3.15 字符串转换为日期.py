from datetime import datetime
text = '2020-3-10'
y = datetime.strptime(text, '%Y-%m-%d') # %Y 代表 4 位数年份，%m代表两位数月份
print(y)
z = datetime.now()
diff = z - y
print(diff)
testTime = datetime.datetime(2012, 9, 23, 21, 37, 4, 177393)
print(testTime)