class Solution:
    # def __init__(self) :
    #     self.count = 0
    #     self.map_dict = {}
    def climbStairs(self, n: int) -> int:
        # def handler(n) :
        #     if n == 0: 
        #         self.count += 1
        #         return
        #     if n < 0: return
        #     handler(n - 1)
        #     handler(n - 2)
        
        # handler(n)
        # return self.count
        if n <= 3: return n

        a = 1
        b = 2
        c = 3
        while c <= n :
            res = a + b
            a = b
            b = res
            c += 1
        return res


solute = Solution()
print(solute.climbStairs(6))