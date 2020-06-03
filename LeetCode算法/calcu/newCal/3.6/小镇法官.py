import collections
def findJudge(N, trust) :
    # judDic = {}
    # trustArr = []
    # for x in trust :
    #     trustArr.append(x[0])
    #     if x[1] not in judDic and x[1] not in trustArr:
    #         judDic[x[1]] = 1
    #     if x[0] in judDic :
    #         judDic[x[0]] = -1
    # for k, v in judDic.items() :
    #     if v == 1 :
    #         return k
    # return -1

    if N == 1 and trust == [] :
        return 1

    trustArr = set()
    judDic = collections.defaultdict(int)
    for a, b in trust :
        trustArr.add(a)
        judDic[b] += 1
    for k, v in judDic.items() :
        if v == N-1 and k not in trustArr :
            return k
    return -1
    

print(findJudge(4, [[1,3],[1,4],[2,3],[2,4],[4,3]]))    