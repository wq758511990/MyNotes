def manual_ilt() :
    with open('test/test.txt', 'rb') as fs :
        try :
            while True :
                line = next(fs)
                print(line, end='\n')
        except StopIteration :
            pass


# manual_ilt()
items = [1, 2, 3]
it = iter(items)
print(next(it))
print(next(it))
print(next(it))
print(next(it))