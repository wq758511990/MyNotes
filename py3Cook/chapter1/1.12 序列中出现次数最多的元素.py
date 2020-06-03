from collections import Counter

words = ['look', 'into', 'my', 'eyes', 'look', 'into', 'my', 'eyes', 'the', 'eyes', 'the', 'eyes', 'the', 'eyes', 'not',
         'around', 'the', 'eyes', "don't", 'look', 'around', 'the', 'eyes', 'look', 'into', 'my', 'eyes', "you're", 'under']
morewords = ['why', 'are', 'you', 'not', 'looking', 'in', 'my', 'eyes']
word_counts = Counter(words)
# top_three = word_counts.most_common(3)
# print(top_three)
more_counts = Counter(morewords)
print(word_counts)
print(more_counts)
print(word_counts - more_counts) #　两个counter 实例可以相加减

# 字典方法计数，存在+1 不存在=1
# wordsCount = {}
# for key in words:
#     if key in wordsCount:
#         wordsCount[key] += 1
#     else:
#         wordsCount[key] = 1

# print(wordsCount)
