from itertools import permutations, combinations,combinations_with_replacement
items = ['a', 'b', 'c']
perList = permutations(items, 2) # 得到所有排列,即全排列
# print(list(perList))
comList = combinations(items, 2) # 得到所有组合
print(list(comList))
# for c in combinations_with_replacement(items, 3) :
    # print(c)