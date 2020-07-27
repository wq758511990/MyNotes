from itertools import chain
a = [1, 2, 3, 4]
b = ['a', 'b', 'c', 'd']
for x in chain(a, b) : # 遍历不同列表中的所有元素
    print(x)

# 歪瑞古德