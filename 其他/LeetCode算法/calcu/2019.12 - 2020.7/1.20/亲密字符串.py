def buddyStrings(A: str, B: str):
    if len(A) != len(B):
        return False
    if A == B and len(set(A)) < len(A):
        return True
    # zip 函数， 可以将2个数组进行匹配，返回元组，每个元组的元素是对应数组的元素的集合s

    # 使用 zip 进行匹配对比，挑出不同的字符对
    # dif = [(a, b) for a, b in zip(A, B) if a != b]

    # # 对数只能为2，并且对称，如 (a,b)与(b,a)
    # return len(dif) == 2 and dif[0] == dif[1][::-1]
    resArr = []
    for i,v in enumerate(A) :
        if A[i] != B[i] :
            resArr.append(A[i] + B[i])
    return True if len(resArr) == 2 and resArr[0] == resArr[1][::-1] else False


print(buddyStrings('ab', 'ab'))
