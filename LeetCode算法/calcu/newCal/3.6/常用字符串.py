def commonChars(A) :
    resArr = []
    if not A :
        return resArr
    alphas = set()
    for x in A[0] :
        alphas.add(x)
    for y in alphas :
        minNum = min(a.count(y) for a in A)
        resArr += minNum * y
    return resArr

print(commonChars(["bella","label","roller"]))