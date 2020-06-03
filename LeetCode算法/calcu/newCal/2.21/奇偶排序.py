def sortArrayByParityII(A) :
    # oddList = []
    # evenList = []
    # resArr = []
    # for x in A :
    #     if x % 2 == 0 :
    #         evenList.append(x)
    #     else :
    #         oddList.append(x)
    
    # for i in range(len(evenList)) :
    #     resArr.append(evenList[i])
    #     resArr.append(oddList[i])

    # return resArr


    # oddList = [i for i in A if i % 2 != 0]
    # evenList = [i for i in A if i % 2 == 0]
    # return [i for n in zip(evenList, oddList) for i in n]

    # 原地法 不需要额外空间
    # 双指针， 令A[0], A[2], A[4] ... 均为偶数即可
    # 当A[even] 为奇数时，寻找A[even]为偶数的值，交换
    
    j = 1
    for i in range(0, len(A), 2) :
        if A[i] % 2 != 0 :
            while A[j] % 2 == 1 :
                j += 2
            A[i], A[j] = A[j], A[i]
    return A



print(sortArrayByParityII([4, 2, 5, 7]))