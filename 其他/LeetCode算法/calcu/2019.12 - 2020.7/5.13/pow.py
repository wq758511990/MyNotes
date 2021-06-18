class Solution:
    def myPow(self, x: float, n: int) -> float:
        def handler(x, n) :
            if x == 0 : return 0
            if n == 0 : return 1
            tmp = handler(x, n // 2)
            if n % 2 == 1 :
                return tmp ** 2 * x
            else :
                return tmp ** 2


        return handler(x, n) if n > 0 else (1 / handler(x, -n))

solute = Solution()
print(solute.myPow(2.0000, 11))