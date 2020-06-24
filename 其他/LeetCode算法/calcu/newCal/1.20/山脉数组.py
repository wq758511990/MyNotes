def peakIndexInMountainArray(A: list) :
    # for i,v in enumerate(A) :
    #     if v > A[i - 1] and v > A[i + 1] :
    #         return i
    # return A.index(max(A))

    low = 0
    high = len(A) - 1
    while low < high:
        # mid = (low + high) // 2
        # if   A[mid - 1] < A[mid] and A[mid] > A[mid + 1]:
        #     return mid
        # elif A[mid - 1] < A[mid] and A[mid] < A[mid + 1]:
        #     low = mid + 1
        # else:
        #     high = mid - 1
        mid = (low + high) // 2
        if A[mid] < A[mid + 1] :
            low = mid + 1
        else :
            high = mid
    return low
    

print(peakIndexInMountainArray([0,2,1,0]))