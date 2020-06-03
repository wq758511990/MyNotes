def sumEvenAfterQueries(A, queries) :
    resArr = []
    # for x in queries :
    #     temp = 0
    #     A[x[1]] += x[0]
    #     for j in A :
    #         if j % 2 == 0 :
    #             temp += j
    #     resArr.append(temp)
    # return resArr

    curTotal = 0
    for x in A :
        if x % 2 == 0 :
            curTotal += x
    
    for y in queries :
        befNum = A[y[1]]
        A[y[1]] += y[0]
        curNum = A[y[1]]
        if befNum % 2 == 0 and curNum % 2 == 0 :
            curTotal += y[0]
        elif befNum % 2 == 0 and curNum % 2 != 0 :
            curTotal -= befNum
        elif befNum % 2 != 0 and curNum % 2 == 0 :
            curTotal += curNum
        resArr.append(curTotal)
    return resArr

print(sumEvenAfterQueries([1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]]))