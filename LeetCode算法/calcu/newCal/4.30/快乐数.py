class Solution:
    def isHappy(self, n: int) -> bool:
        notHappy = [4, 16, 37, 58, 89, 145, 42, 20]
        def handler(n, res) :
            while n :
                tmp = n % 10
                res += (tmp ** 2)
                n //= 10
            if res == 1 :
                return True
            elif res in notHappy :
                return False
            return handler(res, 0)

        return handler(n, 0)


solute = Solution()
print(solute.isHappy(2))