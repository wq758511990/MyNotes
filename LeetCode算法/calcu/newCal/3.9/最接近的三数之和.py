def threeSumClosest(nums, target):
    n = len(nums)
    res = sum(nums[0: 3]) - target
    dis = abs(res)
    nums.sort()
    for i in range(n - 2):
        L = i + 1
        R = n - 1
        while L < R:
            temp = nums[i] + nums[L] + nums[R] - target
            res = temp if abs(temp) < dis else res
            dis = abs(res)
            if temp == 0:
                return temp + target
            elif temp < 0:
                L += 1
            else:
                R -= 1
    return res + target


print(threeSumClosest([1, 6, 9, 14, 16, 70],
                      81))
