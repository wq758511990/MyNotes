def transpose(commands: list, obstacles: list):
    x = 0
    y = 0
    curDir = 1
    for c in commands :
        if c != -1 and c != -2 :
            if curDir == 1 :
                y += c
            elif curDir == 2 :
                x += c
            elif curDir == 3 :
                y -= c
            elif curDir == 4 :
                x -= c
        elif c == -1 :
            curDir += 1
        else :
            curDir -= 1

        if curDir > 4 :
            curDir = 1
        elif curDir < 1 :
            curDir = 4
    return abs(x) ** 2 + abs(y) ** 2

print(transpose([4, -1, 3], []))
