def flipAndInvertImage(A: list) :
    # 反转数组 reversed 返回的是一个迭代器 用list去序列化他
    # 反转数组直接[::-1] 即可
    
    # for j,list1 in enumerate(A) :
    #     list1 = list1[::-1]
    #     for i,v in  enumerate(list1) :
    #         list1[i] = 1 if v == 0 else 0
    #     A[j] = list1
    # return A

    # return [[j ^ 1 for j in i[::-1]] for i in A]

    return [list(map(lambda x:1-x,var[::-1])) for var in A]

print(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]))