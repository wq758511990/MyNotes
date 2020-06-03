import heapq
a = [5, 3, 1, 7]
b = [4, 2, 6, 8]
for c in heapq.merge(a, b) :
    print(c)