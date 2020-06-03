class Solution:
    def dailyTemperatures(self, T: list) -> list:
        l = len(T)
        res = [0] * l
        stack = []

        for idx, value in enumerate(T) :
            while stack and value > T[stack[-1]] :
                res[stack.pop()] = idx - stack[-1] # 这里如果把pop放在右边会报错。 因为是先计算等式右边。stack pop完则下标会有问题，应该先用下标，然后pop
            stack.append(idx)

        return res 


solute = Solution()
print(solute.dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))