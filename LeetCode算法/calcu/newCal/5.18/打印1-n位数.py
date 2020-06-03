class Solution:
    def printNumbers(self, n: int) -> list:
        # reslist = []
        # totalCount = 10 ** n
        # for i in range(totalCount - 1) :
        #     reslist.append(i + 1)
        # return reslist

        # return [i for i in range(1, 10 ** n)] if n > 0 else []

        return list(range(1, 10**n))


solute = Solution()
print(solute.printNumbers(1))