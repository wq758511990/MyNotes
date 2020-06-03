# str1 = '123'
# res = str1.find('4')
# print(res)
# str2 = 'yeah, but no, but yeah, but no, but yeah'
# import re
# res = re.split(r'[,|\s]\s*', str2)
# res2 = re.split(r'([,|\s]\s*)', str2)
# print(res)
# print(res2)

import re
dataMatch = re.compile(r'(\d+)/(\d+)/(\d+)') # 这样可以将dataMatch 重复匹配 re.compile 将匹配对象赋给dataMatch
datepat = re.compile(r'(\d+)/(\d+)/(\d+)')
# 捕获对象时可以用()去分组，这样匹配到的时候更容易处理
str3 = '2019/11/22'
m = datepat.match(str3)
mData = m.groups()
print() # 可以获取到每个()内的分组
str4 = '2019/33/44 5443/77/88'
n = datepat.findall(str4)
print(n)
for y, m, d in n :
    print('{}-{}-{}'.format(y, m, d))

year, month, day = mData
print('{}-{}-{}'.format(year, month, day))