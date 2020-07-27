import re
line = 'asdf fjdk; afed, fjek,asdf, foo'
# print(re.split(r'[;,\s]\s*', line)) # split() 只适用于比较简单的分割方法, re.split() 可以更灵活的、用正则表达式来进行分割，这里当字符串中有; , 或者空格时分割

#当你使用 re.split() 函数时候，需要特别注意的是正则表达式中是否包含一个括号捕获分组
# 。如果使用了捕获分组，那么被匹配的文本也将出现在结果列表中。
# 比如，观察一下这段代码运行后的结果：

res = re.split(r'(;|,|\s)\s*', line) # 这里会把被匹配的字符也拿到
fir = res[::2]
sec = res[1::2] + [''] # 6个分割的字符串中只有5个分割符，会导致sec与fir 长度不等，缺少最后一个字符串，故而这里加上一个[''] 使得sec长度与fir长度一直
# 这样zip才能获得完整的值
print(fir)
print(sec)
print(list(zip(fir, sec)))
str1 = ''.join((i + v) for i, v in zip(fir, sec))
print(str1)