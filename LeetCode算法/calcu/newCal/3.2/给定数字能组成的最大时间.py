# from itertools import permutations
def largestTimeFromDigits(A):
    # max_time = 0
    # res = ''
    # for ht, hb, mt, mb in permutations(A) :
    #     hour = ht * 10 + hb
    #     minute = mt * 10 + mb
    #     t = hour * 60 + minute
    #     if hour < 24 and minute < 60 and t >= max_time :
    #         max_time = t
    #         res = "{}{}:{}{}".format(ht, hb, mt, mb)
    # return res
    max_time = 0
    res = ''
    for i in range(0, 4) :
        for j in range(0, 4) :
            if j != i :
                for k in range(0, 4) :
                    if k != j and k != i :
                        l = 6 -i - j - k
                        hour = A[i] * 10 + A[j]
                        minute = A[k] * 10 + A[l]
                        t = hour * 60 + minute
                        if hour < 24 and minute < 60 and t >= max_time :
                            res = '{}{}:{}{}'.format(A[i], A[j], A[k], A[l])
    return res



print(largestTimeFromDigits([1,2,3,4]))
