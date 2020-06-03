import os
# print(os.listdir()) # 返回一个列表， 存储当前目录下的所有文件
# print([name for name in os.listdir() if os.path.isfile(name)]) # 返回目录下的所有文件，仅返回文件
# print([name for name in os.listdir() if name.endswith('.py')]) # 返回以.py结尾的文件

import glob
pyfiles = glob.glob('*.py') # 返回目录下所有以.py结尾的文件
print(pyfiles)

from fnmatch import fnmatch
pyfiles = [name for name in os.listdir() if fnmatch(name, '*.py')] # 返回目录下所有以.py结尾的文件 # 上面一个更优
# print(pyfiles)