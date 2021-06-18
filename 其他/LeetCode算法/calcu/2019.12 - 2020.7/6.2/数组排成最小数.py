# 实现比较类
# class cmp(str):
#     def __lt__(self, other):
#         return self+other < other+self


# class Solution:
#     def minNumber(self, nums: list) -> str:

#         res = sorted([str(num) for num in nums], key=cmp)
#         return ''.join(res)


from functools import cmp_to_key

class Solution:
    def minNumber(self, nums: list) -> str:

        def compare(a, b) :
            return 1 if a + b > b + a else -1

        nums = sorted([str(i) for i in nums], key=cmp_to_key(compare)) 
        return ''.join(nums)

solute = Solution()
print(solute.minNumber([34,3,30,5,9]))