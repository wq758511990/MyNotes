def isRectangleOverlap(rec1: list, rec2: list):
    # x1 = rec1[0]
    # y1 = rec1[1]
    # x2 = rec1[2]
    # y2 = rec1[3]

    # desX1 = rec2[0]
    # desY1 = rec2[1]
    # desX2 = rec2[2]
    # desY2 = rec2[3]

    x1, y1, x2, y2 = rec1
    desX1, desY1, desX2, desY2 = rec2

    # if desY2 <= y1 or desY1 >= y2 or desX1 >= x2 or desX2 <= x1:
    #     return False
    # else:
    #     return True
    return False if desY2 <= y1 or desY1 >= y2 or desX1 >= x2 or desX2 <= x1 else True


print(isRectangleOverlap([0, 0, 1, 1],
                         [1, 0, 2, 1]))
