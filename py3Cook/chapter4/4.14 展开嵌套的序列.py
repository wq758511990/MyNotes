from collections.abc import Iterable
def flatten(items, ignore_types=(str, bytes)) : # 用来将字符串和字节排除在可迭代对象外，防止将它们再展开成单个的字符。
    for x in items :
        if isinstance(x, Iterable) and not isinstance(x, ignore_types):
            yield from flatten(x) # yield from 后面跟上一个其他生成器
            # 或者可以写成
            # for i in flatten(x) :
            #     yield i
        else:
            yield x

items = [1, 2, [3, 4, [5, 6]]]
for x in flatten(items) :
    print(x)