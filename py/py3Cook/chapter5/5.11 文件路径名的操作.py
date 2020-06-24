import os
path = '/Users/beazley/Data/data.csv' # 文件路径
print(os.path.basename(path)) # 获取文件名
print(os.path.dirname(path)) # 获取路径名

# 拼接路径
print(os.path.join('test', 'data', os.path.basename(path)))

path = '~/Data/data.csv'
print(os.path.expanduser(path))
print(os.path.splitext(path))