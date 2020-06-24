class Solution:
    def fib(self, N: int) -> int:
        def get_fib(n) :
            if n < 2 : return n

            if n in res_dict :
                return res_dict[n]

            res = get_fib(n - 1) + get_fib(n - 2)
            res_dict[n] = res

            return res

        res_dict = {}
        return get_fib(N)

solute = Solution()
print(solute.fib(11))