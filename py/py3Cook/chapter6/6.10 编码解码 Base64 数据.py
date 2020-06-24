import base64
s = b'hello'
a = base64.b64encode(s)
print(a)
print(base64.b64decode(a))