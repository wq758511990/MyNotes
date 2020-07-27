# # yield
# # 以下yield_test 相当于一个迭代器 iterable 可迭代
# def yield_test(n) :
#     for i in range(n) :
#         yield(caller(i))
#         print('i=', i)
#         print('第n-1次迭代', i - 1)
#     # 结束后
#     print('循环结束')

# def caller(item) :
#     return item ** 2


# def fib(max):
#     n, a, b = 0, 0, 1
#     while n < max:
#         yield(b) # yield b 相当于返回b， 但是下一次执行从yield b的下一行开始，fib()相当于一个 generator 
#         a, b = b, a + b
#         n += 1

# for x in fib(5) :
#     print(x)

#在 for 循环执行时，每次循环都会执行 fib 函数内部的代码，执行到 yield b 时，
# fib 函数就返回一个迭代值，下次迭代时，代码从 yield b 的下一条语句继续执行，
# 而函数的本地变量看起来和上次中断执行前是完全一样的，于是函数继续执行，直到再次遇到 yield。

# 也可以手动调用 fab(5) 的 next() 方法（因为 fab(5) 是一个 generator 对象，该对象具有 next() 方法），这样我们就可以更清楚地看到 fab 的执行流程：
# python 3.x 中 next() 变为__next__()
# f = fib(5)
# print(f.__next__())
# print(f.__next__())
# print(f.__next__())



def dedupe(items) :
    # seen = set()
    seen = []
    for item in items :
        if item not in seen :
            yield item
            # seen.add(item)
            seen.append(item)

a = [1, 5, 2, 1, 9, 1, 5, 10]
testA = [3, 3, 1, 2, 5, 5, 3, 1,]
for x in dedupe(a) :
    print(x)

b = set(testA) # set去重默认会重新排序
print(list(b))