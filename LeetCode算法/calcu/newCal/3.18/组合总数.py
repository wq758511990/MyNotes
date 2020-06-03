class Solution:
    def combinationSum(self, candidates, target) :
        n = len(candidates)
        res = []
        def handler(idx, tempsum, tmp) :
            if tempsum > target or idx == n:
                return
            elif tempsum == target :
                res.append(tmp)
                return
            handler(idx, tempsum + candidates[idx], tmp + [candidates[idx]])
            handler(idx + 1, tempsum, tmp)
        handler(0, 0, [])
        return res

solute = Solution()
print(solute.combinationSum([2,3,6,7], 7))