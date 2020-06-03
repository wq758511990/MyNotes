import time
from functools import wraps


def timethis(func):

    @wraps(func) # 这句话加上之后保留函数元信息
    # print(cutDown.__name__) cutDown 忽略则是 wrapper
    # print(cutDown.__doc__) 这是cutdown的doc 忽略则是 这是wrapper的doc
    # print(cutDown.__annotations__) {}
    def wrapper(*args, **kwards):
        '''
        这是wrapper的doc
        '''
        start = time.time()
        res = func(*args, **kwards)
        end = time.time()
        print(func.__name__, end - start)
        return res

    def wrapper1(*args, **kwards):
        '''
        这是wrapper1的doc
        '''
        start = time.time()
        res = func(*args, **kwards)
        end = time.time()
        print('1', func.__name__, end - start)
        return res
    
    # return wrapper1，则装饰器就是传给wrapper1使用
    return wrapper
    

# 下面这段代码意思为 把 cutDown作为参数传给@timethis
# 相同的还有 @classmethod @staticmethod 等等，即为装饰器
@timethis
def cutDown(n) :
    '''
    这是cutdown的doc
    '''
    while n > 0 :
        n -= 1


cutDown(1000000)
print(cutDown.__name__)
print(cutDown.__doc__)
print(cutDown.__annotations__)
