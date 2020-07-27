def canThreePartsEqualSum(A) :
    sumA = sum(A)
    if sumA % 3 != 0 :
        return False
    avgSum = int(sumA / 3)
    lenA = len(A)
    left = 0
    right = lenA - 1
    leftSum = A[left]
    rightSum = A[right]
    while left < right :
        if leftSum != avgSum :
            left += 1
            leftSum += A[left]
        if rightSum != avgSum :
            right -= 1
            rightSum += A[right]
        if rightSum == leftSum == avgSum :
            if right - left > 1 :
                return True
            else :
                left += 1
                right -= 1
    return False

print(canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1]))