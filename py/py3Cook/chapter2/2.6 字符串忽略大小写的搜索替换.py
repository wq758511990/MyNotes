#　为了在文本操作时忽略大小写，你需要在使用 re 模块的时候给这些操作提供re.IGNORECASE 标志参数。比如：
import re
text = 'UPPER PYTHON, lower python, Mixed Python'
print(re.findall('python', text, flags=re.IGNORECASE))
# strMatch = re.compile('python', text)
# print(strMatch.findall(text, flags=re.IGNORECASE))
testStr = 'test'
print(testStr.capitalize())