def recv(maxsize, *, block): # 强制关键字，在*后面出现的形参，
    pass

recv(1024, True) # TypeError
recv(1024, block=True) # Ok