def validMountainArray(A) :
    if len(A) < 3 : return False
    maxNum = max(A)
    maxInd = A.index(maxNum)
    if maxInd >= len(A) - 1 or maxInd < 1 : return False
    left = maxInd - 1
    right = maxInd + 1 
    while left >= 0 :
        if A[left] < A[left + 1] :
            left -= 1
            continue
        else :
            return False
    while right < len(A) :
        if A[right] < A[right - 1] :
            right += 1
            continue
        else :
            return False
    return True

print(validMountainArray([2,1,2,3,5,7,9,10,12,14,15,16,18,14,13]))