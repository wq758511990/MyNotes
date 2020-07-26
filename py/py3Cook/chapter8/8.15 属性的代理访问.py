class A:
    def spam(self, value):
        return value + 10

    def foo(self, value):
        pass

class B:
    def __init__(self):
        self._a = A()

    def spam(self, value):
        self._a.spam(value)

    def foo(self, value):
        self._a.foo(value)


# 仅仅只有两个方法需要代理 如此即可
# 若有多个方法需要代理

class B2:
    def __init__(self):
        self._a = A()

    def bar(self):
        pass

    def __getattr__(self, name):  # B2中没有的方法会执行这个方法， 适用于多个方法的代理
        return getattr(self._a, name)


class A4:

    def spam(self, x):
        print('A.spam', x)


    def foo(self):
        print('A.foo')


class B4(A4):

    def spam(self, x):
        print('B.spam')
        super().spam(x)

    def bar(self):
        print('B.bar')

# b = B2()
# b.bar()
# print(b.spam(1))


b2 = B4()
print(b2.spam(2))
