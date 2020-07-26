import io
# 相当于把s变成一个文件，可以写入，可以读取。读取使用getValue
s = io.StringIO()
s.write('hello\n')
print('this is a print test', file=s)
print(s.getvalue())

# 初始化的时候直接写入数据则可以用read
t = io.StringIO('hello\nworld')
print(t.read())

# 操作二进制则用io.BytesIo
b = io.BytesIO()
b.write(b'hello world')
print(b.getvalue())