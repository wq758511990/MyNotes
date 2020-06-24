def add(a, b = 3) : # b可传可不穿，默认是3
    return a + b

def spam(a = []) : # 默认也可以最好不要设置为可变参数
    return a

no_value = object()

def test(a, b = no_value) :
    if b == no_value :
        print('no value passed in')
    else :
        print('%d was passed in' % b)

# 默认参数的值仅仅在函数定义的时候赋值一次。试着运行下面这个例子：
x = 43
def test1(a, b = x) :
    return a + b

# 默认值最好不要设置为可变参数， 当返回默认值后，如果默认值是个可变参数并且被修改了，则下次使用该函数会发生错误
# 可以设置为None，False等不可变参数
# 在测试 None 值时使用 is 操作符是很重要的，也是这种方案的关键点。
def test2(a, b = object()) :
    if b is object : # 而非 if not b 因为 0 false 空的数组等等都会满足条件
    # 但是None False等值 是合法的 是有可能被用户传入的
    # 所以用object()来做一个唯一性判断
        b = 1
    return b
# print(test1(1))
# x = 4 # 此时再改变x的值也没用
# print(test1(1))

# print(add(1))
# print(add(1, 2))
# print(spam())
# print(test(1, 2))

print(test2(1))