def backspaceCompare(S: str, T: str):
    return formatList(S) == formatList(T)

def formatList(L) :
    list1 = []
    for v in L:
        if v == '#':
            if len(list1):
                list1.pop()
        else:
            list1.append(v)
    return ''.join(list1)


print(backspaceCompare('a#c', 'b'))
