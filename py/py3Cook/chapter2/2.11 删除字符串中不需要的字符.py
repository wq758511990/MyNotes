# strip() 去除首尾空白符
# lstrip() 去除左侧空白符
# rstrip() 去除右侧空白符
str1 = ' hello world \n'

print(str1.strip())
print(str1.lstrip())
print(str1.rstrip())

str2 = '-------hello========='
print(str2.strip('-')) # 可以指定要删除的字符
# 但是需要注意的是去除操作不会对字符串的中间的文本产生任何影响。比如：