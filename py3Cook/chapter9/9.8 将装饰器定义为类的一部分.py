from functools import wraps

class A :
    def decorator1(self, func) :
        @wraps(func)
        def wrapper(*args, **kwargs) :
            print('Decorator 1')
            return func(*args, **kwargs)
        return wrapper


    @classmethod
    def decorator2(self, func) :
        @wraps(func)
        def wrapper(*args, **kwargs) :
            print('Decorator 2')
            return func(*args, **kwargs)
        return wrapper

a = A()

@a.decorator1
def spam() :
    pass

@A.decorator2
def spam1() :
    pass

spam()
spam1()