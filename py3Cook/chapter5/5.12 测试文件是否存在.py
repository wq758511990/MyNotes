import os
print(os.path.exists('test')) # 判断文件或者文件夹是否存在

print(os.path.isfile('test')) # 判断是否是文件
print(os.path.isdir('test')) # 判断是否是目录
print(os.path.islink('test')) # 判断是否是链接

print(os.path.realpath('usr/local/bin/python3'))

# 获取文件大小
print(os.path.getsize('data'))