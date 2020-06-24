def threeSum(nums) :
    # resList = []
    # lenNum = len(nums)
    # for i in range(lenNum) :
    #     for j in range(i + 1, lenNum) :
    #         # temp = -(nums[i] + nums[j])
    #         # if temp in nums :
    #         #     tempList = [nums[i], nums[j], temp]
    #         #     tempList.sort()
    #         #     if tempList not in resList :
    #         #         resList.append(tempList)
    #         for k in range(j + 1, lenNum) :
    #             if nums[i] + nums[j] + nums[k] == 0 :
    #                 tempList = [nums[i], nums[j], nums[k]]
    #                 tempList.sort()
    #                 if tempList not in resList :
    #                     resList.append(tempList)
    
    # return resList
    res = []
    # 特殊情况判断
    if not nums or len(nums) <= 2 :
        return res
    # 对nums进行排序
    nums.sort()
    lenNums = len(nums)
    for i in range(0, lenNums - 2) :
        if nums[i] > 0 :
            return res
        if i > 0 and nums[i] == nums[i - 1] : # 这里要用后面的数是否与前面的数相等来做判断，如果反过来会直接跳过，则可能少一个结果。 比如0, -1, -1, 2 
            continue
        L = i + 1 
        R = lenNums - 1
        while L < R :
            temp = nums[i] + nums[L] + nums[R]
            if temp == 0 :
                res.append([nums[i], nums[L], nums[R]])
                while L < R and nums[L] == nums[L + 1] :
                    L += 1
                while L < R and nums[R] == nums[R - 1] :
                    R -= 1
                L += 1
                R -= 1
            elif temp > 0 :
                R -= 1
            else :
                L += 1
    return res


print(threeSum([0, 0, 0]))