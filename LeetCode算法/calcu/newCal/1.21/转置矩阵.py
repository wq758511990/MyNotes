def transpose(A: list):
    # list1.append([[b, a] for (a, b) in A])
    # list1 = [[b, a] for (a, b) in A]
    # print(list1)
    # for i in range(len(A)) :
    #     for ind in range(i, len(A)) :
    #         A[i][ind], A[ind][i] = A[ind][i], A[i][ind]
    # print(A)
    # tuple1 = list(zip([x for x in A]))
    # print(tuple1)

    # print(list(zip(*A)))
    list1 = []
    m = len(A)
    n = len(A[0])

    for i in range(n) :
        x = []
        for j in range(m) :
            x.append(A[j][i])
        list1.append(x)
    
    return list1

         



print(transpose([[1,2,3],[4,5,6]]))
