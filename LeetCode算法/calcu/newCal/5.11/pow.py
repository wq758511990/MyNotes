class Solution:
    def myPow(self, x: float, n: int) -> float:
        def func(x, n) :
            if n == 0 :
                return 1
            elif x == 0 :
                return 0
            temp = func(x, n // 2)
            if n % 2 == 1 :
                return temp * temp * x
            else :
                return temp * temp
        
        return func(x, n) if n > 0 else (1 / func(x, -n))


solute = Solution()
print(solute.myPow(2.00000, 10))
