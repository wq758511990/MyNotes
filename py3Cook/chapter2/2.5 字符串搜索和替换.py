# 对于简单的字面模式，直接使用 str.replace() 方法即可，比如：
# replace 不会改变字符串原有的值
# 字符串为不可变量，还有元组
text = 'yeah, but no, but yeah, but no, but yeah'
newText = text.replace('yeah', 'yep')
print(newText)

text2 = 'Today is 11/27/2012. PyCon starts 3/13/2013.'
import re
# res = re.sub(r'(\d+)/(\d+)/(\d+)', r'\3-\1-\2', text2)
# sub() 函数中的第一个参数是被匹配的模式，第二个参数是替换模式。反斜杠数字比如 \3 指向前面模式的捕获组号。
# print(res)

#　个人推荐先编译
dateMatch = re.compile(r'(\d+)/(\d+)/(\d+)')
res = dateMatch.sub(r'\3-\1-\2', text2)
print(res)