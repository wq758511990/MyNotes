def largestPerimeter(A):
    A.sort()
    i = len(A) - 1
    while i > 1 :
        if A[i - 2] + A[i - 1] > A[i]
            triLength = A[i] + A[i - 1] + A[i - 2]
            return triLength
        else :
            i -= 1
    return 0

print(largestPerimeter([3,6,2,3]))