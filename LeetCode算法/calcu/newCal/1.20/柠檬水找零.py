def lemonadeChange(bills: list):
    # 傻逼
    # if bills[0] != 5:
    #     return False
    # resArr = []
    # for x in bills:
    #     if x == 5:
    #         resArr.append(x)
    #     elif x == 10:
    #         if 5 in resArr:
    #             resArr.remove(5)
    #             resArr.append(10)
    #         else:
    #             return False
    #     else:
    #         if sum(resArr) < 15: return False
    #         if 10 in resArr :
    #             try :
    #                 resArr.remove(10)
    #                 resArr.remove(5)
    #             except :
    #                 return False
    #             resArr.append(20)
    #         else :
    #             try :
    #                 resArr.remove(5)
    #                 resArr.remove(5)
    #                 resArr.remove(5)
    #             except :
    #                 return False
    #             resArr.append(20)
    # return True
    five = 0
    ten = 0
    if bills[0] != 5:
        return False

    for x in bills:
        if x == 5:
            five += 1

        elif x == 10:
            if five > 0:
                five -= 1
                ten += 1
        else:
            if ten * 10 + five * 5 < 15:
                return False

            if ten > 0:
                ten -= 1
                five -= 1

            else:
                five -= 3

    return five >= 0 and ten >= 0


print(lemonadeChange([5, 5, 10, 10, 20]))
