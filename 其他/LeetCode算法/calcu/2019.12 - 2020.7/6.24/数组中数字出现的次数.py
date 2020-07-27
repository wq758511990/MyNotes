from functools import reduce
class Solution:
    def singleNumbers(self, nums: list) -> list:
        # res = []
        # for num in nums :
        #     if num in res :
        #         res.remove(num)
        #     else :
        #         res.append(num)
        # return res

        res = reduce(lambda x, y: x ^ y, nums)
        div = 1 # 初始div为二进制的最右边一位的1， 也就是1
        while div & res == 0 :
            div <<= 1

        a, b = 0, 0
        for num in nums :
            if num & div :
                a ^= num
            else :
                b ^= num
        
        return [a, b]

solute = Solution()
print(solute.singleNumbers([4,3,4,1]))