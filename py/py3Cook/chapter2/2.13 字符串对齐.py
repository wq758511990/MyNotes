text = 'hello world'
print(text.ljust(20, '='))
print(text.rjust(20, '='))
print(text.center(20, '='))

print(format(text, '>20')) # 长度为20，右对齐
print(format(text, '<20')) # 长度为20，左对齐
print(format(text, '^20')) # 长度为20，居中对齐

# format() 函数的一个好处是它不仅适用于字符串。它可以用来格式化任何值，使得它非常的通用。比如，你可以用它来格式化数字：
x = 1.23456
print(format(x, '>10'))
