def isLongPressedName(name, typed):
    if name == typed : return  True
    if len(name) > len(typed) : return False
    i = 0
    j = 0
    while i < len(name) and j < len(typed) :
        if name[i] == typed[j] :
            i += 1
            j += 1
        else :
            j += 1
    return i == len(name)
    

print(isLongPressedName("leelee",
                        "lleelee"))
