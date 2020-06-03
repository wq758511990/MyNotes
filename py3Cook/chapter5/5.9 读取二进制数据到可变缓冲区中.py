import os.path

with open('sample.bin', 'wb') as f :
    f.write(b'hello world')

def read_into_buffer(filename) :
    buf = bytearray(os.path.getsize(filename))
    with open(filename, 'rb') as fs :
        fs.readinto(buf)
    return buf


buf = read_into_buffer('sample.bin')
print(buf)
print(buf[0:5])

with open('newSample.bin', 'wb') as fs :
    fs.write(buf)