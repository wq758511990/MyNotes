def sortedSquares(A) :
    resArr = []
    lenA = len(A)
    left = 0
    right = lenA - 1
    while left < right :
        resArr.append(A[left] ** 2)
        resArr.append(A[right] ** 2)
        left += 1
        right -= 1
    if lenA % 2 != 0 :
        resArr.append(A[left] ** 2)
    return sorted(resArr)

print(sortedSquares([-4,-1,0,3,10]))