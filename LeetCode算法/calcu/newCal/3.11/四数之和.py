def fourSum(nums, target):
    res = []
    # 特殊情况判断
    if not nums or len(nums) <= 3:
        return res
    # 对nums进行排序
    nums.sort()
    lenNums = len(nums)
    for i in range(0, lenNums - 3):
        
        # 因为这里的target并非0， 所以不能用当前数字大于target直接return 下面的j也是一样

        # 这里要用后面的数是否与前面的数相等来做判断，如果反过来会直接跳过，则可能少一个结果。 比如0, -1, -1, 2
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        for j in range(i + 1, lenNums - 2):
            if j > i + 1 and nums[j] == nums[j - 1]:
                continue
            L = j + 1
            R = lenNums - 1
            while L < R:
                temp = nums[i] + nums[j] + nums[L] + nums[R]
                if temp == target:
                    res.append([nums[i], nums[j], nums[L], nums[R]])
                    while L < R and nums[L] == nums[L + 1]:
                        L += 1
                    while L < R and nums[R] == nums[R - 1]:
                        R -= 1
                    L += 1
                    R -= 1
                elif temp > target:
                    R -= 1
                else:
                    L += 1
    return res


print(fourSum([1,-2,-5,-4,-3,3,3,5],
-11))
