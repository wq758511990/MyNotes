class Solution:
    def divide(self, dividend, divisor):
        i, a, b = 0, abs(dividend), abs(divisor)
        if a == 0 or a < b:
            return 0
        
        while b <= a:
            b = b << 1
            i = i + 1
        else:
            res = (1 << (i - 1)) + self.divide(a - (b >> 1), abs(divisor))
            if (dividend ^ divisor) < 0:
                res = -res
            return min(res, (1 << 31) - 1)

solute = Solution()
print(solute.divide(100, 3))