arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
slice1 = slice(2, 40, 2) # 可以先通过slice(start, stop, step(这里省略了)) 来确定切片的范围，而后通过arr[slice1]，可读性和可维护性更强
#另外，你还能通过调用切片的 indices(size) 方法将它映射到一个确定大小的序列上，
# print(arr[2: 4])
# print(arr[slice1])
print(slice1.indices(len(arr)))
for i in range(*slice1.indices(len(arr))) :
    print(i)

