def shortestToChar(S: str, C: str) :
    resArr = []
    for index, value in enumerate(S) :
        if value == C :
            resArr.append(0)
        else :
            rIndex = S[index: len(S)].find(C)
            lIndex = -1 if S[0: index][::-1].find(C) == -1 else S[0: index][::-1].find(C) + 1 
            minLen = min(lIndex, rIndex) if lIndex >= 0 and rIndex >= 0 else rIndex if lIndex < 0 else lIndex
            resArr.append(minLen)
    return resArr


print(shortestToChar('loveleetcode', 'e'))