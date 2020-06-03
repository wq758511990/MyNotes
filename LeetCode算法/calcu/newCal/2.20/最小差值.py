def smallestRangeI(A, K):
    aLen = len(A)
    if aLen == 1 :
        return 0
    arr = sorted(A)
    if arr[aLen - 1] - arr[0] < 2 * K :
        return 0
    else :
        return arr[aLen - 1] - K - (arr[0] + K)



print(smallestRangeI([0,10], 2))