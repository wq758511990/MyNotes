class Pair(object) :
    def __init__(self, x, y) :
        self.x = x
        self.y = y

    def __repr__(self) :
# 格式化代码 {0.x} 对应的是第 1 个
# 参数的 x 属性。因此，在下面的函数中，0 实际上指的就是 self 本身：
        return 'Pair({0.x!r}, {0.y!r})'.format(self)  

    def __str__(self) :
        return '({0.x!s}, {0.y!s})'.format(self)

p = Pair(3, 4)
print(p)
print('p is {0!r}'.format(p))