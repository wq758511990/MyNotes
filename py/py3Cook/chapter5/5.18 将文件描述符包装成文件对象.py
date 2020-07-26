import os
fd = os.open('sample.txt', os.O_WRONLY | os.O_CREAT)


# Turn into a proper file
f = open(fd, 'wt') 
f.write('hello world\n') 
f.close()