class Solution:
    def numberOfSubarrays(self, nums: list, k: int) -> int:
        # 超时
        # ln = len(nums)

        # def handler(start, eventCount, tmp, count):
        #     for i in range(start, ln):
        #         if nums[i] % 2 == 1:
        #             eventCount += 1
        #         if eventCount == k:
        #             count += 1
        #         elif eventCount > k:
        #             break
        #     return count

        # count = 0
        # for i in range(ln):
        #     count += handler(i, 0, [], 0)

        # return count


        # 官方法
        # cnt = [0] * (len(nums) + 1)
        # cnt[0] = 1
        # odd, ans = 0, 0
        # for num in nums:
        #     if num % 2 == 1:
        #         odd += 1
        #     if odd >= k:
        #         ans += cnt[odd - k]
        #     cnt[odd] += 1
        # return ans

        cnt = [0] * (len(nums) + 1)
        cnt[0] = 1
        odd, ans = 0, 0
        for i in nums :
            if i % 2 == 1 :
                odd += 1
            if odd >= k :
                ans += cnt[odd - k]
            cnt[odd] += 1
        return ans



solute = Solution()
print(solute.numberOfSubarrays([1,1,1,1,1], 2))
