import gzip
import bz2

# with gzip.open('test/test.gz', 'wt' compresslevel=5) as fs : compresslevel 压缩等级 默认是9，越低性能越好，但是压缩程度也越低
#     fs.write('98+8+9')

# with bz2.open('test/test.bz2', 'wt') as fs :
#     fs.write('465465')

with gzip.open('test/test.gz', 'rt') as fs :
    print(fs.read())

with bz2.open('test/test.bz2', 'rt') as fs :
    print(fs.read())


# 最后一点，gzip.open() 和 bz2.open() 还有一个很少被知道的特性，它们可以作用在一个已存在并以二进制模式打开的文件上。
import gzip
f = open('somefile.gz', 'rb')
with gzip.open(f, 'rt') as g:
    text = g.read()