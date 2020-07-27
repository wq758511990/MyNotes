def rotatedDigits(N: int):
    # dic = {'0': '0', '1': '1', '2': '5',
    #        '5': '2', '8': '8', '6': '9', '9': '6'}
    # resCount = 0
    # for x in range(0, N):
    #     cpyX = x
    #     for ch in str(x):
    #         if ch in dic:
    #             ch = dic[ch]
    #             continue
    #         else:
    #             break
    #     if x != cpyX:
    #         resCount += 1
    # return resCount

    # res = 0
    # for i in range(2, N + 1):
    #     print(i)
    #     flag = 1
    #     try:
    #         temp = ''.join([dic[j] for j in str(i)])
    #     except:
    #         flag = 0
    #     if flag and temp != str(i):
    #         res += 1
    # return res

    # for i in range(1, N + 1) :
    #     legalCount = 0
    #     flag = True
    #     for x in str(i) :
    #         if x in dic :
    #             if x in ['0', '1', '8'] :
    #                 legalCount += 1
    #         else :
    #             flag = False
    #             break
    #     if legalCount != len(str(i)) and flag == True :
    #         res += 1
    # return res 

    # 动态规划
    arr, res = [0] * (N + 1), 0
    arr[: 10] = [0, 0, 1, -1, -1, 1, 1, -1, 0, 1]
    for x in range(N + 1) :
        arr[x] = -1 if arr[x // 10] == -1 or arr[x % 10] == -1 else arr[x // 10] | arr[x % 10]
        res += 1 if arr[x] == 1 else 0
    return res


print(rotatedDigits(15))
