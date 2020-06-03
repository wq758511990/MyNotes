class Solution:
    def merge(self, intervals: list) -> list:
        cpIntervals = sorted(intervals, key=lambda x: x[0])
        n = len(cpIntervals)
        if n == 0 : return []
        res = []
        tmp = cpIntervals[0]
        for i in range(1, n) :
            if cpIntervals[i][0] <= tmp[1] :
                tmp[1] = cpIntervals[i][1] if cpIntervals[i][1] >= tmp[1] else tmp[1]
            else :
                res.append(tmp[:])
                tmp = cpIntervals[i]
        res.append(tmp[:])
        return res


solute = Solution()
print(solute.merge([[1,4],[4,5]]))