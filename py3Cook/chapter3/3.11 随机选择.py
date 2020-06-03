import random
a = [1, 2, 3 ,4 ,5]
print(random.choice(a)) # a 中随机取一个元素出来
print(random.sample(a, 2)) # a中随机取2个元素
random.shuffle(a) # 打乱a列表的顺序
print(a)
print(random.randint(0, 10)) # 0-10之间生成随机整数
print(random.random()) # 生成 0 到 1 范围内均匀分布的浮点数