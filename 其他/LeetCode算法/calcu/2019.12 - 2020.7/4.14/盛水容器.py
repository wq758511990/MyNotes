class Solution:
    def maxArea(self, height: list) -> int:
        maxArea, l, r = 0, 0, len(height) - 1
        while l < r :
            curArea = (r - l) * min(height[l], height[r])
            maxArea = curArea if curArea > maxArea else maxArea

            if height[l] <= height[r] :
                l += 1
            else :
                r -= 1
        return maxArea 


solute = Solution()
print(solute.maxArea([1,8,6,2,5,4,8,3,7]))