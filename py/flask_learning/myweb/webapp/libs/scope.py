class Scope :
    allow_api = []
    allow_module = []
    forbidden = []
    def __add__(self, other) :
        # 允许使用的api
        self.allow_api = self.allow_api + other.allow_api
        self.allow_api = list(set(self.allow_api))

        # 允许使用的模块
        self.allow_module = self.allow_module + other.allow_module
        self.allow_module = list(set(self.allow_module))

        # 禁止的api
        self.forbidden = self.forbidden + other.forbidden
        self.forbidden = list(set(self.forbidden))
        
        # 支持链式调用
        return self

class AdminScope(Scope) :
    allow_module = ['v1.user']
    def __init__(self) :
        pass

class UserScope(Scope) :
    # 不允许访问v1.user 下的 super_get_user方法
    forbidden = ['v1.user+super_get_user']
    def __init__(self) :
        self + AdminScope()

class SuperScope(Scope) :
    allow_api = ['v1.c', 'v1.d']
    allow_module = []
    def __init__(self) :
        self + UserScope() + AdminScope()

AdminScope()
UserScope()

def is_in_scope(scope, endpoint) :
    # globals 可以实现反射，通过字符串动态创建类
    gl = globals()
    print(endpoint)
    scope = gl[scope]()
    splits = endpoint.split('+')
    red_name = splits[0]
    if endpoint in scope.forbidden :
        return False # 如果在forbidden里则直接return false
    if endpoint in scope.allow_api :
        return True
    if red_name in scope.allow_module :
        return True
    else :
        return False