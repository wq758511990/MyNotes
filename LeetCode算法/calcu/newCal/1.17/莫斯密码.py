def uniqueMorseRepresentations(words):
    map1 = {'a':".-", 'b':"-...", 'c':"-.-.", 'd':"-..", 'e':".", 'f':"..-.", 'g':"--.", 'h':"....", 'i':"..", 'j':".---", 'k':"-.-", 'l':".-..", 'm':"--",
            'n':"-.", 'o':"---", 'p':".--.", 'q':"--.-", 'r':".-.", 's':"...", 't':"-", 'u':"..-", 'v':"...-", 'w':".--", 'x':"-..-", 'y':"-.--", 'z':"--.."}
    resArr = [] # 这里可以用set len可以获取set的长度
    for str in words :
        str1 = ''
        str1 += ''.join(map1[ch] for ch in str) # 拼接同类型的 ''.join()
        # for ch in str :
        #     str1 += map1[ch]
        if str1 not in resArr :
            resArr.append(str1)
    return len(resArr)

print(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))