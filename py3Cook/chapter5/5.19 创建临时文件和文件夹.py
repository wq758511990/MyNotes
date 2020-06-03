from tempfile import TemporaryFile, NamedTemporaryFile, TemporaryDirectory

# TemporaryFile 创建的文件是匿名的
with TemporaryFile('w+t', encoding='utf-8') as fs :
    fs.write('hello world\n')
    fs.write('test\n')
    fs.seek(0) # 光标返回开头
    data = fs.read()
    # print(data)

# 用with打开 结束之后 会自动销毁
# 或者
# f = TemporaryFile('w+t')
# 操作
# f.close()

with NamedTemporaryFile('w+t') as fs : # 创建的文件 有名字
    # print(fs.name)
    pass

with TemporaryDirectory() as dirname : # 临时的目录
    print('dirname is %s' % dirname)

