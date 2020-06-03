#检查字符串开头或结尾的一个简单方法是使用 str.startswith() 或者是 str.endswith() 方法
import os
print(os.listdir('./chapter2')) #返回目录列表

# [name for name in filenames if name.endswith(('.c', '.h')) ] # 将filenames 中 .c后缀 和.h后缀的文件放入此列表中


from urllib.request import urlopen

def read_data(domain) :
    if domain.startswith(('https', 'https:', 'ftp:')) : # startswith 中 传入的除了准确的字符串外只能是元组
        return urlopen(domain).read()
    else :
        with open(domain) as f :
            return f.read()

print(read_data('https://www.baidu.com'))

print(os.listdir('./chapter2'))
print(any(name.endswith(('.c', '.h')) for name in os.listdir('./chapter2'))) # 检查目录中是否含有 .c 或者 .h后缀的文件
