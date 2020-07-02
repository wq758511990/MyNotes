def reverseOnlyLetters(S) :
    # alphaArr = []
    # notAldic = {}
    # for i, x in enumerate(S) :
    #     if x.isalpha() :
    #         alphaArr.insert(0, x)
    #     else :
    #         notAldic[i] = x

    # for (k,v) in notAldic.items() :
    #     alphaArr.insert(k, v)
    
    # return ''.join(alphaArr)

    p = [i for i in S if i.isalpha()]
    resStr = ''.join([i if not i.isalpha() else p.pop() for i in S])
    return resStr


print(reverseOnlyLetters('a-bC-dEf-ghIj'))