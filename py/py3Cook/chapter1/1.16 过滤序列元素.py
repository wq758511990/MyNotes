# mylist = [1, 4, -5, 10, -7, 2, 3, -1]
# print([x for x in mylist if x > 0])

values = ['1', '2', '-3', '-', '4', 'N/A', '5']


def is_int(val):
    try:
        x = int(val)
        return True
    except ValueError:
        return False


ivals = list(filter(is_int, values))
# filter 过滤器(过滤函数, 需要过滤的值)
# filter() 函数创建了一个迭代器，因此如果你想得到一个列表的话，就得像示例那样使用 list() 去转换。
print(ivals)

# 另外一个值得关注的过滤工具就是 itertools.compress() ，它以一个 iterable
# 对象和一个相对应的 Boolean 选择器序列作为输入参数。然后输出 iterable 对象中对
# 应选择器为 True 的元素。

addresses = ['5412 N CLARK', '5148 N CLARK', '5800 E 58TH', '2122 N CLARK',
             '5645 N RAVENSWOOD', '1060 W ADDISON', '4801 N BROADWAY', '1039 W GRANVILLE', ]
counts = [0, 3, 10, 4, 1, 7, 6, 1]
from itertools import compress
more5 = [n > 5 for n in counts]
print(more5)
# more5 中 只有 3 6 7为 True 故而值有这三个值被输出了 即address[2] address[5] address[6]
print(list(compress(addresses, more5)))