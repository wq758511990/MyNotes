import re
def myAtoi(str) :
    # testStr = str.strip()
    # resNum = 0
    # changeFlag = True
    # if testStr == '' or testStr == '-' or testStr == '+' : return 0
    # if testStr[0] != '-' and testStr[0] != '+' and not testStr[0].isdigit() :
    #     return 0
    # else :
    #     for i in range(1, len(testStr)) :
    #         if not testStr[i].isdigit() :
    #             resNum = int(testStr[0:i])
    #             changeFlag = False
    #             break
    # if changeFlag :
    #     resNum = int(testStr)
    # if resNum < (-2 ** 31) :
    #     resNum = -2 ** 31
    # elif resNum > ((2 ** 31) - 1) :
    #     resNum = 2 ** 31 - 1
    # return resNum
    return max(min(int(*re.findall(r'^[\+\-]?\d+', str.lstrip())), 2 ** 31), -2 ** 31)
    

print(myAtoi("+2"))