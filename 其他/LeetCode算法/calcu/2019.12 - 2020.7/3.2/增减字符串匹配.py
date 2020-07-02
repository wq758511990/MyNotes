def diStringMatch(S) :
    # N = len(S)
    # resArr = []
    # befList = [i for i in range(N + 1)]
    # left = 0
    # right = N
    # i = 0
    # while left < right:
    #     if S[i] == 'D' :
    #         resArr.append(befList[right])
    #         right -= 1
    #     else :
    #         resArr.append(befList[left])
    #         left += 1
    #     i += 1
    # resArr.append(befList[left])
    # return resArr
    
    left = 0
    right = len(S)
    resArr = []
    for v in S :
        if v == 'I' :
            resArr.append(left)
            left += 1
        else :
            resArr.append(right)
            right -= 1
    resArr.append(left)
    return resArr



print(diStringMatch('III'))