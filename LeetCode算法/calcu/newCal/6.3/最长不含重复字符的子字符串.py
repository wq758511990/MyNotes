class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        dic, res, i = {}, 0, -1
        for j in range(len(s)) :
            if s[j] in dic :
                i = max(dic[s[j]], i)
            dic[s[j]] = j
            res = max(res, j - i)
        return res


        # 字符串长度
        size = len(s)
        # 若为空字符串，返回0
        if not size:
            return 0
        # 左边界
        l = 0
        # 右边界
        r = 1
        # 最长字符串长度
        maxlength = 0
        # 当左边界不大于右边界并且右边界小于字符串长度，进入循环
        while l <= r and r < size:
            # 临时字符串， 即当前左右边界所包含的字符串
            tmp = s[l:r]
            # 若右边界的新字符重复，
            if s[r] in tmp:
                # 更新最长字符串长度
                maxlength = max(r - l, maxlength)
                # 左边界向右推进一位
                l += 1
            else:
            # 若不重复，右边界推进
                r += 1
        # 最后返回maxlength 和 r-l中较大的值， 避免字符串中没有重复的字符串从而导致没有更新maxlength的情况
        return max(maxlength, (r-l))




solute = Solution()
print(solute.lengthOfLongestSubstring("abba"))
