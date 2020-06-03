# from collections import Counter
def repeatedNTimes(A) :
    # numCount = Counter(A)
    # mostNum = numCount.most_common(1)[0][0]
    # return mostNum

    # 当值大于等于A长度的一半时，返回这个值
    # map1 = {}
    # for x in A :
    #     if x in map1 :
    #         map1[x] += 1
    #         if map1[x] >= len(A) // 2 :
    #             return x
    #     else :
    #         map1[x] = 1

    # 排序后相邻值有相同的即最大值
    # A.sort()
    # for i, v in enumerate(A) :
    #     if A[i] == A[i + 1] :
    #         return A[i]

    # 不需要排序
    # lenA = len(A)
    # 1、判断A[0] 与 A[lenA - 1] 是否相等 若相等返回
    # 2、判断A[1] 与 A[lenA - 1] 是否相等 相等则返回
    # 3、开始循环 判断前后的值是否相等，若相等返回
    # 4、若循环后没有相等 则得到 A[0] != A[lenA] A[1] != A[lenA]
    # 此时最大次数的值必在三者之间

    lenA = len(A)
    # if A[0] == A[lenA - 1] or A[1] == A[lenA - 1] :
    #     return A[lenA - 1]
    # i = 0
    # j = 1
    # while j < lenA :
    #     if A[i] == A[j] :
    #         return A[i]
    #     i += 1
    #     j += 1
    # return A[0] 

    # if A[1] == A[3] :
    #     return A[1]
    # for i in range(lenA - 1) :
    #     if A[i] == A[i + 1] :
    #         return A[i]
    # return A[0]

    # 出现次数最多元素（设为X）不能在A[0]，另外X不能同时在A[1] 和 A[3]，因为这样子就返回X了，
    # 一共有2N个长度，A[0]占了一个，A[1]与A[3]的其中一个元素占了一个， 从题意中很容易了解到，
    # 除了X其他元素都只出现一次，剩下2N-2个空，要分配给N-1个元素， 其中X占了N项，

print(repeatedNTimes([2,1,2,5,3,2]))