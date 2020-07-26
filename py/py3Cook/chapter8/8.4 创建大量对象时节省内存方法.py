# 对于主要是用来当成简单的数据结构的类而言，你可以通过给类添加 __slots__
# 属性来极大的减少实例所占的内存。

# 使用 slots 一个不好的地方就是我们不能再给实例添加新的属性了，只能使用在
# __slots__ 中定义的那些属性名。

# 定义了 slots 后的类不再支
# 持一些普通类特性了，比如多继承。大多数情况下，你应该只在那些经常被使用到的用
# 作数据结构的类上定义 slots (比如在程序中需要创建某个类的几百万个实例对象)。

class Date :
    __slots__ = ['year', 'month', 'day']
    def __init__(self, year, month, day):
        self.year = year
        self.month = month
        self.day = day

    