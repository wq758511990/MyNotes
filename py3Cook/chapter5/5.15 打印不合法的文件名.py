import sys
# def bad_filename(filename) :
#     return repr(filename[1:-1])

filename = 'b\udce4d.txt'
try:
    print(filename)
except UnicodeEncodeError:
    print(bad_filename(filename))

# \udce4 是一个非法的 Unicode 字符。它其实是一个被称为代理字符对的双字符组合的后半部分。
# 故而会捕获异常 使用bad_filename即可打印该错误文件名

# 另外一个选择就是通过某种方式重新编码，示例如下

def bad_filename(filename):
    temp = filename.encode(sys.getfilesystemencoding(), errors='surrogateescape')
    return temp.decode('latin-1')