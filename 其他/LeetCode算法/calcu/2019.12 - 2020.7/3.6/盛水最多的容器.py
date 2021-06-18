def maxArea(height) :
    # 暴力法超时
    # lenH = len(height)
    # max_Ar = 0
    # for i in range(0, lenH) :
    #     for j in range(i + 1, lenH) :
    #         cur_Ar = (j - i) * min(height[i], height[j])
    #         max_Ar = max_Ar if max_Ar > cur_Ar else cur_Ar
    # return max_Ar

    left = 0
    right = len(height) - 1
    res = 0

    while left < right :
        cur_Ar = (right - left) * min(height[right], height[left])
        res = res if res > cur_Ar else cur_Ar
        if height[left] < height[right] : left += 1
        else : right -= 1

    return res

print(maxArea([1,8,6,2,5,4,8,3,7]))