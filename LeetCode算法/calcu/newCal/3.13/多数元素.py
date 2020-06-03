class Solution:
    def majorityElement(self, nums):
        ln = len(nums)
        map1 = {}
        for x in nums:
            if x in map1:
                map1[x] += 1
                if map1[x] > ln // 2:
                    return x
            else:
                map1[x] = 1


        # res, cnt = 0, 0
        # for i, x in enumerate(nums) :
        #     if cnt == 0 :
        #         res = x
        #         cnt += 1
        #     else :
        #         cnt = cnt + 1 if nums[i] == res else cnt - 1
        # return res


solute = Solution()
print(solute.majorityElement([8, 8, 7, 7, 7]))
