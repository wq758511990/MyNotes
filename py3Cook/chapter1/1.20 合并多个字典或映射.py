from collections import ChainMap
a = {'x': 1, 'z': 3 } 
b = {'y': 2, 'z': 4 }
c = ChainMap(a, b)
print(list(c.values()))

#如果出现重复键，那么第一次出现的映射值会被返回。因此，例子程序中的 c['z']
#总是会返回字典 a 中对应的值，而不是 b 中对应的值。
#对于字典的更新或删除操作总是影响的是列表中第一个字典。比如：