# a = [1, 2, 3, 4]
# for x in reversed(a) : # 反向遍历a 或者用a[::-1]
#     print(x)


class Cutdown(object) :
    def __init__(self, start) :
        self._start = start

    def __iter__(self) :
        n = self._start
        while n >= 0 :
            yield n
            n -= 1
        
    def __reversed__(self) :
        n = 1
        while n <= self._start :
            yield n
            n += 1

for x in Cutdown(30) :
    print(x)

for y in reversed(Cutdown(30)) :
    print(y)