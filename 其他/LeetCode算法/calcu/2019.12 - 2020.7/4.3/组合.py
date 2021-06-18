class Solution:
    def combine(self, n: int, k: int) -> list:

        def traceBack(cur = 1, tmp = []) : # 默认从1开始，初始tmp为空
            # tmp为每次递归时数组的长度
            if len(tmp) == k :
                # 满足条件
                res.append(tmp[:])
                # 剪枝
                return
            
            for i in range(cur, n + 1) :  # 每次递归都要再遍历剩下的值
                # 将值添加到tmp
                tmp.append(i)
                # 进行下一次递归，起始为i + 1
                traceBack(i + 1, tmp)
                tmp.pop()

        
        res = []
        traceBack()
        return res

solute = Solution()
print(solute.combine(4, 2))
