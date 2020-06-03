class Solution:
    def merge(self, intervals: list) -> list:
        if not intervals :
            return []
        sortArr = sorted(intervals, key=lambda x: x[0])
        res = []
        tempArr = sortArr[0]
        ls = len(sortArr)
        for i in range(1, ls) :
            if sortArr[i][1] >= tempArr[1] and sortArr[i][0] <= tempArr[1] :
                tempArr[1] = sortArr[i][1]
            elif sortArr[i][0] > tempArr[1] :
                res.append(tempArr)
                tempArr = sortArr[i]
        res.append(tempArr)
        return res


solute = Solution()
print(solute.merge([[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]]))
