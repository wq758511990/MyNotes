class Solution:
    def combinationSum2(self, candidates, target) :
        if len(candidates) == 0 :
            return []
        res = []
        path = []
        candidates.sort()
        self.__DFS(path, res, candidates, 0, target)
        return res

    def __DFS(self, path, res, candidates, start, target) :
        if target == 0 :
            res.append(path[:]) # 这里要用path[:] 否则因为后续path会发生改变导致res中的数组也一直在变
            return
        if start == len(candidates) :
            return
        
        for cur in range(start, len(candidates)) :
            if cur > start and candidates[cur] == candidates[cur - 1] : continue
            temp = target - candidates[cur]
            if temp < 0 :
                return
            else :
                path.append(candidates[cur])
                self.__DFS(path, res, candidates, cur + 1, temp)
                path.pop()


    # """
    # :type candidates: List[int]
    # :type target: int
    # :rtype: List[List[int]]
    # """
    ###回溯算法：
    
    #本题难点：candidates=[1,7,1],target=8,,,那么[1,7]和[7,1]重复
        # candidates.sort()####
        # def backtrack(candidates, target,  start, list_one):
        #     sum_list=sum(list_one)
        #     if sum_list==target:  #and list_one not in res_list :
        #         res_list.append(list_one[:])#注意，这里必须要[:]，为什么，不然都是记录引用，每次List_one改变。他的内容也是改变之后的内容？
        #         return
        #     if sum_list > target :
        #         return
        #     else:
        #         for i in range(start, end):
        #             if i > start and candidates[i] == candidates[i-1]:continue  ####此处避免重复值
        #             list_one.append(candidates[i])
        #             backtrack(candidates, target, i+1, list_one)
        #             list_one.pop()
        # res_list = []
        # list_one = [] 
        # end=len(candidates)       
        # backtrack(candidates, target, 0, list_one)
        # return res_list

solute = Solution()
print(solute.combinationSum2([10,1,2,7,6,1,5], 8))