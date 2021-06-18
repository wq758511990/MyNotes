import math
class Solution:
    def getPermutation(self, n: int, k: int) -> str:
        # if n == 0:
        #     return []
        # arr = [i + 1 for i in range(n)]
        # res = []

        # def getPermuta(arr, tmp):
        #     if len(res) == k:
        #         return tmp
        #     if len(tmp) == n:
        #         res.append(tmp)
        #     for i in range(len(arr)):
        #         getPermuta(arr[:i] + arr[i + 1:], tmp + [arr[i]])
        # getPermuta(arr, [])
        # return ''.join(str(i) for i in res[-1])

        num = [str(i) for i in range(1, n+1)]
        res = ""
        n -= 1
        while n > -1:
            t = math.factorial(n)
            loc = math.ceil(k / t) - 1
            res += num[loc]
            num.pop(loc)
            k %= t
            n -= 1
        return res


solute = Solution()
print(solute.getPermutation(3,6))
