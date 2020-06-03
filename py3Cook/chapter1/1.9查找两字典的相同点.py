a = {'x': 1, 'y': 2, 'z': 3}
b = {'w': 10, 'x': 11, 'y': 2}

print(a.keys() & b.keys()) # {'x', 'y'}
print(a.items() & b.items()) # {('y': '2')}

c = {key:a[key] for key in a.keys() - {'z', 'w'}} # 在a字典的基础上构造一个不含key为'z' 和 'w'的字典
print(c)