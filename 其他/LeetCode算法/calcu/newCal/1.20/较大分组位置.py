def largeGroupPositions(S: str) :
    # count = 1
    # reslist = []
    # for i,v in enumerate(S) :
    #     if i + 1 < len(S) :
    #         if S[i + 1] == S[i] :
    #             count += 1
    #         else :
    #             if count >= 3 :
    #                 reslist.append([i + 1 - count, i])
    #             count = 1
    # if count >= 3 :
    #     reslist.append( [len(S) - count, len(S) - 1])
    # return reslist
    reslist = []
    i = 0 
    end = len(S)
    for j, v in enumerate(S) :
        if j == end - 1 or S[j] != S[j + 1] :
            if j + 1 - i >= 3 :
                reslist.append([i, j])
            i = j + 1
    return reslist

print(largeGroupPositions('abc'))