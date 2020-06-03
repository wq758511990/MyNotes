def frange(start, end, incre) :
    x = start
    print(f'start from {x}')
    while x < end :
        yield x
        x += incre
    print('Done!')


# for i in frange(0, 4, 0.5) :
    # print(i)

# print(list(frange(0, 6, 0.25)))

c = frange(0, 2, 0.5)
print(next(c))
print(next(c))
print(next(c))
print(next(c))
print(next(c))