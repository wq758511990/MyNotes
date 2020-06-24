# try :
#     with open('test/text.txt', 'rt') as f :
#         for line in f :
#             print(line)
# except Exception as e :
#     print(e)

# with open('test/something.txt', 'wt') as f :
#     f.write('1\n')
#     f.write('2\n')

# with open('test/something.txt', 'rt', newline='') as fs : # newline = '' \r\n
#     fData = fs.readlines()
#     print(fData)

with open('test.png', 'rb') as fs :
    wData = fs.read()

with open('test/test1.png', 'wb') as ws :
    ws.write(wData)