class Solution:
    def minArray(self, numbers: list) -> int:
        ln = len(numbers)
        l = 0
        r = ln - 1
        while l < r :
            mid = (l + r) // 2 
            if numbers[mid] < numbers[r] :
                r = mid
            elif numbers[mid] > numbers[r] :
                l = mid + 1
            else :
                r -= 1
        return numbers[l]

solute = Solution()
print(solute.minArray([3, 1, 1]))