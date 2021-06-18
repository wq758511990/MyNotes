class Solution:
    def permutation(self, s: str) -> list:
        c, res = list(s), []
        def handler(x):
            if x == len(s) - 1:
                res.append(''.join(c))
                return
            dic = set()
            for i in range(x, len(s)):
                if c[i] in dic:
                    continue
                dic.add(c[i])
                c[i], c[x] = c[x], c[i]
                handler(x + 1)
                c[i], c[x] = c[x], c[i]
        handler(0)
        return res


solute = Solution()
print(solute.permutation('abc'))
