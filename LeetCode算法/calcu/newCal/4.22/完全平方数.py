from collections import deque
import math

myset = set()
myset.add(3)
print(list(myset)[0])

class Solution:
    def numSquares(self, n: int) -> int:
        # 所有可以减去的平方
        square_nums = [i ** 2 for i in range(1, int(math.sqrt(n) + 1))]
        # 将dp初始化为长度为n + 1， 每个元素为inf的数组
        dp = [float('inf')] * (n+1)
        # dp[0]初始化为0
        dp[0] = 0

        # 遍历1 到 n + 1
        for i in range(1, n + 1) :
            for square in square_nums :
                # 如果当前下标小于square， 直接break
                if i < square :
                    break
                # 当前的最小次数等于 当前值减去平方值的最小次数 + 1， 与自身的最小值
                dp[i] = min(dp[i], dp[i - square] + 1)
        return dp[-1]



        # BFS
        step = 0
        # 迭代对象
        q = [n]
        # 每次能减去的所有可能的平方值
        squares = [i ** 2 for i in range(1, math.floor(math.sqrt(n)) + 1)]
        # 用于存储已迭代过的数字
        seen = set()
        while q:
            step += 1
            # 存储下一层迭代的数据
            next_q = []
            for tmp in q:
                # 当产生0时，返回res的长度即可。
                if tmp == 0:
                    return step - 1
                # 进行迭代，将迭代后的 >= 0 并且不在seen中的数据加入队列，加入seen中
                for square in squares:
                    next_level = tmp-square
                    if next_level not in seen and next_level >= 0:
                        seen.add(next_level)
                        next_q.append(next_level)
            # 更新迭代对象
            q = next_q


solute = Solution()
print(solute.numSquares(13))
