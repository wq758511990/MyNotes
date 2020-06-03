from collections import namedtuple


# 简单例子
def compute_cost(records):
    total = 0.0
    for rec in records:
        total += rec[1] * rec[2]
    return total

# 命名元组
Stock = namedtuple('Stock', ['name', 'shares', 'price'])
def compute_cost_named(records):
    total = 0.0
    for rec in records:
        s = Stock(*rec)
        total += s.shares * s.price # 这里的s.shares 即简单例子中的rec[1] s.price 即 rec[2]
    return total

# 命名元组比较类似字典，相比字典占用空间更少。。 
