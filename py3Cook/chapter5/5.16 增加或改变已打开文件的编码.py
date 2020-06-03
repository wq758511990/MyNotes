# import urllib.request
import io
# u = urllib.request.urlopen('http://www.python.org')
# f = io.TextIOWrapper(u, encoding='utf-8')
# text = f.read()


import sys
# print(sys.stdout.encoding)
# sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding='latin-1')
# print(sys.stdout.encoding)

f = open('sample.txt', 'w')
print(f)
print(f.buffer)
print(f.buffer.raw)