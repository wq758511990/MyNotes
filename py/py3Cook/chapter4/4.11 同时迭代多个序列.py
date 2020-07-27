from itertools import zip_longest
xpts = [1, 2, 3, 4, 5]
ypts = [11, 12, 13, 14, 15]
# for x, y in zip(xpts, ypts) :
#     print(x, y)

# zip(a, b) 会生成一个可返回元组 (x, y) 的迭代器，其中 x 来自 a，y 来自 b。一
# 旦其中某个序列到底结尾，迭代宣告结束。因此迭代长度跟参数中最短序列长度一致

tx = [1, 2, 3]
ty = [4, 5, 6, 7]
for x in zip_longest(tx, ty, fillvalue=0) : # 当两个数组长度不一时，会自动补上None 或者指定补充的元素
    print(x)