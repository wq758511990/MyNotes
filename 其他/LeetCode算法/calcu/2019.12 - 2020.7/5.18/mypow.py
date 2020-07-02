class Solution:
    def myPow(self, x: float, n: int) -> float:
        def handler(x, n):
            if x == 0:
                return 0
            if n == 0:
                return 1
            tmp = handler(x, n // 2)
            if n % 2 == 1:
                return tmp ** 2 * x
            else:
                return tmp ** 2
        return handler(x, n) if n > 0 else handler(1/x, -n)

        # if n < 0:
        #     x = 1 / x
        #     # 负数变成正数
        #     n = -n

        # res = 1
        # while n:
        #     if n % 2:
        #         res *= x
        #     x *= x
        #     n //= 2
        # return res


solute = Solution()
print(solute.myPow(2.00000,
                   -2147483646))
