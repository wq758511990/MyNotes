def reorderLogFiles(logs) :
    # alphaArr = []
    # numArr = []
    # for log in logs :
    #     logArr = log.split(' ')
    #     if logArr[1].isalpha() :
    #         alphaArr.append(logArr)
    #     else :
    #         numArr.append(' '.join(logArr))
    # alphaArr.sort(key=lambda ele: ele[1])
    # print(alphaArr) # sort修改原数组
    # # print(sorted(alphaArr, key=lambda x: x[1])) sorted 返回一个新的数组
    # print(numArr)
    # return [' '.join(i) for i in alphaArr] + numArr

    def sort_func(item) :
        id1, content = item.split(' ', 1)
        # split(str, num) 如果num有指定参数，则分割成num + 1 个字符串，此处num为1，则分割成2个字符串
        if content[0].isalpha() :
            return [0, content, id1]
        return [1, 0, 0]
    
    return sorted(logs, key=sort_func)


print(reorderLogFiles(["g1 act car","a8 act zoo","a2 act car","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]))