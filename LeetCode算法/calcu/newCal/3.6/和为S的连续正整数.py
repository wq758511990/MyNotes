import copy
def findContinuousSequence(target):
    end = (target // 2) + 1
    # resArr = []
    # for i in range(1, end + 1) :
    #     tempArr= []
    #     tempCount = 0
    #     for j in range(i, end + 1) :
    #         tempCount += j
    #         tempArr.append(j)
    #         if tempCount == target :
    #             resArr.append(tempArr)
    #             break
    # return resArr

    # totalList = [x for x in range(1, end + 1)]
    tempArr = [1]
    left = 0
    right = 1
    resArr = []
    tempSum = 0
    while right <= end:
        tempSum = sum(tempArr)
        if tempSum == target:
            appArr = copy.deepcopy(tempArr)
            resArr.append(appArr)
            right += 1
            tempArr.append(right)
        elif tempSum < target:
            right += 1
            tempArr.append(right)
        else:
            left += 1
            tempArr.pop(0)
    return resArr


print(findContinuousSequence(15))
