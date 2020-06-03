def avg(first, *rest):  # 数接受任意数量的位置参数，可以使用一个 * 参数。
    print(first, rest)
    return(first + sum(rest))


def make_element(name, value, **attr): # 为了接受任意数量的关键字参数，使用一个以 ** 开头的参数
    pass

def anyargs(*args, **attr) : # 同时接受任意数量的位置参数和关键字参数，可以同时使用 * 和 **。
    pass

print(avg(1, 2, 3, 4, 5))
print(make_element('item', 'Albatross', size='large', quantity=6)) # size, quantity 即为关键字参数


# 一个 * 参数只能出现在函数定义中最后一个位置参数后面，
# 而**参数只能出现在最后一个参数。