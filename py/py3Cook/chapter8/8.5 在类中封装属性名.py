class A:
    def __init__(self):
        self._internal = 0 # An internal attribute
        self.public = 1 # A public attribute
    def public_method(self):
        pass
    def _internal_method(self):
        pass

# 单下划线开头_ 内部属性/方法
# 双下划线开头__ 继承时无法被覆盖

# 大多数而言，你应该让你的非公共名称以单下划线开
# 头。但是，如果你清楚你的代码会涉及到子类，并且有些内部属性应该在子类中隐藏起
# 来，那么才考虑使用双下划线方案。