import collections
class Solution:
    def trim_spaces(self, s) :

        l, r = 0, len(s) - 1
        while l <= r and s[l] == ' ' :
            l += 1
        while l <= r and s[r] == ' ' :
            r -= 1
        output = []
        while l <= r :
            if s[l] != ' ' :
                output.append(s[l])
            elif output[-1] != ' ' :
                output.append(s[l])
            l += 1

        return output

    def reverse(self, words, l, r) :
        while l < r :
            words[l], words[r] = words[r], words[l]
            l, r = l + 1, r - 1

    def reverse_word(self, words) :
        n = len(words)
        start, end = 0, 0
        while start < n:
            # 循环至单词的末尾
            while end < n and words[end] != ' ':
                end += 1
            # 翻转单词
            self.reverse(words, start, end - 1)
            # 更新start，去找下一个单词
            start = end + 1
            end += 1
        

    def reverseWords(self, s: str) -> str:
        # 内置api
        # return ' '.join(s.split()[::-1])

        # l, r = 0, len(s) - 1
        # while l <= r and s[l] == ' ' :
        #     l += 1
        # while l <= r and s[r] == ' ' :
        #     r -= 1
        # d, word = collections.deque(), []
        # while l <= r :
        #     if s[l] == ' ' and word :
        #         d.appendleft(''.join(word))
        #         word = []
        #     elif s[l] != ' ' :
        #         word.append(s[l])
        #     l += 1
        # d.appendleft(''.join(word))
        
        # return ' '.join(d)
        trim_words = self.trim_spaces(s)
        self.reverse(trim_words, 0, len(trim_words) - 1)
        print(trim_words)
        self.reverse_word(trim_words)
        return ''.join(trim_words)



solute = Solution()
print(solute.reverseWords(' the   sky  is blue'))