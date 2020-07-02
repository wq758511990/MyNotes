# import math
class Solution:
    def mySqrt(self, x: int) -> int:
        # return math.floor(math.sqrt(x))
        for i in range((x // 2) + 1) :
            if i ** 2 <= x and (i + 1) ** 2 > x :
                return i


solute = Solution()
print(solute.mySqrt(89))