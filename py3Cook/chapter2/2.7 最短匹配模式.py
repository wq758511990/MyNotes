# 这个问题一般出现在需要匹配一对分隔符之间的文本的时候
import re
str_pat = re.compile(r'\"(.*)\"')
text1 = 'Computer says "no."'
print(str_pat.findall(text1))
# ['no.']
text2 = 'Computer says "no." Phone says "yes."'
print(str_pat.findall(text2))
# ['no." Phone says "yes.']

# 在这个例子中，模式 r'\"(.*)\"' 的意图是匹配被双引号包含的文本。但是在正
# 则表达式中 * 操作符是贪婪的，因此匹配操作会查找最长的可能匹配。于是在第二个
# 例子中搜索 text2 的时候返回结果并不是我们想要的。
# 为了修正这个问题，可以在模式中的 * 操作符后面加上? 修饰符，
# 这样就使得匹配变成非贪婪模式，从而得到最短的匹配，

str_pat = re.compile(r'\"(.*?)\"')
print(str_pat.findall(text2))
# ['no.', 'yes.']