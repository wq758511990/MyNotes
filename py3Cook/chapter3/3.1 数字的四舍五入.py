# 一般的数字进行四舍五入可直接使用内置函数round
# print(round(1.245, 2)) # 1、要进行四舍五入的数字， 2、要保留的位数
# print(round(1.5))
# print(round(2.5))

a = 1627731
print(round(a, -1))
print(round(a, -2))
print(round(a, -3))

x = 1.2345
print('value is {:0.3f}'.format(x))