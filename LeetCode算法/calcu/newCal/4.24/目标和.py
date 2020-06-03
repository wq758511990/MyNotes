class Solution:
    def findTargetSumWays(self, nums: list, S: int) -> int:

        d = {}
        def dfs(cur, i, d):
            if i < len(nums) and (cur, i) not in d: # 搜索周围节点
                d[(cur, i)] = dfs(cur + nums[i], i + 1, d) + dfs(cur - nums[i],i + 1, d)
            return d.get((cur, i), int(cur == S))   
        return dfs(0, 0, d)

    # def __init__(self):
    #     self.count = 0
    #     self.ln = None
    #     self.step = 0

    # def findTargetSumWays(self, nums: list, S: int) -> int:
    #     self.ln = len(nums)
    #     self.handler(nums[0], S, self.step, nums)
    #     self.handler(-nums[0], S, self.step, nums)

    #     return self.count

    # def handler(self, tmp, S, step, nums):
    #     if tmp == S and step + 1 == ln:
    #         self.count += 1
    #         return

    #     if step < ln - 1:
    #         self.handler(tmp + nums[step + 1], S, step + 1, nums)
    #         self.handler(tmp - nums[step + 1], S, step + 1, nums)


solute = Solution()
print(solute.findTargetSumWays([1, 1, 1, 1, 1], 3))