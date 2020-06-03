def toGoatLatin(S: str) :
    list1 = S.split(' ')
    list2 = ['a', 'e', 'i', 'o', 'u']
    resList = []
    for i,v in enumerate(list1) :
        if v[0].lower() in list2 :
            v = v + 'ma' + (i + 1) * 'a'
            resList.append(v)
        else :
            v = v[1: len(v)] + v[0] + 'ma' + (i + 1) * 'a'
            resList.append(v)
    return ' '.join(resList)

print(toGoatLatin('The quick brown fox jumped over the lazy dog'))