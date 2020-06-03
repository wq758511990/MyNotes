import collections


def mostCommonWord(paragraph: str, banned: list):
    paragraph = paragraph.lower()
    # print(paragraph.split(' '))
    # str1 = ''.join(filter(str.isalpha or str.isspace, paragraph))
    # str1 = ''.join([c for c in paragraph if str.isalpha(c) or str.isspace(c)])
    for c in paragraph:
        if c.isalnum():
            pass
        else:
            paragraph = paragraph.replace(c, ' ')

    # list1 = paragraph.split(' ')
    # dic = collections.Counter(list1)
    # count = 0
    # w = ''
    # for x in list1:
    #     if x.lower() in banned or x == '':
    #         continue
    #     else:
    #         # if x.lower() in map1:
    #         #     map1[x.lower()] += 1
    #         # else:
    #         #     map1[x.lower()] = 1
    #         if count < dic[x.lower()] :
    #             count = dic[x.lower()]
    #             w = x.lower()
    # return w

    l = paragraph.split()
    dic = collections.Counter(l)
    m = 0
    w = ''
    for word in dic:
        if word not in banned:
            if m < dic[word]:
                m = dic[word]
                w = word
    return w


print(mostCommonWord(
    "Bob hit a ball, the hit BALL flew far after it was hit.",
    ["hit"]))
