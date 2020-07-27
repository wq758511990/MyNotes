from itertools import dropwhile
with open('test/passwd.txt') as fs :
    # for line in fs :
    #     print(line)

    # 跳过注释，仅仅跳过 开始部分的注释，之后不会再跳过
    for line in dropwhile(lambda line: line.startswith('#'), fs) :
        print(line)