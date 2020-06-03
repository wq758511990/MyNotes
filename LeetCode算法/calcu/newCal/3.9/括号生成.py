def generateParenthesis(n) :
    res = []
    combination(res, '', 0, 0, n)
    return res

def combination(res, singleStr, l, r, n) :
    if l > n or r > n or r > l :
        return 
    if l == n and r == n :
        res.append(singleStr)
        return
    combination(res, singleStr + '(', l + 1, r, n)
    combination(res, singleStr + ')', l, r + 1, n)


print(generateParenthesis(3))
