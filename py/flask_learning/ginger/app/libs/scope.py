class Scope :
    allow_api = []
    allow_module = []
    forbidden = []
    def __add__(self, other):
        # 运算符重载
        self.allow_api = self.allow_api + other.allow_api
        self.allow_api = list(set(self.allow_api)) # 这样子就不会有重复元素

        self.allow_module = self.allow_module + \
                other.allow_module
        self.allow_module = list(set(self.allow_module))

        self.forbidden = self.forbidden + other.forbidden
        self.forbidden = list(set(self.forbidden))

        return self # 这样子就可以支持链式调用

class AdminScope(Scope) :
    # allow_api = ['v1.super_get_user']
    allow_module = ['v1.user'] # 这样就可以访问user模块下所有的视图函数
    def __init__(self) :
        # self + UserScope()
        pass

class UserScope(Scope) :
    # 排除
    forbidden = ['v1.user+super_get_user']
    # allow_api = ['v1.user+get_user']
    def __init__(self) :
        self + AdminScope()

class SuperScope(Scope) :
    allow_api = ['v1.c', 'v1.d']
    allow_module = []
    def __init__(self) :
        self + UserScope() + AdminScope()

SuperScope()
AdminScope()

def is_in_scope(scope, endpoint) :
    # globals 可以实现反射，通过字符串动态创建类
    gl = globals() # 可以把当前模块下所有的变量都变成一个字典，可以用字符串对应键值创建类
    scope = gl[scope]()
    splits = endpoint.split('+')
    red_name = splits[0]
    print(endpoint, red_name)
    if endpoint in scope.forbidden :
        return False # 如果在forbidden 里面直接return False
    if endpoint in scope.allow_api :
        return True
    if red_name in scope.allow_module :
        return True
    else :
         return False