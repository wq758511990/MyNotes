def numberOfLines(widths, S):
    # total = 0
    # resArr = [0] * 2
    # for ch in S:
    #     if (total % 100 + widths[ord(ch) - 97]) > 100:
    #         total = total + 100 - (total % 100) + widths[ord(ch) - 97]
    #     else:
    #         total += widths[ord(ch) - 97]
    # resArr[0] = total // 100 if total // 100 == total / \
    #     100 else total // 100 + 1
    # resArr[1] = total % 100
    # return resArr


    curSum = 0
    resArr = [0] * 2
    lines = 1
    for ch in S :
        if curSum + widths[ord(ch) - 97] > 100 :
            curSum = widths[ord(ch) - 97]
            lines += 1
        
        else :
            curSum += widths[ord(ch) - 97]
    
    resArr[0] = lines
    resArr[1] = curSum
    return resArr


print(numberOfLines([4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                    "bbbcccdddaaa"))
