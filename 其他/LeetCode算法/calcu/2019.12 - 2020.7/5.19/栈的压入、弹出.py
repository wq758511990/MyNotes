class Solution:
    def validateStackSequences(self, pushed: list, popped: list) -> bool:
        pointer = 0
        res = []
        for num in pushed :
            res.append(num)
            while res and res[-1] == popped[pointer] :
                res.pop()
                pointer += 1
        return pointer == len(popped)


solute = Solution()
print(solute.validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]))
