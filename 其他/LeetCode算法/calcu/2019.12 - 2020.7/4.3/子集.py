import copy
class Solution:
    def subsets(self, nums: list) -> list:
        
        # def getSubs(tmp) :
        #     if tmp == [] :
        #         return [[]]
        #     else :
        #         preArr = getSubs(tmp[:-1])[:]
        #         newArr = [item + [tmp[-1]] for item in copy.deepcopy(preArr)]
        #         return preArr + newArr

        # return getSubs(nums)

        # newList = [[]]

        # for num in nums :
        #     newList += [preList + [num] for preList in newList]

        # return newList

        # 回溯法
        def traceBack(first = 0, cur = []) :
            if len(cur) == k :
                res.append(cur[:])

            for i in range(first, ln) :
                cur.append(nums[i])
                traceBack(i + 1, cur)
                cur.pop()
        
        res = []
        ln = len(nums)
        for k in range(ln + 1) :
            traceBack()
        return res
    
    def getAllFibs(self, n) :
        def handler(n) :
            if n == 0 :
                return [1]
            if n == 1 :
                return [1, 1]
            else :
                preArr = handler(n - 1)
                newArr = preArr
                newArr.append(newArr[-1] + newArr[-2])
                return newArr


        return handler(n)



solute = Solution()
print(solute.subsets([1, 2, 3]))
# print(solute.getAllFibs(5))