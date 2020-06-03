def letterCasePermutation(S: str) :
    if not S :
        return ['']
    
    res, tmp = [''], []
    for ch in S :
        if '0' <= ch <= '9' :
            for item in res :
                tmp.append(item + ch)
        
        else :
            for item in res :
                tmp.append(item + ch.lower())
                tmp.append(item + ch.upper())
        
        res, tmp = tmp, []
    return res

print(letterCasePermutation('a1b2'))