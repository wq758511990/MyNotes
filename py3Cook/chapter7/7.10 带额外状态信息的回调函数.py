def apply_async(func, args, *, callback) :
    result = func(*args)

    callback(result)

def print_res(res) :
    print(f'GOT: {res}')

def add(a, b) :
    return a + b

# print(apply_async(add, (1, 2), callback = print_res))

# 为了让回调函数访问外部信息，一种方法是使用一个绑定方法来代替一个简单函
# 数。比如，下面这个类会保存一个内部序列号，每次接收到一个 result 的时候序列号
# 加 1：

class ResultHandler(object) :
    def __init__(self) :
        self.idx = 0
    
    def handler(self, res) :
        self.idx += 1
        print('[{}] GOT: {}'.format(self.idx, res))

r = ResultHandler()

print(apply_async(add, (1, 2), callback = r.handler))
print(apply_async(add, ('hello', 'world'), callback = r.handler))

# 第二种方式，作为类的替代，可以使用一个闭包捕获状态值，例如：
def make_handler():
    sequence = 0
    def handler(result):
        nonlocal sequence
        sequence += 1
        print('[{}] Got: {}'.format(sequence, result))
    return handler