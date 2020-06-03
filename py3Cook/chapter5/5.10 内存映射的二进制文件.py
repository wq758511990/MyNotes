import os
import mmap

def mempry_map(filename, access=mmap.ACCESS_WRITE) :
    size = os.path.getsize(filename)
    fd = os.open(filename, os.O_RDWR)
    return mmap.mmap(fd, size, access=access)


size = 1000000
with open('data', 'wb') as fs :
    fs.seek(size - 1)
    fs.write(b'\x00')

m = mempry_map('data')
print(len(m))
print(m[0: 10])
print(m[0: 11])

with open('data', 'rb') as fs :
    print(fs.read(11))