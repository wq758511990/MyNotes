from typing import List


class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        best = 10**7
        n = len(nums)

        def update(cur):
            nonlocal best
            if abs(cur - target) < abs(best - target):
                best = cur

        for i in range(n):
            if nums[i] == nums[i - 1]:
                continue

            l, r = i + 1, n - 1
            while l < r:
                s = nums[i] + nums[l] + nums[r]
                if s == target:
                    return s
                update(s)

                if s > target:
                    r0 = r - 1
                    while l > r0 and nums[r0] == nums[r]:
                        r0 -= 1
                    r = r0

                else:
                    l0 = l + 1
                    while l0 < r and nums[l0] == nums[l]:
                        l0 += 1
                    l = l0

        return best if best != 10**7 else 3 * nums[0]


solute = Solution()
print(solute.threeSumClosest([0, 0, 0], 1))
