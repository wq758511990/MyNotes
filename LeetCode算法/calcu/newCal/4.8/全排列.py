def getAllList(m, n) :
    res = []
    testList = [i for i in range(m)]
    # 组合
    # def handler(tmp, start) :
    #     if len(tmp) == n :
    #         res.append(tmp[:])
    #         return
        
    #     for i in range(start, m) :
    #         tmp.append(i)
    #         handler(tmp, i + 1)
    #         tmp.pop()

    def handler(tmp, testList) :
        if len(tmp) == n :
            res.append(tmp)
            return
        
        for i in range(len(testList)) :
            handler(tmp + [testList[i]], testList[:i] + testList[i + 1:])
    handler([], testList)
    return res

print(getAllList(5, 3))