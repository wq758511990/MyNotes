def addToArrayForm(A, K) : 
    b = ','.join([str(x) for x in A])
    c = str(int(b) + K).split(',')
    # return [int(j) for j in c]
    return c

print(addToArrayForm([1,2,0,0], 34))