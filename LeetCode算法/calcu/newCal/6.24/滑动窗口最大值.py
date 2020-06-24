from typing import List
import collections

class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        # size = len(nums)
        # res = []
        # l, r = 0, k - 1
        # while r < size :
        #     res.append(max(nums[l:r + 1]))
        #     l += 1
        #     r += 1
        # return res

        
        # size = len(nums)
        # if not size:
        #     return []
        # res = []
        # stack = []
        # maxNum = float('-inf')
        # for i, num in enumerate(nums) :
        #     maxNum = num if num > maxNum else maxNum
        #     stack.append(num)
        #     if len(stack) == k :
        #         res.append(maxNum)
        #         if maxNum == stack[0] :
        #             maxNum = float('-inf')
        #             for j in range(k-1):
        #                 maxNum = max(maxNum, nums[i-j])
        #         stack.pop(0)

        # return res

        # res = []
        # temp0 = float('-inf') #负穷大
        # temp = temp0
        # for i in range(len(nums)):     
        #     temp = max(temp, nums[i])   #窗口的最后一个值与前缀最大值比较
        #     if i > k-2:                 #判断到达窗口长度
        #         res.append(temp)
        #         if temp <= nums[i-k+1]: #如果即将滑出窗口的值可能是最大值，重新计算下个窗口前缀temp的值
        #             temp = temp0
        #             for j in range(k-1):
        #                 temp = max(temp, nums[i-j])
                    
        # return res


        deque = collections.deque()
        res, n = [], len(nums)
        for i, j in zip(range(1 - k, n + 1 - k), range(n)):
            if i > 0 and deque[0] == nums[i - 1]: deque.popleft() # 删除 deque 中对应的 nums[i-1]
            while deque and deque[-1] < nums[j]: deque.pop() # 保持 deque 递减
            deque.append(nums[j])
            if i >= 0: res.append(deque[0]) # 记录窗口最大值
        return res


solute = Solution()
print(solute.maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))
