def rotateString(A: str, B: str):
    if len(A) != len(B):
        return False
    count = A.count(B[0])
    start = 0
    while count:
        count -= 1
        lIndex = A.find(B[0], start + 1)
        start = lIndex
        if A[lIndex:] + A[0:lIndex] == B:
            return True

    return False


print(rotateString("bbbacddceeb",
                   "ceebbbbacdd"))
