# 可以使用 struct 模块处理二进制数据。下面是一段示例代码将一个 Python 元组
# 列表写入一个二进制文件，并使用 struct 将每个元组编码为一个结构体。
from struct import Struct


def write_records(records, format, f):
    record_struct = Struct(format)
    for r in records:
        f.write(record_struct.pack(*r))

def read_records(format, f) :
    record_struct = Struct(format)
    chunks = iter(lambda : f.read(record_struct.size), b'')
    return (record_struct.unpack(chunk) for chunk in chunks)


if __name__ == '__main__':
    # records = [(1, 2.3, 4.5),
    #            (6, 7.8, 9.0),
    #            (12, 13.4, 56.7)]
    # with open('data.b', 'wb') as f:
    #     write_records(records, '<idd', f) 

#   结构体通常会使用一些结构码值 i, d, f 等 [参考 Python 文档 ]。这些代码分别代表
#   某个特定的二进制数据类型如 32 位整数，64 位浮点数，32 位浮点数等。第一个字符 <
#   指定了字节顺序。在这个例子中，它表示”低位在前”。更改这个字符为 > 表示高位在
#   前，或者是 ! 表示网络字节顺序。

    with open('data.b','rb') as f:
        for rec in read_records('<idd', f):
            print(rec)
