# def powerfulIntegers(x, y, bound) :
#     resList = set()
#     i = 0
#     while x ** i < bound :
#         j = 0
#         while y ** j < bound :
#             addValue = x ** i + y ** j 
#             j += 1
#             if addValue <= bound :
#                 resList.add(addValue)
#             if y == 1 :
#                 break
#         i += 1
#         if x == 1 :
#             break
#     return list(resList)

from itertools import product
from math import log
def powerfulIntegers(x, y, bound):
    res = []
    rg = int(log(max(bound, 1), min(max(x, 2), max(y, 2))))+1
    for i, j in product(range(rg), repeat=2):
        num = x ** i + y ** j
        if num <= bound:
            res.append(num)
    return list(set(res))

print(powerfulIntegers(1, 2, 10))
