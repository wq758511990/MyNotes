from functools import partial
def spam(a, b, c, d) :
    print(a, b, c, d)

s1 = partial(spam, 1, 2, d = 8) # 这样规定s1每次调用，第一个参数均为1，第二个参数均为2，指定参数d为8
print(s1(3))