def minDeletionSize(A) :
    testArr = list(zip(*A))
    delCount = 0
    for x in testArr :
        # i = 0
        # while i < len(x) - 1 :
        #     if ord(x[i]) > ord(x[i + 1]) :
        #         delCount += 1
        #         i += 1
        #         break
        #     i += 1
        if sorted(list(x)) != list(x) :
            delCount += 1
    return delCount

print(minDeletionSize(["zyx", "wvu", "tsr"]))