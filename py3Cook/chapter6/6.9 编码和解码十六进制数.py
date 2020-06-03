import binascii
s = b'hello'
he = binascii.b2a_hex(s)  # bytes to ascii => b2a
print(he)
pre = binascii.a2b_hex(he) # ascii to bytes => a2b
print(pre)