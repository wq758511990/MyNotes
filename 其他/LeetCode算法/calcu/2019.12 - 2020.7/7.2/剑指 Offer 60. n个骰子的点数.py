from typing import List
class Solution:
    def twoSum(self, n: int) -> List[float]:
        baseNum = 1/6
        l1 = [baseNum] * 6
        for i in range(1, n) :
            l2 = [baseNum] * 6
            tmp = [0] * ((5 * (i + 1)) + 1)
            for idx1 in range(len(l1)) :
                for idx2 in range(len(l2)) :
                    tmp[idx1 + idx2] += l1[idx1] * l2[idx2]
            l1 = tmp
        return l1


solute = Solution()
print(solute.twoSum(1))