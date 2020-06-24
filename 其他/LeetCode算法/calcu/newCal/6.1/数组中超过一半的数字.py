class Solution:
    def majorityElement(self, nums: list) -> int:
        # size = len(nums)
        # hsize = (size // 2) + 1
        # numDic = {}
        # for num in nums :
        #     if num in numDic :
        #         numDic[num] += 1
        #     else :
        #         numDic[num] = 1
        
        # for k, v in numDic.items() :
        #     if v >= hsize :
        #         return k

        # 摩尔投票。。 相同+1， 不同自爆
        votes = 0
        for num in nums :
            if votes == 0: x = num
            votes += 1 if num == x else -1
        return x

solute = Solution()
print(solute.majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]))