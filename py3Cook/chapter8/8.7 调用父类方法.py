class A:
    def spam(self):
        print('A.spam')

class B(A):
    def __init__(self) :
        super().__init__()

    def spam(self) : # 可以重写父类的方法
        print('B.spam')
a = A()
b = B()
a.spam()
b.spam()