import collections
import math
class Solution:
    def hasGroupsSizeX(self, deck: list) -> bool:
        ld = len(deck)
        if ld < 2:
            return False

        map1 = {}
        for x in deck:
            if x not in map1:
                map1[x] = 1
            else:
                map1[x] += 1
        finTuple = sorted(map1.items(), key=lambda k: (k[1], k[0]))
        lp = len(finTuple)

        if lp == 1:
            return True
        
        # min_count = self.gcd(finTuple[0][1], finTuple[1][1])
        # for i in range(1, lp - 1):
        #     if self.gcd(min_count, finTuple[i + 1][1]) != 1:
        #         continue
        #     else:
        #         return False
        # return True

        x = finTuple[0][1]
        for i in range(lp) :
            x = self.gcd(x, finTuple[i][1])
            if x == 1 : return False
        return True

    def gcd(self, a, b):
        if b == 0:
            return a
        return self.gcd(b, a % b)

        # ld = len(deck)
        # if ld < 2 :
        #     return False
        
        # d = collections.Counter(deck)
        # ld = len(d)
        # if ld < 2 :
        #     return True
        
        # values = list(d.values())

        # for i in range(ld - 1) :
        #     if math.gcd(values[i], values[i + 1]) != 1 :
        #         continue
        #     else :
        #         return False
        # return True


solute = Solution()
print(solute.hasGroupsSizeX([1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3]))
