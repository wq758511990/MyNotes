class Solution:
    def fib(self, n: int) -> int:
        def getFib(n) :
            if n < 2 :
                return n
            elif n in fib_map :
                return fib_map[n]

            res = getFib(n - 1) + getFib(n - 2)
            fib_map[n] = res
            return res

        fib_map = {}
        return getFib(n)


solute = Solution()
print(solute.fib(0))