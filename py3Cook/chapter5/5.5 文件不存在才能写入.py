# 可以在 open() 函数中使用 x 模式来代替 w 模式的方法来解决这个问题。比如：
# 写入二进制就用xb
with open('test/test1.txt', 'xt') as fs :
    fs.write('test')