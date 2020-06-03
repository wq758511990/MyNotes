s = "Look into my eyes, look into my eyes, the eyes, the eyes, \
the eyes, not around the eyes, don't look around the eyes, \
look into my eyes, you're under."

import textwrap
# print(textwrap.fill(s, 70, initial_indent='  ')) # 首行缩进
print(textwrap.fill(s, 40, subsequent_indent='  ')) # 换行缩进

import os
print(os.get_terminal_size()) # 返回当前终端有多少列，多少行