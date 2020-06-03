x = [1, 2, 3, 4]
y = [5, 6, 7, 8]
print(x * 2)
# print(x + 10)
print(x + y)
import numpy as np
ax = np.array([1, 2, 3, 4])
ay = np.array([5, 6, 7, 8])
print(ax + 10) # 每一个元素都加10
print(ax + ay) # 将ax与ay的元素相加起来而非拼接 但是长度不同时会报错

# leng = 10
# lista = [[1 for j in range(leng)] for i in range(leng)]
# print(lista)