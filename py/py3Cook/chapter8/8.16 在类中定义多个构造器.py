import time

class Date :
    def __init__(self) :
        pass

    @classmethod # 类方法（不需要实例化类就可以被类本身调用）
    def func1(cls): # cls : 表示没有被实例化的类本身
        print('func1')
        print(cls)
        cls().func2()

    def func2(self) :
        print('func2')
        print(self)

    @staticmethod
    def func3() :
        print('func3')

# 类方法（不需要实例化类就可以被类本身调用）
Date.func1() 

# 静态方法， 也可以直接调用，不需要实例化
Date.func3()



