from collections import defaultdict

# d = defaultdict(list) # 默认字典中的key的值为list类型
# d['a'].append(1)
# d['a'].append(2)
# print(d)

d = defaultdict(set)  # 默认字典中的key值为set类型
d['a'].add(1)
d['a'].add(1)
d['a'].add(2)

print(d)

# 若不适用defaultdict 则可能要写如下代码
# d = {}
# for key, value in pairs:
#     if key not in d:
#         d[key] = []
#     d[key].append(value)

# 使用defaultdict 则只需
# d = defaultdict(list)
# for key, value in paris :
#     d[key] = value
