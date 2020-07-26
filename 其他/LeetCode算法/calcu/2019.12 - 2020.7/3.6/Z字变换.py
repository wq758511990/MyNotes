def convert(s, numRows):
    if numRows == 1 :
        return s
    totalList = [[] for _ in range(numRows)]
    rowNum = 0
    curStatus = True if rowNum == 0 else False
    for x in s:
        totalList[rowNum].append(x)
        if curStatus :
            rowNum += 1
            if rowNum == numRows - 1 :
                curStatus = False
        else :
            rowNum -= 1
            if rowNum == 0 :
                curStatus = True

    return ''.join([''.join(y) for y in totalList])



print(convert('LEETCODEISHIRING', 2))
